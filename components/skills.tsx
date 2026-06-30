import { skillCategories } from "@/lib/skills-data"

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Tech Stack & Skills</h2>
          <div className="flex flex-col gap-10">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      style={{ "--brand": skill.brandColor } as React.CSSProperties}
                      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-[var(--brand)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-[var(--brand)]"
                      >
                        <path d={skill.iconPath} />
                      </svg>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
