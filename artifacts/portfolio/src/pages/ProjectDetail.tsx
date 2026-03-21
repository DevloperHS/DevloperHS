import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Github, Star, GitFork } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute("/work/:slug");
  const slug = params?.slug;
  
  const project = PORTFOLIO_DATA.projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <PageTransition className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
        <h1 className="text-4xl font-serif">Project Not Found</h1>
        <p className="text-muted-foreground">The project you are looking for does not exist in this dimension.</p>
        <Link href="/work" className="font-mono text-primary hover:underline underline-offset-4 mt-4 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Return to Gallery
        </Link>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="max-w-3xl mx-auto space-y-12">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group min-h-[44px]">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        BACK TO WORKS
      </Link>

      <header className="space-y-6 pb-8 border-b border-border">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight">{project.title}</h1>
        <p className="text-lg sm:text-xl text-primary font-mono">{project.shortDesc}</p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-3 font-mono text-sm hover-brutalist min-h-[44px]"
          >
            <Github size={16} />
            VIEW SOURCE
          </a>
          
          {(project.stars || project.forks) && (
            <div className="flex items-center gap-4 px-4 py-2 border border-border font-mono text-sm text-muted-foreground">
              {project.stars && (
                <span className="flex items-center gap-1"><Star size={14} className="text-primary"/> {project.stars}</span>
              )}
              {project.forks && (
                <span className="flex items-center gap-1"><GitFork size={14} /> {project.forks}</span>
              )}
            </div>
          )}
        </div>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">The Build</h2>
          <div className="prose prose-invert prose-lg max-w-none font-sans text-foreground/80 leading-relaxed">
            <p>{project.fullDesc}</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Technology Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 font-mono text-sm border-l-2 border-primary/50 pl-4">
            {project.tech.map(t => (
              <li key={t} className="flex items-center gap-2 before:content-['>'] before:text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
