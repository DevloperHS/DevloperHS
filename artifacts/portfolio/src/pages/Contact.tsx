import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition className="flex flex-col min-h-[70vh] justify-center max-w-4xl space-y-12">
      <header>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Establish Contact</h1>
        <p className="text-lg text-muted-foreground font-sans max-w-xl">
          Available for interesting conversations about multi-agent systems, open source, or potential collaborations.
        </p>
      </header>

      <div className="flex flex-col border-y border-border">
        {PORTFOLIO_DATA.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors px-4 -mx-4"
          >
            <span className="text-3xl md:text-5xl font-serif group-hover:italic group-hover:text-primary transition-all duration-300">
              {social.name}
            </span>
            <div className="flex items-center gap-4 mt-4 sm:mt-0 opacity-70 group-hover:opacity-100 transition-opacity">
              <span className="font-mono text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                {social.handle}
              </span>
              <ArrowUpRight className="text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </PageTransition>
  );
}
