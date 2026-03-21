import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";

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
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group py-8 border-b border-border grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline cursor-pointer">
              <div className="space-y-1">
                <time className="text-sm font-mono text-muted-foreground block">
                  {post.date}
                </time>
                <span className="text-xs font-mono text-muted-foreground/60">{post.readingTime} read</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 border border-border/50 text-muted-foreground group-hover:border-primary/30 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest group-hover:underline underline-offset-4">
                    Read Transmission →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </PageTransition>
  );
}
