import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at R&D Software Solutions" },
      { name: "description", content: "Join R&D Software Solutions in Jaipur and build creative work for growing brands." },
      { property: "og:title", content: "Careers at R&D Software Solutions" },
      { property: "og:description", content: "Join R&D Software Solutions in Jaipur and build creative work for growing brands." },
    ],
  }),
  component: Page,
});
