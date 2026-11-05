import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R&D Software Solutions — Marketing Universe For The Lead Outcomes" },
      { name: "description", content: "R&D Software Solutions is a Jaipur-based creative studio built on ideas, design and storytelling, helping brands grow with clear digital experiences." },
      { property: "og:title", content: "R&D Software Solutions — Marketing Universe For The Lead Outcomes" },
      { property: "og:description", content: "R&D Software Solutions is a Jaipur-based creative studio built on ideas, design and storytelling, helping brands grow with clear digital experiences." },
    ],
  }),
  component: Page,
});
