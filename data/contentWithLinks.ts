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
 *
 * Notes:
 * - You can use `/li` within the `description` to render bullet points in the UI.
 *   Example: "/li Bullet point one /li Bullet point two"
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
        date: "Dec 2024 - Apr 2025",
        title: "Study on El Niño’s Impact on Chennai Groundwater Sustainability",
        url: "https://github.com/srummanf/ElNino-Anomaly-Study",
        subTitle: "Data Analysis · Python",
        description:
          "/li Analyzes El Niño’s effect on Chennai groundwater. /li Identifies vulnerable zones using predictive modeling. /li Proposes sustainable water usage policies.",
      },
      {
        date: "Jan 2025 - Mar 2025",
        title: "DevHub",
        url: "https://github.com/srummanf/Devhub",
        subTitle: "Full-Stack Development",
        description:
          "/li Developer tool aggregation platform. /li Streamlines Hacknight'25 experience. /li Curated ecosystem for productivity.",
      },
      {
        date: "Aug 2024 - Nov 2024",
        title: "Pre-Confirmation Fraud Detection in Blockchain Mempool",
        url: "https://github.com/srummanf/Fraud-Blockchain-Transaction-Detection",
        subTitle: "Machine Learning · Blockchain",
        description:
          "/li Detects Ethereum fraud before confirmation. /li Uses mempool behavior and ML classification. /li Improves blockchain security.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Data Encryption in Image using Chaos Map",
        url: "https://github.com/srummanf/Chaos-Map-Data-Encryption",
        subTitle: "Python · Cryptography",
        description:
          "/li Implements Arnold and Henon chaos maps. /li Encrypts data visually in images. /li Enhances digital confidentiality.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Dyslexia Prediction App",
        url: "https://github.com/srummanf/Dyslexia-Detection-from-Handwriting",
        subTitle: "Machine Learning · Python · AI",
        description:
          "/li Predicts dyslexia from handwriting patterns. /li Uses YOLOv8, CNN, and Streamlit UI. /li Enables early diagnosis through visual & auditory tests.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Early Detection of Retinopathy of Prematurity",
        url: "https://github.com/srummanf/Retinopathy-Detection",
        subTitle: "Machine Learning · Python",
        description:
          "/li Uses CNN architectures on infant retina data. /li Enables early-stage detection. /li Improves infant medical care outcomes.",
      },
      {
        date: "Dec 2023",
        title: "DeCoHere | EthIndia",
        url: "https://ethglobal.com/showcase/decohere-ethindia2023",
        subTitle: "Full-Stack · Solidity · Web3",
        description:
          "/li Web3 event booking platform. /li Push Protocol + Smart Contracts. /li Won Scroll Prize at EthIndia.",
      },
      {
        date: "Feb 2023 - Mar 2023",
        title: "AI-Based ANPR System with FRS",
        url: "https://github.com/srummanf/ANPR-FRS-System",
        subTitle: "Figma · UI/UX Design",
        description:
          "/li Detects traffic violations in low visibility. /li Combines ANPR, image stitching, and facial recognition.",
      },
    ],
  },
  {
    title: "Side Projects",
    items: [
      {
        date: "2025",
        title: "srummanf's vetrina",
        url: "https://github.com/srummanf/vetrina",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description: "/li Minimal portfolio showcase. /li Fast, responsive layout.",
      },
      {
        date: "2025",
        title: "poietes",
        url: "https://github.com/srummanf/poietes",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
          "/li Thought journal and idea draft space. /li Clean design and flexible content structure.",
      },
      {
        date: "2025",
        title: "Pretty Browser View",
        url: "https://github.com/srummanf/pretty-browser-view",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description: "/li Resizable browser preview window. /li Draggable tab-like layout.",
      },
      {
        date: "2025",
        title: "Image Palette",
        url: "https://github.com/srummanf/image-palette",
        subTitle: "Next.js · TailwindCSS · Netlify",
        description:
          "/li Extract dominant colors from any image.",
      },
      {
        date: "2025",
        title: "Ramadan Elegance",
        url: "https://github.com/srummanf/Ramadan",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
          "/li Celebrates virtues and blessings of Ramadan. /li Built with React, TypeScript, and Tailwind.",
      },
      {
        date: "2025",
        title: "Poetic Whispers",
        url: "https://github.com/srummanf/Poetic-Whispers",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
          "/li Revives classic poetry through interactive layouts. /li Features greatest poets in history.",
      },
      {
        date: "2025",
        title: "Interactive Candle Blow Birthday Cake",
        url: "https://github.com/srummanf/Interactive-Candle-Blow-Birthday-Cake",
        subTitle: "HTML · CSS · JS",
        description:
          "/li Users can add and blow candles interactively. /li Built using basic JS gesture tracking.",
      },
    ],
  },
  {
    title: "Awards and Recognition",
    items: [
      {
        date: "Dec 2023",
        title: "Track Winner - ETHIndia 2023",
        url: "https://ethglobal.com/showcase/decohere-1qov4",
        subTitle: "Scroll Track Winner",
        description:
          "/li Won Scroll Prize for DeCoHere. /li Built a smart-contract-based event app.",
      },
      {
        date: "Mar 2023",
        title: "Top 10 - KAVACH Hackathon",
        url: "https://github.com/mohammadshaad/codephilics-vitish",
        subTitle: "AI-Based ANPR System with FRS",
        description:
          "/li Among top 10 national finalists. /li Built a real-time AI violation detector.",
      },
    ],
  },
];
