# Notion Progress Helper

This folder contains a small dependency-free helper for appending progress updates to the planning page in Notion.

The Codex app may expose a native Notion connector in some sessions. When it does not, use this helper with a Notion integration token.

## Setup

1. Create a Notion integration with insert content access.
2. Share the target Notion page with that integration.
3. Set environment variables:

```powershell
$env:NOTION_TOKEN="secret_xxx"
$env:NOTION_PAGE_ID="363aa670a49f819987c1e79170945b71"
```

`NOTION_VERSION` is optional and defaults to `2026-03-11`.

## Append the Current Progress Update

```powershell
node tools/notion/append-progress.mjs --file tools/notion/progress-update.md
```

You can also pass a page URL or page ID directly:

```powershell
node tools/notion/append-progress.mjs --page "https://www.notion.so/363aa670a49f819987c1e79170945b71" --file tools/notion/progress-update.md
```

## Notes

- The helper appends content to the end of the page.
- It supports headings, bullet lists, numbered lists, paragraphs, and fenced code blocks.
- It does not edit existing blocks or page properties.
- Do not pass the token as a command-line argument; use `NOTION_TOKEN` so it is less likely to be recorded in shell history.
