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
 * - title: The main title (e.g., job title or degree).
 * - subTitle: Additional context like company, location, or university.
 * - date: The time range of the activity.
 * - description: A brief summary of responsibilities or achievements.
 *   - Supports inline bullet points using `/li` as a custom marker.
 *     Example: "/li Bullet 1 /li Bullet 2"
 *     These will render as an unordered list in the UI.
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

export const contentData: ContentData = [
  {
    title: "Education",
    items: [
      {
        title: "Bachelor of Technology",
        subTitle: "Vellore Institute of Technology",
        date: "2021 - 2025",
        description: "/li Specialized in Computer Science and Engineering.",
      },
      {
        title: "Higher Secondary Schooling",
        subTitle: "Saifee Golden Jubilee English School",
        date: "2018 - 2020",
        description: "/li Specialized in Physics, Chemistry, and Mathematics.",
      },
    ],
  },
  {
    title: "Work Experience",
    items: [
      {
        title: "Full Stack Developer Intern",
        subTitle: "Oxlac - Remote",
        date: "Sept 2023 - Oct 2023",
        description:
          "/li Developed and deployed full-stack web applications using the MERN stack, focusing on Next.js and Node.js." +
          "/li Collaborated with designers and developers to deliver client-facing features and internal tools." +
          " /li Followed agile practices to enhance project efficiency and meet deadlines.",
      },
      {
        title: "WebFlow Developer",
        subTitle: "Capx - Freelance",
        date: "Oct 2023 - Oct 2023",
        description:
          "/li Led design and development of the Capx Tokens website using Webflow." +
          " /li Translated brand vision into a scalable and engaging digital presence.",
      },
    ],
  },
  {
    title: "Volunteering",
    items: [
      {
        title: "Member ~ Technical Lead ~ Advisory",
        subTitle: "HackClub VITC",
        date: "Nov 2022 - Apr 2025",
        description:
          "/li Led technical initiatives within the club." +
          " /li Mentored new members and advised on projects." +
          " /li Conducted workshops to enhance tech skills.",
      },
      {
        title: "Member ~ Programming Lead ~ Advisory",
        subTitle: "SEDS VITC",
        date: "Mar 2022 - Apr 2025",
        description:
          "/li Focused on programming and technical leadership." +
          " /li Guided software development projects in the space domain." +
          " /li Encouraged innovation through collaboration.",
      },
      {
        title: "Member",
        subTitle: "DAO VITC",
        date: "Mar 2023 - Mar 2024",
        description:
          "/li Planned and executed technical and non-technical events." +
          " /li Organized inter-college hackathons with full logistics." +
          " /li Managed scheduling, venue coordination, and resources.",
      },
      {
        title: "Member ~ Technical lead",
        subTitle: "BiosphereClub VITC",
        date: "Feb 2022 - May 2023",
        description:
          "/li Oversaw technical initiatives and improved website functionality." +
          " /li Managed GitHub repositories and enhanced collaboration." +
          " /li Contributed to frontend projects for better engagement.",
      },
      {
        title: "Microsoft Learn Student Ambassador",
        subTitle: "Microsoft",
        date: "Jul 2023 - Jun 2024",
        description:
          "/li Promoted Microsoft technologies through workshops." +
          " /li Led sessions on Azure, AI, and dev tools.",
      },
      {
        title: "Designer for Outreach Department",
        subTitle: "VITC",
        date: "Nov 2022 - Apr 2023",
        description:
          "/li Designed story layouts and post templates for Instagram & Facebook." +
          " /li Ensured cohesive visual identity for campaigns and events.",
      },
    ],
  },
];
