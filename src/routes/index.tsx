import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muftlo — Marketing Universe For The Lead Outcomes" },
      { name: "description", content: "Muftlo is a Jaipur-based creative studio built on ideas, design and storytelling, helping brands grow with clear digital experiences." },
      { property: "og:title", content: "Muftlo — Marketing Universe For The Lead Outcomes" },
      { property: "og:description", content: "Muftlo is a Jaipur-based creative studio built on ideas, design and storytelling, helping brands grow with clear digital experiences." },
    ],
  }),
  component: Page,
});
