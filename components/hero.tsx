import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <Link
              href="https://articles.htunaungkyaw.online/"
              target="_blank"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-500/40 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium transition-all duration-300 group shadow-sm shadow-sky-500/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>
                Read my latest coding articles at{" "}
                <span className="underline group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                  articles.htunaungkyaw.online
                </span>{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent">Htun Aung Kyaw</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate full-stack developer who crafts digital experiences using modern technologies with a minimalist approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://github.com/HtunAungKyaw73"
                  target="_blank"
                  className="text-muted-foreground hover:text-sky-500 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/htun-aung-kyaw-385285352/"
                  target="_blank"
                  className="text-muted-foreground hover:text-sky-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-sky-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <Link
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce text-sky-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
