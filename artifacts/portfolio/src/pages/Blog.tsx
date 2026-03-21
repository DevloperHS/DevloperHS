import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(blogPlatforms[0].key);

  const activePlatform = blogPlatforms.find((p) => p.key === activeTab)!;
  const platformPosts = posts.filter((p) => p.platform === activeTab);

  return (
    <PageTransition className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif">Transmissions</h1>
        <p className="text-lg text-muted-foreground font-sans">
          Thoughts on AI, engineering, and the spaces between.
          <span className="block text-sm font-mono mt-2 text-primary opacity-80">
            (Connection established. Receiving logs...)
          </span>
        </p>
      </header>

      <div className="space-y-8">
        <div className="relative border-b border-border">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {blogPlatforms.map((platform) => (
              <button
                key={platform.key}
                onClick={() => setActiveTab(platform.key)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-3 min-h-[44px] font-mono text-sm transition-colors border-b-2 -mb-[2px] whitespace-nowrap ${
                  activeTab === platform.key
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`text-xs px-1.5 py-0.5 tracking-widest transition-colors ${
                    activeTab === platform.key
                      ? "bg-primary text-background"
                      : "bg-border text-muted-foreground"
                  }`}
                >
                  {PLATFORM_ICONS[platform.key]}
                </span>
                {platform.label}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-sans text-muted-foreground">
            {activePlatform.description}
          </p>
          <a
            href={activePlatform.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group flex-shrink-0 ml-4"
          >
            View profile
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {platformPosts.length > 0 ? (
          <div className="space-y-0 border-t border-border">
            {platformPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group py-7 border-b border-border grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline cursor-pointer">
                  <div className="space-y-1">
                    <time className="text-sm font-mono text-muted-foreground block">
                      {post.date}
                    </time>
                    <span className="text-xs font-mono text-muted-foreground/60">
                      {post.readingTime} read
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
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
            href={activePlatform.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-border/50 hover:border-primary/40 px-6 py-5 transition-colors"
          >
            <div className="space-y-1">
              <p className="font-mono text-sm text-foreground/80">
                {activePlatform.description}
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                Browse all articles on {activePlatform.label} →
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4"
            />
          </a>
        )}
      </div>
    </PageTransition>
  );
}
