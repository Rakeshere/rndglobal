import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/blog-post";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Muftlo Blog" },
      { name: "description", content: "Read digital marketing insights from the Muftlo blog." },
      { property: "og:title", content: "Muftlo Blog" },
      { property: "og:description", content: "Read digital marketing insights from the Muftlo blog." },
    ],
  }),
  component: Page,
});
