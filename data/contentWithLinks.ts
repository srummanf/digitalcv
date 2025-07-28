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
        date: "Dec 2024 - Apr 2025",
        title: "Study on El Niño’s Impact on Chennai Groundwater Sustainability",
        url: "https://github.com/srummanf/ElNino-Anomaly-Study",
        subTitle: "Data Analysis · Python",
        description:
          "Analyzes El Niño’s effect on Chennai groundwater. Identifies vulnerable zones and proposes sustainable solutions using predictive modeling.",
      },
      {
        date: "Jan 2025 - Mar 2025",
        title: "DevHub",
        url: "https://github.com/srummanf/Devhub",
        subTitle: "Full-Stack Development",
        description:
          "Centralized platform for developer tools and UI kits to streamline the Hacknight'25 experience with a curated, high-productivity ecosystem.",
      },
      {
        date: "Aug 2024 - Nov 2024",
        title: "Pre-Confirmation Fraud Detection in Blockchain Mempool",
        url: "https://github.com/srummanf/Fraud-Blockchain-Transaction-Detection",
        subTitle: "Machine Learning · Blockchain",
        description:
          "Detects Ethereum fraud pre-confirmation using ML in mempool, preventing resource misuse and increasing blockchain security.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Data Encryption in Image using Chaos Map",
        url: "https://github.com/srummanf/Chaos-Map-Data-Encryption",
        subTitle: "Python · Cryptography",
        description:
          "Implements Arnold and Henon chaos maps for secure image-based data encryption, enhancing digital communication confidentiality.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Dyslexia Prediction App",
        url: "https://github.com/srummanf/Dyslexia-Detection-from-Handwriting",
        subTitle: "Machine Learning · Python · AI",
        description:
          "Predicts dyslexia from handwriting using YOLOv8 and Streamlit, enabling early diagnosis through visual and auditory tests.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        title: "Early Detection of Retinopathy of Prematurity",
        url: "https://github.com/srummanf/Retinopathy-Detection",
        subTitle: "Machine Learning · Python",
        description:
          "Compares multiple CNN architectures for detecting ROP early in infants using medical image data.",
      },
      {
        date: "Dec 2023",
        title: "DeCoHere | EthIndia",
        url: "https://ethglobal.com/showcase/decohere-ethindia2023",
        subTitle: "Full-Stack · Solidity · Web3",
        description:
          "Web3 event booking platform with smart contracts, Push Protocol notifications, and Next.js UI; won EthIndia Scroll prize.",
      },
      {
        date: "Feb 2023 - Mar 2023",
        title: "AI-Based ANPR System with FRS",
        url: "https://github.com/srummanf/ANPR-FRS-System",
        subTitle: "Figma · UI/UX Design",
        description:
          "ANPR + FRS system detecting traffic violations in poor visibility with image stitching, facial recognition, and ANPR recovery.",
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
        description:
          "𓂃 srummanf's vetrina 𓂃",
      },
      {
        date: "2025",
        title: "poietes",
        url: "https://github.com/srummanf/poietes",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
          "Jotting down thoughts, drafting ideas, or creating polished notes",
      },
      {
        date: "2025",
        title: "Pretty Browser View",
        url: "https://github.com/srummanf/pretty-browser-view",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
        "A Draggable, Resizable Web Preview Interface",
      },
      {
        date: "2025",
        title: "Ramadan Elegance",
        url: "https://github.com/srummanf/Ramadan",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
        "A modern, responsive React application showcasing the virtues and blessings of Ramadan. Built with React, TypeScript, and Tailwind CSS.",
      },
      {
        date: "2025",
        title: "Poetic Whispers",
        url: "https://github.com/srummanf/Poetic-Whispers",
        subTitle: "Next.js · TailwindCSS · Vercel",
        description:
        "Poetic Whispers is where classics come to life. This application celebrates the enduring magic of the greatest poets in history.",
      },
      {
        date: "2025",
        title: "Interactive Candle Blow Birthday Cake",
        url: "https://github.com/srummanf/Interactive-Candle-Blow-Birthday-Cake",
        subTitle: "HTML · CSS · JS",
        description:
          "An interactive HTML, CSS, and JavaScript project that simulates a birthday cake where users can add candles and blow them out using mouse gestures.",
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
          "Awarded for DeCoHere, a Web3 event booking platform, at ETHIndia 2023.",
      },
      {
        date: "Mar 2023",
        title: "Top 10 - KAVACH Hackathon",
        url: "https://github.com/mohammadshaad/codephilics-vitish",
        subTitle: "AI-Based ANPR System with FRS",
        description:
          "Ranked among the top 10 teams for developing an AI-based ANPR system with facial recognition at KAVACH Hackathon.",
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
