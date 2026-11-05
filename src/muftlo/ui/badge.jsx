import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
