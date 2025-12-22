import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Founder and Instructor",
      company: "Learn Programming Easily Education Center",
      period: "2020 - Present",
      description:
        "It involves Developing course materials, conducting lessons, and mentoring students to enhance their coding skills. Conducted interactive classes that fostered student engagement and participation. Mentored students individually to address their unique learning needs",
      technologies: ["C++", "Python", "Digital Literacy", "Web Development", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Program Associate",
      company: "Institute for Strategy and Policy-Myanmar",
      period: "2023 - Present",
      description:
        "In the role of Program Associate at ISP-Myanmar, I serve as a in-house developer for interactive analysis dashboards and internal utility microsites. Plus, web scraping with Python, data collection, data cleaning, data analysis, and data visualisation",
      technologies: ["Web Development", "React", "NextJS", "RTK", "Python", "Digital Tools", "Excel", "Glide","Data Collection and Cleaning","Data Visualisation"],
    },
  ]

  const education = [
    {
      title: "Bachelor of Information Technology",
      company: "West Yangon Technological University, Myanmar",
      period: "2015 - 2019",
      description:
        "Focused on software engineering, data structures, and algorithms.",
      technologies: ["Java", "C++", "Database", "Software Engineering", "Networking"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Experience & Education</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-sky-500 mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-sky-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-lg">{edu.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{edu.company}</CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-sky-500 mt-2 sm:mt-0 ">
                        <Calendar className="h-4 w-4 mr-1 " />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-sky-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
