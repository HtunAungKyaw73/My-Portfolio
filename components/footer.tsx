import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {year} Htun Aung Kyaw. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
              <Link href="https://github.com/HtunAungKyaw73" target="_blank" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/htun-aung-kyaw-385285352/" target="_blank" className="text-muted-foreground hover:text-sky-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                  href="mailto:htunaungkyaw730@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-sky-500 transition-colors"
              >
                  <Mail className="h-5 w-5" />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
