import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS","Material UI", "HTML5", "CSS3", "JavaScript", "Redux", "RTK Query", "Axios", "Zustand", "Tanstack Query"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    // {
    //   title: "Tools & Technologies",
    //   skills: ["Git", "Vercel"],
    // },
    {
      title: "Programming Languages and Paradigms",
      skills: ["C++", "Javascript", "Python", "Object Oriented Programming", "Functional Programming"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving","Logical Thinking","Data Structure and Algorithm", "Team Collaboration", "Agile", "Communication", "Leadership"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Tech Stack & Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-sky-500">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover:bg-sky-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
