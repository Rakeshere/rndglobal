

import {
  Navbar as BaseNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/muftlo/ui/resizable-navbar";

import { useState } from "react";
import Link from "@/muftlo/next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "@/muftlo/next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <BaseNavbar className="mx-auto mt-3 px-6 md:px-10 max-w-7xl">
        <NavBody>
          <NavbarLogo>
            <Link
              href="/"
              className="inline-flex cursor-pointer -mt-1 items-baseline gap-1 text-2xl md:text-3xl font-extrabold text-blue-700"
            >
              muftlo
            </Link>
          </NavbarLogo>

          <NavItems
            items={navItems.map(({ name, link }) => ({
              name,
              link,
              className: `relative z-10 rounded-full font-medium transition-all duration-300 ${
                pathname === link ? "text-white" : "text-white"
              }`,
              active: pathname === link,
            }))}
          />

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`relative z-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-medium px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-500 shadow-md hover:shadow-blue-600/40 ${
                pathname === "/contact" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <Link
                href="/"
                className="inline-flex items-baseline gap-1 text-2xl font-extrabold text-blue-800"
              >
                muftlo
              </Link>
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col w-full gap-4 text-center"
                >
                  {navItems.map(({ name, link }) => (
                    <Link
                      key={link}
                      href={link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ${
                        pathname === link
                          ? "bg-blue-700 shadow-md shadow-blue-600/40"
                          : "hover:bg-blue-800 hover:text-white"
                      }`}
                    >
                      {name}
                    </Link>
                  ))}

                  <Link href="/contact">
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-2 rounded-full flex items-center gap-2 justify-center transition hover:shadow-blue-600/40"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </NavbarButton>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </MobileNavMenu>
        </MobileNav>
      </BaseNavbar>
    </div>
  );
}
