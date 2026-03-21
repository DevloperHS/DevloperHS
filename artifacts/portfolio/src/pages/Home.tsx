import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <PageTransition className="flex flex-col justify-center min-h-[70vh]">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono border border-border bg-muted/30 text-muted-foreground">
          <Terminal size={12} />
          <span>Status: Building the future</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[1.1] tracking-tighter text-foreground">
          {PORTFOLIO_DATA.name.toUpperCase()}
        </h1>
        
        <div className="space-y-4 pt-4 border-l-2 border-primary/50 pl-6 ml-2">
          <h2 className="text-xl md:text-2xl font-mono text-primary">
            {PORTFOLIO_DATA.tagline}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
            Currently working as an {PORTFOLIO_DATA.role} in {PORTFOLIO_DATA.location}. 
            Obsessed with multi-agent systems, local LLMs, and building robust, 
            intelligent applications from the ground up.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-8">
          <Link 
            href="/work" 
            className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-mono font-medium text-sm hover-brutalist"
          >
            VIEW MY WORK
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-6 py-3 font-mono font-medium text-sm hover-brutalist-primary hover:text-primary transition-colors"
          >
            READ MANIFESTO
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
