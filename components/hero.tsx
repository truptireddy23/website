'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                <span className="text-balance">Hi, I&apos;m Trupti Reddy</span>
              </h1>
              <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Enthusiast
              </p>
            </div>

            <p className="max-w-lg text-lg text-foreground/80 leading-relaxed">
              Building, debugging, analyzing and hiking the extra mile. A coding enthusiast and data analytics explorer who crafts digital solutions with curiosity and precision.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base py-6 px-8"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="text-base py-6 px-8"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trupti%20Reddy-UqB0Z3b45ZQ8uN2z6rF4bq6FssBu9l.png"
                alt="Trupti Reddy"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
