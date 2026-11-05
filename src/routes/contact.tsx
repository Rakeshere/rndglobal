import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muftlo" },
      { name: "description", content: "Get in touch with Muftlo to grow your brand with digital marketing." },
      { property: "og:title", content: "Contact Muftlo" },
      { property: "og:description", content: "Get in touch with Muftlo to grow your brand with digital marketing." },
    ],
  }),
  component: Page,
});
