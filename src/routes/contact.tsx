import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact R&D Software Solutions" },
      { name: "description", content: "Get in touch with R&D Software Solutions to grow your brand with digital marketing." },
      { property: "og:title", content: "Contact R&D Software Solutions" },
      { property: "og:description", content: "Get in touch with R&D Software Solutions to grow your brand with digital marketing." },
    ],
  }),
  component: Page,
});
