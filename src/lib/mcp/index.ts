import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getVisitorCount from "./tools/get-visitor-count";
import getIstTime from "./tools/get-ist-time";

export default defineMcp({
  name: "najish-s-vibe-card",
  title: "Najish's Vibe Card",
  version: "0.1.0",
  instructions:
    "Public tools for Md Najish Anjum's profile card. Use `get_profile` for identity and links, `get_visitor_count` for total visits, and `get_ist_time` for current India Standard Time.",
  tools: [getProfile, getVisitorCount, getIstTime],
});
