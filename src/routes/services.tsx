import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Services — R&D Software Solutions Digital Marketing" },
      { name: "description", content: "Digital marketing, branding, web development and performance ads by R&D Software Solutions." },
      { property: "og:title", content: "Services — R&D Software Solutions Digital Marketing" },
      { property: "og:description", content: "Digital marketing, branding, web development and performance ads by R&D Software Solutions." },
    ],
  }),
  component: Page,
});
