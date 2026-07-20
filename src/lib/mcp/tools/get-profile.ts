import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns Md Najish Anjum's public profile info (name, title, tagline, and social/portfolio links).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Md Najish Anjum",
      title: "AI/ML Developer & Full Stack Builder",
      tagline: "Build Ajinava Edge · I Lead Team ILM Tech",
      links: {
        portfolio: "https://najish-anjum-portfolio.vercel.app/",
        github: "https://github.com/Najishanjum",
        linkedin: "https://www.linkedin.com/in/md-najish-anjum-044078328",
        workWithMe: "https://teamilmtech.site",
        community: "https://chat.whatsapp.com/IJw256xuepP956JsufMY6g",
        email: "najishanjum058@gmail.com",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
