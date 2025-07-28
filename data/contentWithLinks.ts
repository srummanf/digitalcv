// @/data/contentWithLinks.ts

export type LinkItem = {
  date: string;
  title: string;
  url: string;
  subTitle: string;
  description?: string;
};

export type ContentWithLinks = {
  title: string;
  items: LinkItem[];
};

export const projectData: ContentWithLinks[] = [
  {
    title: "Projects",
    items: [
      {
        date: "2024",
        title: "AI Image Enhancer",
        url: "https://github.com/rumma/ai-image-enhancer",
        subTitle: "Python · OpenCV · GAN",
        description:
          "Improves low-res images using GAN-based model for restoration and upscaling.",
      },
    ],
  },
  {
    title: "Side Projects",
    items: [
      {
        date: "2024 - Present",
        title: "AI Chat Portfolio",
        url: "https://github.com/rumma/chatfolio",
        subTitle: "Next.js · LangChain · Vercel",
        description:
          "An AI-enhanced portfolio site that responds to queries about your resume.",
      },
    ],
  },
];
