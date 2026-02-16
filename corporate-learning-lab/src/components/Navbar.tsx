"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Menu,
  X,
  LayoutDashboard,
  Beaker,
  Briefcase,
  Wrench,
  MessageSquare,
  GraduationCap,
  PenTool,
  ClipboardCheck,
  Monitor,
  BookOpen,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Lab Dashboard", icon: LayoutDashboard },
  { href: "/experiments", label: "Experiments", icon: Beaker },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/toolkits", label: "Toolkits", icon: Wrench },
  { href: "/roundtable", label: "Roundtable", icon: MessageSquare },
  { href: "/campus-to-corporate", label: "Campus → Corporate", icon: GraduationCap },
  { href: "/design-studio", label: "Design Studio", icon: PenTool },
  { href: "/assessment-lab", label: "Assessment Lab", icon: ClipboardCheck },
  { href: "/lms-lab", label: "LMS Lab", icon: Monitor },
  { href: "/lab-notebook", label: "Lab Notebook", icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <FlaskConical className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight leading-none">
                  The Corporate
                </span>
                <span className="text-xs text-accent font-mono tracking-wider leading-none mt-0.5">
                  LEARNING LAB
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded-md ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
              <div className="relative group">
                <button className="px-3 py-2 text-xs font-medium tracking-wide text-muted hover:text-foreground hover:bg-card rounded-md transition-colors">
                  More Labs ▾
                </button>
                <div className="absolute right-0 top-full mt-1 w-52 py-2 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navLinks.slice(6).map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium transition-colors ${
                          pathname === link.href
                            ? "text-accent bg-accent/10"
                            : "text-muted hover:text-foreground hover:bg-card-hover"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-card transition-colors"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 pt-16 bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-accent bg-accent/10 border border-accent/20"
                        : "text-muted hover:text-foreground hover:bg-card"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
