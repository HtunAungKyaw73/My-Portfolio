import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      description: "Modern frameworks and cutting-edge tools",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First",
      description: "Responsive design for all devices",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm <b className="text-sky-400">a passionate fullstack developer</b> with a love for creating digital experiences that make a
                difference. I am also known for my <b className="text-sky-400">perseverance and work ethic</b>. My journey in web development started with curiosity and has evolved into a comprehensive
                skill set spanning both frontend and backend technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I believe in writing <b className="text-sky-400">clean, maintainable code</b> and staying up-to-date with the latest industry trends.
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-muted rounded-full flex items-center justify-center">
                  {/*<Code className="h-24 w-24 text-primary" />*/}
                    <img src="/me.jpg" className="rounded-full" alt="Htun Aung Kyaw"/>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:bg-gray-100">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">{highlight.icon}</div>
                  <h3 className="font-semibold mb-2 text-sky-500">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
