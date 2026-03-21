import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-lg font-bold tracking-tight hover:text-primary transition-colors">
            {PORTFOLIO_DATA.handle}
          </Link>
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = link.path === "/" ? location === "/" : location.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary uppercase tracking-widest",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Nav - simplified for this implementation, typically would use a sheet/drawer */}
          <div className="md:hidden flex items-center gap-4 text-xs font-medium uppercase tracking-widest overflow-x-auto pb-1">
             {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "whitespace-nowrap transition-colors",
                    (link.path === "/" ? location === "/" : location.startsWith(link.path)) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
