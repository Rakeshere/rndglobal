import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/blog-post";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "R&D Software Solutions Blog" },
      { name: "description", content: "Read digital marketing insights from the R&D Software Solutions blog." },
      { property: "og:title", content: "R&D Software Solutions Blog" },
      { property: "og:description", content: "Read digital marketing insights from the R&D Software Solutions blog." },
    ],
  }),
  component: Page,
});
