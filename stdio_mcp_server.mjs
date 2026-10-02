#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "bilingualjobs",
  boardId: "bilingualjobs-official",
  domain: "bilingualjobs.io",
  npmName: "zc-bilingualjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
