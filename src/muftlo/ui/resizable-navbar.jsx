"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "75%" : "100%",
        borderColor: visible ? "transparent" : "rgba(255,255,255,0.2)",
        borderWidth: visible ? "0px" : "1px",
        backgroundColor: visible ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        const isHovered = hovered === idx;

        return (
          <a
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            key={`link-${idx}`}
            href={item.link}
            className="relative px-4 py-2 rounded-full transition-all duration-200"
          >
            {(isHovered || isActive) && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 rounded-full bg-white dark:bg-neutral-800"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}

            <span
              className={cn(
                "relative z-20 transition-colors duration-200",
                isHovered || isActive ? "text-black" : "text-white"
              )}
            >
              {item.name}
            </span>
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(16px)",
        backgroundColor: visible ? "rgba(255, 255, 255, 0.05)" : "transparent",
        borderRadius: visible ? "2rem" : "2rem",
        scale: visible ? 1 : 0.98,
        y: visible ? 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={cn(
        "relative z-50 mx-auto flex w-[100%] flex-col items-center justify-between px-4 py-2 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] lg:hidden rounded-full",
        visible && "bg-white/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "absolute top-[4.2rem] left-1/2 -translate-x-1/2 z-40 flex w-[100%] flex-col items-center gap-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] text-white",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 cursor-pointer active:scale-90 transition-all duration-200"
    >
      {isOpen ? (
        <IconX className="text-white w-6 h-6" />
      ) : (
        <IconMenu2 className="text-white w-6 h-6" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="flex cursor-pointer z-10 items-center gap-2 px-2 text-2xl font-extrabold tracking-tight"
    >
      <span className="bg-gradient-to-r cursor-pointer from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
        muftlo
      </span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "gradient",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2 rounded-xl text-sm font-semibold relative cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 inline-block text-center";

  const variantStyles = {
    gradient:
      "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
    dark: "bg-black text-white border border-white/10 hover:bg-white/10",
    secondary: "bg-white/10 text-white hover:bg-white/20",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
