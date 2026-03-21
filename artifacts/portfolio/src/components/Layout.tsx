import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { NoiseOverlay } from "./NoiseOverlay";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground">
      <NoiseOverlay />
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        {children}
      </main>
      <footer className="w-full border-t border-border/50 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Purnendu Shukla. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Handcrafted in the dark.</p>
        </div>
      </footer>
    </div>
  );
}
