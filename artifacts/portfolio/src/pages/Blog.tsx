import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Blog() {
  return (
    <PageTransition className="max-w-3xl space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif">Transmissions</h1>
        <p className="text-lg text-muted-foreground font-sans">
          Thoughts on AI, engineering, and the spaces between. 
          <span className="block text-sm font-mono mt-2 text-primary opacity-80">(Connection established. Receiving logs...)</span>
        </p>
      </header>

      <div className="space-y-0 border-t border-border">
        {PORTFOLIO_DATA.posts.map((post) => (
          <article 
            key={post.id} 
            className="group py-8 border-b border-border grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline"
          >
            <time className="text-sm font-mono text-muted-foreground">
              {post.date}
            </time>
            <div className="space-y-3">
              <h2 className="text-2xl font-serif group-hover:text-primary transition-colors cursor-pointer inline-block">
                {post.title}
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest cursor-pointer group-hover:underline underline-offset-4">
                  Read Transmission →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="p-6 border border-border/50 bg-muted/20 text-center">
        <p className="font-mono text-sm text-muted-foreground">More transmissions pending decoding...</p>
      </div>
    </PageTransition>
  );
}
