import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const PLATFORM_ICONS: Record<string, string> = {
  devto: "DEV",
  medium: "MED",
  analyticsvidhya: "AV",
};

export default function Blog() {
  const { blogPlatforms, posts } = PORTFOLIO_DATA;

  const postsByPlatform = (platformKey: string) =>
    posts.filter((p) => p.platform === platformKey);

  return (
    <PageTransition className="max-w-3xl space-y-20">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif">Transmissions</h1>
        <p className="text-lg text-muted-foreground font-sans">
          Thoughts on AI, engineering, and the spaces between.
          <span className="block text-sm font-mono mt-2 text-primary opacity-80">
            (Connection established. Receiving logs...)
          </span>
        </p>
      </header>

      {blogPlatforms.map((platform) => {
        const platformPosts = postsByPlatform(platform.key);

        return (
          <section key={platform.key} className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-primary text-background px-2 py-1 tracking-widest">
                  {PLATFORM_ICONS[platform.key]}
                </span>
                <h2 className="text-xl font-serif">{platform.label}</h2>
              </div>
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group"
              >
                View profile
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {platformPosts.length > 0 ? (
              <div className="space-y-0 border-t border-border/40">
                {platformPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="group py-7 border-b border-border/40 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline cursor-pointer">
                      <div className="space-y-1">
                        <time className="text-sm font-mono text-muted-foreground block">
                          {post.date}
                        </time>
                        <span className="text-xs font-mono text-muted-foreground/60">
                          {post.readingTime} read
                        </span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2 py-0.5 border border-border/50 text-muted-foreground group-hover:border-primary/30 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                          {post.excerpt}
                        </p>
                        <div className="pt-1">
                          <span className="text-xs font-mono text-primary uppercase tracking-widest group-hover:underline underline-offset-4">
                            Read Transmission →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-border/50 hover:border-primary/40 px-6 py-5 transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-mono text-sm text-foreground/80">
                    {platform.description}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    Browse all articles on {platform.label} →
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4"
                />
              </a>
            )}
          </section>
        );
      })}

      <div className="border border-border/50 hover:border-primary/50 transition-colors p-8 text-center space-y-4 group">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          // More transmissions available
        </p>
        <h3 className="text-2xl font-serif">Want to read more?</h3>
        <p className="text-muted-foreground font-sans text-sm max-w-sm mx-auto">
          All articles, guides, and deep-dives are available on Dev.to. New
          content drops regularly.
        </p>
        <a
          href="https://dev.to/developer_harsh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 bg-primary text-background px-6 py-3 font-mono text-sm hover:opacity-90 transition-opacity"
        >
          Check out all posts on Dev.to
          <ArrowUpRight size={14} />
        </a>
      </div>
    </PageTransition>
  );
}
