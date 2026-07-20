import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_ist_time",
  title: "Get IST time",
  description: "Returns the current date and time in India Standard Time (Asia/Kolkata, UTC+5:30).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: false, openWorldHint: false },
  handler: () => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
      hour12: true,
    }).format(now);
    const payload = { iso: now.toISOString(), ist: formatted, timezone: "Asia/Kolkata", utcOffset: "+05:30" };
    return {
      content: [{ type: "text", text: formatted }],
      structuredContent: payload,
    };
  },
});
