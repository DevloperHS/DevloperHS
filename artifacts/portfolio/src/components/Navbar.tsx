import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location === "/" : location.startsWith(path);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-serif text-lg font-bold tracking-tight hover:text-primary transition-colors"
            >
              {PORTFOLIO_DATA.handle}
            </Link>

            <nav className="hidden md:flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary uppercase tracking-widest",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center w-11 h-11 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/97 backdrop-blur-lg md:hidden pt-16">
          <nav className="flex flex-col items-start px-8 pt-12 gap-1">
            {links.map((link, i) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "w-full py-4 text-3xl font-serif tracking-tight border-b border-border/40 transition-colors",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground",
                  i === links.length - 1 && "border-b-0"
                )}
              >
                <span className="text-xs font-mono text-muted-foreground/50 mr-3">
                  0{i + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-8 pb-12 font-mono text-xs text-muted-foreground/40 uppercase tracking-widest">
            {PORTFOLIO_DATA.handle}
          </div>
        </div>
      )}
    </>
  );
}
