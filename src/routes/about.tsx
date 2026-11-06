import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About R&D Software Solutions — Jaipur Creative Studio" },
      { name: "description", content: "Meet the R&D Software Solutions team: a Jaipur-based studio that loves ideas, design and storytelling." },
      { property: "og:title", content: "About R&D Software Solutions — Jaipur Creative Studio" },
      { property: "og:description", content: "Meet the R&D Software Solutions team: a Jaipur-based studio that loves ideas, design and storytelling." },
    ],
  }),
  component: Page,
});
