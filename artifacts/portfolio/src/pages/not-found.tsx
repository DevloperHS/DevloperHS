import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-4">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">404 — Not Found</p>
        <h1 className="text-5xl font-serif text-foreground">Lost in the void.</h1>
        <p className="font-mono text-sm text-muted-foreground">
          This page doesn't exist, or maybe it never did.
        </p>
        <Link
          href="/"
          className="inline-block border border-border px-6 py-3 font-mono text-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          ← Return to base
        </Link>
      </div>
    </div>
  );
}
