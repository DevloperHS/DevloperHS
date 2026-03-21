import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";
import { ArrowUpRight, Star } from "lucide-react";

export default function Work() {
  return (
    <PageTransition className="space-y-12">
      <header className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-serif">Selected Works</h1>
        <p className="text-lg text-muted-foreground font-sans">
          A collection of tools, agents, and systems built to solve hard problems and explore the edges of applied AI.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <Link key={project.id} href={`/work/${project.slug}`}>
            <article className="group h-full flex flex-col bg-card border border-border p-6 sm:p-8 hover-brutalist transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
              
              <h2 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              
              <p className="text-muted-foreground font-sans mb-8 flex-grow">
                {project.shortDesc}
              </p>
              
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1">+{project.tech.length - 3}</span>}
                </div>
                
                {project.stars && (
                  <div className="flex items-center gap-1 text-xs font-mono text-primary">
                    <Star size={12} className="fill-primary/20" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </PageTransition>
  );
}
