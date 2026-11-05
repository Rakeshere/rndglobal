import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Muftlo Blog — Digital Marketing Insights" },
      { name: "description", content: "Ideas and guides on digital marketing, branding and growth from Muftlo." },
      { property: "og:title", content: "Muftlo Blog — Digital Marketing Insights" },
      { property: "og:description", content: "Ideas and guides on digital marketing, branding and growth from Muftlo." },
    ],
  }),
  component: Page,
});
