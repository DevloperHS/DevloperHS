import { PageTransition } from "@/components/PageTransition";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function About() {
  return (
    <PageTransition className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif border-b border-border pb-4">
          Manifesto & Bio
        </h1>
        <div className="prose prose-invert prose-p:font-sans prose-p:text-muted-foreground prose-p:leading-relaxed max-w-3xl text-lg">
          <p>
            I am {PORTFOLIO_DATA.name}, an AI Engineer and Technical Writer driven by curiosity and a desire to build things that matter. Currently operating out of {PORTFOLIO_DATA.location}, I spend my days working at Composio, exploring the frontiers of agentic AI.
          </p>
          <p>
            My background is rooted in rigorous academics at IIT Madras, where I am pursuing a B.S. in Data Science & Applications. But my real education happens in the terminal, reading documentation, and writing code late into the night. I believe in open source, local execution, and the power of well-architected systems.
          </p>
          <p>
            Beyond coding, I run the YouTube channel "{PORTFOLIO_DATA.socials.find(s => s.name === 'YouTube')?.handle}", sharing knowledge and breaking down complex technical concepts for over 6,000 developers. Community is everything.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border/50">
        <div className="space-y-8">
          <h2 className="text-2xl font-serif text-primary">Capabilities</h2>
          
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                {category.replace('_', ' ')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm font-mono border border-border bg-card hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-primary">Academics</h2>
            <div className="border-l-2 border-muted pl-6 space-y-2 relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-none before:-left-[7px] before:top-1.5">
              <h3 className="text-xl font-medium">{PORTFOLIO_DATA.education.degree}</h3>
              <p className="text-muted-foreground font-mono text-sm">{PORTFOLIO_DATA.education.institution} • {PORTFOLIO_DATA.education.period}</p>
              <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {PORTFOLIO_DATA.education.courses.map(course => (
                  <span key={course} className="before:content-['▹'] before:mr-1 before:text-primary/50">{course}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-primary">Community</h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.community.map((item, i) => (
                <div key={i} className="border-l-2 border-muted pl-6 space-y-1 relative before:absolute before:w-2 before:h-2 before:bg-border before:rounded-none before:-left-[5px] before:top-2 hover:before:bg-primary transition-colors">
                  <h3 className="text-lg font-medium">{item.role} <span className="text-primary">@ {item.org}</span></h3>
                  <p className="text-muted-foreground font-mono text-xs">{item.period}</p>
                  {item.desc && <p className="text-sm pt-1 text-muted-foreground">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
