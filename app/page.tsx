import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import {ThemeProvider} from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    </ThemeProvider>
  )
}
