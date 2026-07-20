import { defineTool } from "@lovable.dev/mcp-js";
import { createClient } from "@supabase/supabase-js";

export default defineTool({
  name: "get_visitor_count",
  title: "Get visitor count",
  description: "Returns the total number of visits to the profile card.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    const { count, error } = await supabase
      .from("page_visits")
      .select("*", { count: "exact", head: true });
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    const total = count ?? 0;
    return {
      content: [{ type: "text", text: `Total visits: ${total}` }],
      structuredContent: { total },
    };
  },
});
