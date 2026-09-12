export interface ResumeExperience {
  title: string
  company: string
  dates: string
  bullets: string[]
}

export interface ResumeProject {
  title: string
  dates: string
  tech: string[]
  description: string
}

export interface ResumeSkillGroup {
  label: string
  items: string[]
}

export const resume = {
  name: 'Pradeep Reddy Palavalli',
  title: 'Software Engineer',
  email: 'pradeeppalavalli1999@gmail.com',
  github: 'https://github.com/pradeepreddy999',
  linkedin: 'https://www.linkedin.com/in/pradeep-reddy-palavalli-70159818b/',
  summary:
    'Software Engineer with 5+ years of experience building scalable, data-driven retail and supply chain solutions using .NET Core, React, and SQL Server. Adept at full-stack development, system design, and performance optimization, with a strong focus on clean architecture, maintainability, and business impact.',
  skills: [
    {
      label: 'Languages & Frameworks',
      items: [
        'C#',
        '.NET Core Web API',
        'React.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Redux Toolkit',
        'jQuery',
      ],
    },
    {
      label: 'Data & Infrastructure',
      items: ['SQL Server', 'Azure Artifacts'],
    },
    {
      label: 'UI Libraries',
      items: ['Bootstrap', 'MUI5', 'Kendo React'],
    },
    {
      label: 'Tools & Practices',
      items: [
        'Storybook',
        'Git',
        'CI/CD',
        'Clean Architecture',
        'Performance Optimization',
      ],
    },
  ] satisfies ResumeSkillGroup[],
  experience: [
    {
      title: 'Software Engineer',
      company: 'Inventiz',
      dates: 'September 2021 – Present',
      bullets: [
        "Spearheaded the company's first reusable React + TypeScript component library, published via Azure Artifacts and documented with Storybook.",
        "Built and maintained full-stack applications using .NET Core Web API, React, and SQL Server for Walmart's supply chain and vendor deductions systems.",
        'Delivered retail analytics dashboards for Mars Grocery United, Mars Big Box, and Mars RGB, serving retailers including Kroger, HEB, Albertsons, and Publix.',
        'Ensured clean architecture, maintainability, and performance tuning for enterprise-grade software solutions.',
      ],
    },
    {
      title: 'Software Intern',
      company: 'Inventiz',
      dates: 'January 2021 – August 2021',
      bullets: [
        'Participated in code reviews and testing activities to learn software development best practices.',
        'Supported integration of retailer-specific business rules into analytics solutions and assisted in QA testing and post-production support.',
      ],
    },
  ] satisfies ResumeExperience[],
  projects: [
    {
      title: 'One Retail – React Components Library',
      dates: 'Jul 2025 – Present',
      tech: ['React', 'TypeScript', 'Storybook', 'Azure Artifacts'],
      description:
        "Spearheaded the company's first reusable component library, published via Azure Artifacts and documented with Storybook to improve UI consistency company-wide.",
    },
    {
      title: 'Supply Chain Store Specific Orders (Walmart)',
      dates: 'Sep 2024 – Present',
      tech: ['.NET Core 8', 'Web API', 'SQL Server'],
      description:
        'Backend order-flow platform using real-time sales and inventory data to generate intelligent order suggestions across the supply chain.',
    },
    {
      title: 'Deductions – Finance Tool (Walmart)',
      dates: 'Sep 2023 – Aug 2024',
      tech: ['React.js', 'Redux Toolkit', '.NET Core 7'],
      description:
        'Vendor deduction management system with React dashboards giving vendors visibility into deduction activity.',
    },
    {
      title: 'Retail Analytics Dashboard (Mars Grocery United)',
      dates: 'Mar 2022 – Aug 2023',
      tech: ['.NET Web API', 'React.js', 'Kendo React', 'SQL Server'],
      description:
        'One-stop retail analytics portal for retailers including Kroger, HEB, Albertsons, and Publix.',
    },
    {
      title: 'Retail Analytics Dashboard (Mars Big Box, Mars RGB)',
      dates: 'Aug 2021 – Aug 2023',
      tech: ['.NET Framework', 'jQuery', 'HTML', 'CSS'],
      description:
        'Ongoing support, feature development, and performance improvements for retail analytics portals.',
    },
  ] satisfies ResumeProject[],
}
