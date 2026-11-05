import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Muftlo" },
      { name: "description", content: "Join Muftlo in Jaipur and build creative work for growing brands." },
      { property: "og:title", content: "Careers at Muftlo" },
      { property: "og:description", content: "Join Muftlo in Jaipur and build creative work for growing brands." },
    ],
  }),
  component: Page,
});
