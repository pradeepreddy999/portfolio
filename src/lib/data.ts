export interface Project {
  slug: string
  title: string
  description: string
  date: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  content: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'one-retail-component-library',
    title: 'One Retail - React Components Library',
    description:
      "Spearheaded the company's first reusable React + TypeScript component library, published via Azure Artifacts and documented with Storybook to improve UI consistency company-wide.",
    date: 'Jul 2025 - Present',
    tech: ['React', 'TypeScript', 'Storybook', 'Azure Artifacts'],
    image: '/projects/one-retail.jpg',
    content: `
      ## The Challenge
      Multiple teams building the flagship One Retail platform were duplicating UI components with inconsistent styling and behavior, slowing down feature delivery and hurting UI consistency across the product.

      ## The Solution
      Spearheaded the company's first reusable React + TypeScript component library, published as a versioned package via an Azure Artifacts feed. Integrated Storybook for interactive documentation and testing, centralizing common UI components and streamlining onboarding for new developers.

      ## The Impact
      Reduced component duplication and accelerated feature delivery across multiple teams. The library was adopted company-wide, setting a foundation for scalable, maintainable, and themeable UI development.
    `,
  },
  {
    slug: 'walmart-supply-chain-store-orders',
    title: 'Supply Chain Store Specific Orders (Walmart)',
    description:
      'Backend order-flow platform for Walmart store orders, using real-time sales and inventory data to generate intelligent order suggestions across the supply chain.',
    date: 'Sep 2024 - Present',
    tech: ['.NET Core 8', 'Web API', 'SQL Server'],
    image: '/projects/walmart-supply-chain.jpg',
    content: `
      ## The Challenge
      Walmart stores needed a smarter way to order from vendors and distribution centers — one that reduced stockouts and excess inventory across Vendor to Store, Vendor to DC, and DC to Store flows.

      ## The Solution
      Contributed to the design and development of applications that optimize Walmart store orders, implementing core backend logic in .NET Core 8 Web API and SQL Server to streamline order flows. Enhanced the ordering process by integrating real-time sales and inventory data to generate intelligent order suggestions.

      ## The Impact
      Helped reduce stockouts and optimize inventory costs by improving order planning and execution, while collaborating with the team through the full software development lifecycle from design to deployment.
    `,
  },
  {
    slug: 'walmart-deductions-finance-tool',
    title: 'Deductions – Finance Tool (Walmart)',
    description:
      'Vendor deduction management system for Walmart, with React dashboards giving vendors visibility into deduction activity and reducing manual reconciliation effort.',
    date: 'Sep 2023 - Aug 2024',
    tech: ['React.js', 'Redux Toolkit', '.NET Core 7', 'Web API'],
    image: '/projects/walmart-deductions.jpg',
    content: `
      ## The Challenge
      Vendors needed a clear, self-service way to understand Walmart deduction activity, which was previously a manual and opaque reconciliation process.

      ## The Solution
      Developed front-end interfaces in React.js using Redux Toolkit for Walmart's vendor deduction management system, building user-friendly dashboards that surface deduction insights. Integrated the front-end modules with a .NET Core 7 Web API backend to ensure smooth data exchange, including user-customizable theming for improved usability.

      ## The Impact
      Improved accuracy and reduced manual reconciliation effort, contributing to increased vendor adoption of the tool.
    `,
  },
  {
    slug: 'mars-grocery-united-dashboard',
    title: 'Retail Analytics Dashboard (Mars Grocery United)',
    description:
      'One-stop retail analytics portal for retailers including Kroger, HEB, Albertsons, and Publix, with customizable dashboards and real-time analytics.',
    date: 'Mar 2022 - Aug 2023',
    tech: ['.NET Web API', 'React.js', 'Kendo React', 'SQL Server'],
    image: '/projects/mars-grocery-united.jpg',
    content: `
      ## The Challenge
      Retail partners needed a single, high-performance portal to visualize sales and inventory data across multiple large retailers, each with their own requirements.

      ## The Solution
      Designed and developed a comprehensive retail analytics dashboard as a one-stop portal for retailers including Kroger, HEB, Albertsons, and Publix. Built the backend with .NET Web API and the frontend with React.js, delivering customizable dashboards, filtering, sorting, and real-time analytics using the Kendo React library. Optimized database queries and API endpoints to handle large-scale retail datasets efficiently.

      ## The Impact
      Enabled stakeholders to make data-driven decisions and adapted the platform across multiple retail partners, with production readiness ensured through end-to-end testing, performance tuning, and post-deployment support.
    `,
  },
  {
    slug: 'mars-big-box-rgb-dashboard',
    title: 'Retail Analytics Dashboard (Mars Big Box, Mars RGB)',
    description:
      'Ongoing support, feature development, and performance improvements for the Mars Big Box and RGB retail analytics portals.',
    date: 'Aug 2021 - Aug 2023',
    tech: ['.NET Framework', 'jQuery', 'HTML', 'CSS'],
    image: '/projects/mars-big-box.jpg',
    content: `
      ## The Challenge
      The Mars Big Box and RGB retail analytics portals needed ongoing feature development and performance improvements to keep pace with evolving retailer requirements.

      ## The Solution
      Provided ongoing support and maintenance for both portals, handling new feature requests, bug fixes, and performance improvements. Enhanced modules using .NET Framework, jQuery, HTML, and CSS, and assisted in integrating retailer-specific changes across multiple partners.

      ## The Impact
      Ensured portal reliability and a smooth user experience through continuous, incremental enhancements and long-term usability improvements.
    `,
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
