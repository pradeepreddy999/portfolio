export interface Certification {
  title: string
  issuer: string
  issued: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
  /** Certificate PDF or image, relative to `public/` (e.g. 'certificates/aws.pdf'). */
  file?: string
  /** Card preview image, relative to `public/`. Optional for image files, recommended for PDFs. */
  thumbnail?: string
}

export function getCertificateFileType(file: string): 'pdf' | 'image' {
  return file.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image'
}

// Newest first.
// To add one: drop the PDF/PNG/JPG into public/certificates/ and point `file` at it.
// For PDFs, also add a first-page screenshot as `thumbnail` (shown on the card).
// Coursera: use the "verify" link printed on the certificate as credentialUrl.
export const certifications: Certification[] = [
  {
    title: 'Software Design and Architecture',
    issuer: 'Coursera · University of Alberta',
    issued: 'Apr 2026',
    credentialId: 'IU61HJAJO1TD',
    credentialUrl: 'https://coursera.org/verify/specialization/IU61HJAJO1TD',
    skills: [
      'Object-Oriented Design',
      'Design Patterns',
      'Software Architecture',
      'Service-Oriented Architecture',
    ],
    file: 'certificates/software-design-and-architecture.pdf',
    thumbnail: 'certificates/software-design-and-architecture.jpg',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'Coursera · DeepLearning.AI',
    issued: 'Apr 2026',
    credentialId: '7DVL5BWIUVB1',
    credentialUrl: 'https://coursera.org/verify/7DVL5BWIUVB1',
    skills: ['Generative AI', 'Prompt Engineering'],
    file: 'certificates/generative-ai-for-everyone.pdf',
    thumbnail: 'certificates/generative-ai-for-everyone.jpg',
  },
  {
    title: 'Azure DevOps and Continuous Delivery with Git',
    issuer: 'Coursera · Packt',
    issued: 'Mar 2026',
    credentialId: 'EEBC1IJFT7O6',
    credentialUrl: 'https://coursera.org/verify/EEBC1IJFT7O6',
    skills: ['Azure DevOps', 'CI/CD', 'Git'],
    file: 'certificates/azure-devops-continuous-delivery-git.pdf',
    thumbnail: 'certificates/azure-devops-continuous-delivery-git.jpg',
  },
  {
    title: 'Full Stack Web Development with Angular',
    issuer: 'Coursera · HKUST',
    issued: 'Jan 2022',
    credentialId: 'JRXAJV3GHD2P',
    credentialUrl: 'https://coursera.org/verify/specialization/JRXAJV3GHD2P',
    skills: ['Angular', 'Bootstrap 4', 'Node.js', 'Express', 'MongoDB'],
    file: 'certificates/full-stack-web-development-angular.pdf',
    thumbnail: 'certificates/full-stack-web-development-angular.jpg',
  },
  {
    title: 'Full-Stack Web Development with React',
    issuer: 'Coursera · HKUST',
    issued: 'Nov 2021',
    credentialId: 'TFTRYZBX7VSS',
    credentialUrl: 'https://coursera.org/verify/specialization/TFTRYZBX7VSS',
    skills: ['React', 'Bootstrap 4', 'Node.js', 'Express', 'MongoDB'],
    file: 'certificates/full-stack-web-development-react.pdf',
    thumbnail: 'certificates/full-stack-web-development-react.jpg',
  },
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Coursera · Google',
    issued: 'Nov 2021',
    credentialId: 'TQNYW65B3SJT',
    credentialUrl: 'https://coursera.org/verify/TQNYW65B3SJT',
    skills: ['Git', 'GitHub', 'Version Control'],
    file: 'certificates/intro-to-git-and-github.pdf',
    thumbnail: 'certificates/intro-to-git-and-github.jpg',
  },
  {
    title: 'Web Design for Everybody: Basics of Web Development & Coding',
    issuer: 'Coursera · University of Michigan',
    issued: 'Sep 2021',
    credentialId: 'QJKR48C4N56A',
    credentialUrl: 'https://coursera.org/verify/specialization/QJKR48C4N56A',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'Web Accessibility',
    ],
    file: 'certificates/web-design-for-everybody.pdf',
    thumbnail: 'certificates/web-design-for-everybody.jpg',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera · DeepLearning.AI',
    issued: 'Dec 2020',
    credentialId: 'HM5YWNU49XBA',
    credentialUrl: 'https://coursera.org/verify/specialization/HM5YWNU49XBA',
    skills: ['Neural Networks', 'CNNs', 'Sequence Models', 'TensorFlow'],
    file: 'certificates/deep-learning-specialization.pdf',
    thumbnail: 'certificates/deep-learning-specialization.jpg',
  },
  {
    title: 'Machine Learning',
    issuer: 'Coursera · Stanford Online',
    issued: 'Aug 2020',
    credentialId: 'K46L7WN99PMY',
    credentialUrl: 'https://coursera.org/verify/K46L7WN99PMY',
    skills: ['Machine Learning', 'Supervised Learning', 'Neural Networks'],
    file: 'certificates/machine-learning-stanford.pdf',
    thumbnail: 'certificates/machine-learning-stanford.jpg',
  },
]
