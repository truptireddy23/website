'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? 'border-b border-border bg-background/80 backdrop-blur-sm'
          : 'bg-background'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Trupti Reddy
        </Link>

        <div className="hidden gap-8 md:flex">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </button>
        </div>

        <Button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Get in Touch
        </Button>
      </nav>
    </header>
  )
}
