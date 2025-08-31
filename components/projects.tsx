import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
      {
          title: "ExpressServer-JWTAuthentication",
          description: "Backend API using Express MVC Architecture and JWT Authentication. I wrote this backend server including access and refresh token. There are four API endpoints: todos, movies, reviews, users. The project is divided into routes, controllers, services, models for design architecture.",
          image: "/express-server.jpg",
          technologies: ["Javascript", "Express.js", "Mongo","Mongoose.js", "JWT",],
          githubUrl: "https://github.com/HtunAungKyaw73/ExpressServer-JWTAuthentication",
          liveUrl: "https://github.com/HtunAungKyaw73/ExpressServer-JWTAuthentication",
      },

    {
      title: "Restaurant Website",
      description:
        "I created this website using HTML5 and CSS3 to polish my front-end skills. I learned many fundamental concepts of website building. This was written in desktop first approach using float property for CSS to mimic old development style.",
      image: "/restaurant-website.png",
      technologies: ["HTML5", "CSS3", "Javascript", "Responsive"],
      githubUrl: "https://github.com/HtunAungKyaw73/Food-Order-Website",
      liveUrl: "https://food-order-website-mauve.vercel.app/",
    },
      {
          title: "Movie Dashboard with Redux",
          description:
              "Using NextJs Framework, I created a movie dashboard app with simple and easy to perform CRUD operations. With the help of RTK, app state management become more powerful. React bootstrap and Material UI was beautifully used for quick UI, but for main layout, I wrote CSS from scratch.",
          image: "/redux-movie-dashboard.png",
          technologies: ["Next.js", "TypeScript", "Redux/RTK", "Formik", "Yup", "Material UI", "Vercel"],
          githubUrl: "https://github.com/HtunAungKyaw73/MovieDashboard-ReactRedux",
          liveUrl: "https://movie-dashboard-react-redux.vercel.app/",
      },
    {
      title: "Blogr Website",
      description:
        "A responsive website written from scratch using HTML5, CSS3. This project is from frontend mentor challenges. This is written in mobile first approach with two breakpoints: 768px and 1024px. Mastering CSS and Playing with JS for Menu Bar.",
      image: "/blogr-website.png",
      technologies: ["HTML5", "CSS3", "Javascript", "Responsive", "Flex"],
      githubUrl: "https://github.com/HtunAungKyaw73/blogr-website",
      liveUrl: "https://blogr-website-theta.vercel.app/",
    },

  ]
    const all_works = [
        {
            title: "Student-and-Teacher-Record-System",
            description: "This was my very first OOP project written in C++ on April 2017 right after my second year.",
            technologies: ["C++", "fstream"],
            githubUrl: "https://github.com/HtunAungKyaw73/Student-and-Teacher-Record-System"
        },
        {
            title: "MovieDashboard-RTKQuery",
            description: "RTK Query Project with NextJS using Express for Backend.",
            technologies: ["Next.js", "TypeScript", "Redux/RTK Query", "Formik", "Yup", "Material UI", "Vercel"],
            githubUrl: "https://github.com/HtunAungKyaw73/MovieDashboard-RTKQuery"
        },
        {
            title: "TeleScrape",
            description: "Telegram Post Scraping with Telethon Library",
            technologies: ["Python", "Telethon"],
            githubUrl: "https://github.com/HtunAungKyaw73/TeleScrape"
        },
        {
            title: "WebScrape-BeautifulSoup",
            description: "Fetch table data from a webpage using BeautifulSoup and Selenium Library.",
            technologies: ["Python", "BeautifulSoup", "Selenium"],
            githubUrl: "https://github.com/HtunAungKyaw73/WebScrape-BeautifulSoup"
        },
        {
            title: "Web Essential Parts with CSS",
            description: "CSS Layouts using flex and grid; This is my learning practices.",
            technologies: ["HTML5", "CSS3"],
            githubUrl: "https://github.com/HtunAungKyaw73/css_layout_learning"
        },
        {
            title: "Bookshelf with PHP",
            description: "Using PHP 5.5, I wrote bookshelf project. Just simply with mysql and php server side rendering.",
            technologies: ["PHP", "HTML5", "CSS3", "MySQL"],
            githubUrl: "https://github.com/HtunAungKyaw73/Bookshelf-PHP"
        },

    ]
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
        <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-center m-12">My personal projects</h3>
            <div className="max-w-3xl mx-auto">
                {all_works.map((project, index) => (
                    <Card key={index} className="overflow-hidden mb-6">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary" className="bg-sky-200">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                                <Link href={project.githubUrl} target="_blank">
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}
