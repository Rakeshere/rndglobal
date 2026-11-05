import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Muftlo — Jaipur Creative Studio" },
      { name: "description", content: "Meet the Muftlo team: a Jaipur-based studio that loves ideas, design and storytelling." },
      { property: "og:title", content: "About Muftlo — Jaipur Creative Studio" },
      { property: "og:description", content: "Meet the Muftlo team: a Jaipur-based studio that loves ideas, design and storytelling." },
    ],
  }),
  component: Page,
});
