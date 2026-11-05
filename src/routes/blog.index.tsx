import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "R&D Software Solutions Blog — Digital Marketing Insights" },
      { name: "description", content: "Ideas and guides on digital marketing, branding and growth from R&D Software Solutions." },
      { property: "og:title", content: "R&D Software Solutions Blog — Digital Marketing Insights" },
      { property: "og:description", content: "Ideas and guides on digital marketing, branding and growth from R&D Software Solutions." },
    ],
  }),
  component: Page,
});
