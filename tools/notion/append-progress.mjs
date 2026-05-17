#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const NOTION_API_BASE = "https://api.notion.com/v1";
const DEFAULT_NOTION_VERSION = "2026-03-11";
const MAX_RICH_TEXT_LENGTH = 1900;

function usage() {
  return [
    "Usage:",
    "  node tools/notion/append-progress.mjs --file <path> [--page <page-url-or-id>]",
    "",
    "Environment:",
    "  NOTION_TOKEN    Required. Notion integration token.",
    "  NOTION_PAGE_ID  Required unless --page is provided.",
    "  NOTION_VERSION  Optional. Defaults to 2026-03-11.",
  ].join("\n");
}

function parseArgs(argv) {
  const args = {
    file: undefined,
    page: undefined,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--help" || value === "-h") {
      args.help = true;
      continue;
    }

    if (value === "--file") {
      args.file = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--page") {
      args.page = argv[index + 1];
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${value}`);
  }

  return args;
}

function extractPageId(value) {
  if (!value) {
    return undefined;
  }

  const compact = value.trim();
  const match = compact.match(/[0-9a-fA-F]{32}|[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);

  if (!match) {
    throw new Error("Could not find a Notion page ID in --page or NOTION_PAGE_ID.");
  }

  return match[0].replaceAll("-", "");
}

function richText(content) {
  return [
    {
      type: "text",
      text: {
        content: content.slice(0, MAX_RICH_TEXT_LENGTH),
      },
    },
  ];
}

function textBlock(type, content) {
  return {
    object: "block",
    type,
    [type]: {
      rich_text: richText(content),
    },
  };
}

function codeBlock(content, language = "plain text") {
  return {
    object: "block",
    type: "code",
    code: {
      rich_text: richText(content),
      language,
    },
  };
}

function parseMarkdown(markdown) {
  const blocks = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraph = [];
  let code = [];
  let codeLanguage = "plain text";
  let inCode = false;

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }

    blocks.push(textBlock("paragraph", paragraph.join(" ")));
    paragraph = [];
  };

  const flushCode = () => {
    blocks.push(codeBlock(code.join("\n"), codeLanguage || "plain text"));
    code = [];
    codeLanguage = "plain text";
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushParagraph();
        codeLanguage = trimmed.replace(/^```/, "").trim() || "plain text";
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (trimmed.length === 0) {
      flushParagraph();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      blocks.push(textBlock(`heading_${level}`, headingMatch[2]));
      continue;
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      blocks.push(textBlock("bulleted_list_item", bulletMatch[1]));
      continue;
    }

    const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numberedMatch) {
      flushParagraph();
      blocks.push(textBlock("numbered_list_item", numberedMatch[1]));
      continue;
    }

    paragraph.push(trimmed);
  }

  if (inCode) {
    flushCode();
  }

  flushParagraph();

  return blocks;
}

async function appendBlocks({ token, notionVersion, pageId, blocks }) {
  const response = await fetch(`${NOTION_API_BASE}/blocks/${pageId}/children`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": notionVersion,
    },
    body: JSON.stringify({
      children: blocks,
      position: {
        type: "end",
      },
    }),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = body.message ? `: ${body.message}` : "";
    throw new Error(`Notion API request failed with HTTP ${response.status}${message}`);
  }

  return body;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(usage());
    return;
  }

  if (!args.file) {
    throw new Error(`Missing --file.\n\n${usage()}`);
  }

  const token = process.env.NOTION_TOKEN || process.env.NOTION_API_KEY;
  if (!token) {
    throw new Error("Missing NOTION_TOKEN environment variable.");
  }

  const pageId = extractPageId(args.page || process.env.NOTION_PAGE_ID);
  const notionVersion = process.env.NOTION_VERSION || DEFAULT_NOTION_VERSION;
  const markdown = await readFile(args.file, "utf8");
  const blocks = parseMarkdown(markdown);

  if (blocks.length === 0) {
    throw new Error(`No supported Markdown content found in ${args.file}.`);
  }

  if (blocks.length > 100) {
    throw new Error(`Notion append limit is 100 blocks per request; parsed ${blocks.length}.`);
  }

  const result = await appendBlocks({
    token,
    notionVersion,
    pageId,
    blocks,
  });

  console.log(`Appended ${result.results?.length ?? blocks.length} block(s) to Notion page ${pageId}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
