import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — R&D Software Solutions Digital Marketing" },
      { name: "description", content: "Digital marketing, branding, web development and performance ads by Muftlo." },
      { property: "og:title", content: "Services — R&D Software Solutions Digital Marketing" },
      { property: "og:description", content: "Digital marketing, branding, web development and performance ads by Muftlo." },
    ],
  }),
  component: Page,
});
