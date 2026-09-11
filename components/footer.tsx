import Link from 'next/link'
import { GitBranch, Mail, Users } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-foreground/60">
            © {currentYear} Trupti Reddy. Crafted with passion and code.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://github.com/truptireddy23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="size-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/truptireddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Users className="size-5" />
            </Link>
            <Link
              href="mailto:truptireddy2017@gmail.com"
              className="text-foreground/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
