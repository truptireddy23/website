const skillCategories = [
  {
    name: 'Programming & Data',
    skills: ['Python', 'SQL', 'MySQL', 'Java', 'JDBC'],
  },
  {
    name: 'Analytics & BI',
    skills: ['Power BI', 'Tableau', 'SPSS', 'Excel'],
  },
  {
    name: 'AI/ML',
    skills: ['Machine Learning', 'LLMs', 'RAG', 'OCR'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub Copilot', 'VSCode'],
  },
]

const colors = [
  'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
  'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">Skills & Technologies</h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`inline-block px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-105 ${
                      colors[index % colors.length]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
