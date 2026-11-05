import { useLocation, useParams as useRParams, useRouter as useRRouter } from "@tanstack/react-router";
export function usePathname() { return useLocation({ select: (l) => l.pathname }); }
export function useParams() { return useRParams({ strict: false }); }
export function useRouter() { const r = useRRouter(); return { push: (to) => r.navigate({ to }), back: () => r.history.back() }; }
