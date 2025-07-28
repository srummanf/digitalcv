/**
 * @file contentWithNoLinks.ts
 * @description
 * This module defines structured sections of content without external links, commonly used for timelines or resume data.
 *
 * Types:
 * - ContentWithNoLinks: Represents a section of items (like Work Experience, Education) that don't contain external URLs.
 * - ContentData: An array of `ContentWithNoLinks` sections.
 *
 * Structure:
 * Each item in a section includes:
 * -title: The main title (e.g., job title or degree).
 * -subTitle: Additional context like company, location, or university.
 * -data: The time range of the activity.
 * -description: A brief summary of responsibilities or achievements.
 *
 * Data:
 * - `contentData`: The main exported dataset used to render timeline-like views such as:
 *   - Work Experience
 *   - Volunteering
 *   - Education
 *
 * Notes:
 * - This file excludes links. If a section requires external references, consider using `contentWithLinks.ts` instead.
 */

export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Senior Front-End Developer at Apple",
        subTitle: "Remote",
        date: "2020 - Present",
        description: "Design system, UI dev and web animations.",
      },
      {
        title: "Front-End Developer at Freelance",
        subTitle: "Remote",
        date: "2016 - 2020",
        description: "Working for clients around the world.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Master's Degree in Computer Science",
        subTitle: "University of Paris",
        date: "2015 - 2016",
        description: "Specialized in web development.",
      },
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: "University of Paris",
        date: "2012 - 2015",
        description: "Specialized in web development.",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //  {
  //     title: "Education",
  //     items: [
  //       {
  //         title: "Master's Degree in Computer Science",
  //         subTitle: "University of Paris",
  //         date: "2015 - 2016",
  //         description: "Specialized in web development.",
  //       },
  //       {
  //         title: "Bachelor's Degree in Computer Science",
  //         subTitle: "University of Paris",
  //         date: "2012 - 2015",
  //         description: "Specialized in web development.",
  //       },
  //     ],
  //   },
];

export type ContentWithNoLinks = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = ContentWithNoLinks[];
