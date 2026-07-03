export interface ProjectImage {
  src: string;
  aspect: number; // width / height, used so each screenshot renders at its true proportions
}

export interface Project {
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  liveLabel: string;
  heroImage: ProjectImage;
  secondaryImages: [ProjectImage, ProjectImage];
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Retrieval-Augmented Generation',
    name: 'Marginalia',
    liveUrl: 'https://research-paper-rag-chatbot.vercel.app',
    liveLabel: 'Live Demo',
    heroImage: { src: '/projects/marginalia-landing.png', aspect: 1317 / 597 },
    secondaryImages: [
      { src: '/projects/marginalia-chat.png', aspect: 1322 / 766 },
      { src: '/projects/marginalia-howitworks.png', aspect: 1428 / 702 },
    ],
  },
  {
    number: '02',
    category: 'Deep Learning / NLP Research',
    name: 'VERITAS',
    liveUrl: 'https://veritas-full-stack.vercel.app/',
    liveLabel: 'Live Demo',
    heroImage: { src: '/projects/veritas-login.png', aspect: 1252 / 892 },
    secondaryImages: [
      { src: '/projects/veritas-terminal.png', aspect: 921 / 731 },
      { src: '/projects/veritas-output.png', aspect: 927 / 727 },
    ],
  },
];
