/**
 * @file contentWithLinks.ts
 * @description
 * This module defines types and categorized data for sections containing external links.
 * These are usually associated with websites, portfolios, talks, exhibitions, or publications.
 *
 * Types:
 * - LinkItem: Represents a single linked content entry with metadata such as date, title, URL, subtitle, and optional description.
 * - ContentWithLinks: Represents a group of `LinkItem`s under a common section title.
 *
 * Data:
 * - projectData: An array of sections, each conforming to `ContentWithLinks`.
 *   Useful for rendering resume-like sections or portfolios with external references.
 *
 * Common Categories in ContentWithLinks:
 * - Projects
 * - Side Projects
 * - Exhibitions
 * - Speaking
 * - Writing
 * - Awards
 * - Features
 * - Certifications
 */

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
      {
        date: "2023",
        title: "Paytm UPI Statement Analyzer",
        url: "https://github.com/rumma/paytm-analyzer",
        subTitle: "React · JavaScript",
        description:
          "Helps users categorize and understand their UPI spending patterns visually.",
      },
    ],
  },
  {
    title: "Side Projects",
    items: [
      {
        date: "2024",
        title: "Chatfolio AI",
        url: "https://github.com/rumma/chatfolio",
        subTitle: "Next.js · LangChain · Vercel",
        description:
          "An interactive AI-powered portfolio where users can chat to discover your skills and experience.",
      },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        date: "2023",
        title: "Smart India Hackathon Finalist",
        url: "https://sih.gov.in",
        subTitle: "National Level",
        description:
          "Selected among top national teams for building AI-backed citizen grievance redressal system.",
      },
    ],
  },

  // @NOTE: You can add more sections here
  // {
  //   title: "Awards",
  //   items: [
  //     {
  //       date: "2023",
  //       title: "Smart India Hackathon Finalist",
  //       url: "https://sih.gov.in",
  //       subTitle: "National Level",
  //       description:
  //         "Selected among top national teams for building AI-backed citizen grievance redressal system.",
  //     },
  //   ],
  // },
];
