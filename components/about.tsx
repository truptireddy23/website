import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid items-center gap-12 md:grid-cols-3">
          {/* Image */}
          <div className="flex justify-center md:col-span-1">
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-2xl" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trupti%20Reddy-UqB0Z3b45ZQ8uN2z6rF4bq6FssBu9l.png"
                alt="Trupti Reddy profile"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 md:col-span-2">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently pursuing a <strong>Master of Information Management</strong> at the University of Illinois Urbana-Champaign (2025-2027), with a <strong>Bachelor of Computer Engineering</strong> from Savitribai Phule Pune University.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My professional experience spans <strong>SAP ABAP consulting</strong> at Volkswagen Group Technology Solutions, <strong>Data analytics internships</strong> at COUNTRY Financial and the Chicago Transit Authority, and <strong>Technology consulting</strong> at UIUC&apos;s Business Intelligence Group.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-foreground">Beyond work, I enjoy:</p>
              <ul className="grid gap-2 text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  Traveling and exploring new cultures
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  Trekking and outdoor adventures
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  Playing badminton
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
