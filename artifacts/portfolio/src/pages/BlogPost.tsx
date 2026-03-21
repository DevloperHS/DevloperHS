import { useRoute, Link } from "wouter";
import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";
import { BLOG_CONTENT } from "@/lib/blogContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";

  const post = PORTFOLIO_DATA.posts.find((p) => p.slug === slug);
  const content = BLOG_CONTENT[slug];

  if (!post || !content) {
    return (
      <PageTransition className="max-w-3xl space-y-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Back to Transmissions
        </Link>
        <h1 className="text-4xl font-serif">Post not found</h1>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="max-w-3xl space-y-10">
      <div className="space-y-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Back to Transmissions
        </Link>

        <div className="space-y-4 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 border border-primary/40 text-primary">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </div>

      <article className="blog-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-2xl font-serif mt-10 mb-4 text-foreground">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-serif mt-8 mb-3 text-foreground">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-base font-mono font-semibold mt-6 mb-2 text-primary">{children}</h4>
            ),
            p: ({ children }) => (
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-1 mb-4 pl-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="space-y-1 mb-4 pl-4 list-decimal list-inside">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-muted-foreground font-sans flex gap-2">
                <span className="text-primary font-mono mt-0.5 shrink-0">▹</span>
                <span>{children}</span>
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-primary/50 pl-4 my-4 text-muted-foreground italic">{children}</blockquote>
            ),
            code: ({ inline, children, className }: { inline?: boolean; children?: React.ReactNode; className?: string }) => {
              const match = className?.match(/language-(\w+)/);
              const language = match ? match[1] : "text";
              const code = String(children).replace(/\n$/, "");

              if (inline) {
                return (
                  <code className="px-2 py-1 bg-primary/15 text-primary font-mono text-sm border border-primary/30 rounded-sm">
                    {children}
                  </code>
                );
              }

              return (
                <div className="my-6 rounded-lg overflow-hidden border border-border/30 shadow-lg">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 border-b border-border/30 flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{language}</span>
                  </div>
                  <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      background: "#1e1e1e",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                    showLineNumbers={code.split("\n").length > 5}
                    wrapLines={true}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              );
            },
            pre: ({ children }) => <div>{children}</div>,
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm font-mono">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="border-b border-border">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="text-left p-2 text-primary font-semibold">{children}</th>
            ),
            td: ({ children }) => (
              <td className="p-2 border-b border-border/30 text-muted-foreground">{children}</td>
            ),
            hr: () => <hr className="border-border my-8" />,
            strong: ({ children }) => (
              <strong className="text-foreground font-semibold bg-primary/10 px-1 rounded-sm">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="text-primary/90 italic">{children}</em>
            ),
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 hover:bg-primary/5 transition-colors px-1 rounded-sm">
                {children}
              </a>
            ),
            img: ({ src, alt }) => (
              <img src={src} alt={alt} className="my-6 max-w-full border border-border/30" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      <div className="pt-8 border-t border-border">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Back to Transmissions
        </Link>
      </div>
    </PageTransition>
  );
}
