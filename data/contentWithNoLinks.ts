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

export const contentData = [
  
  {
    title: "Education",
    items: [
      {
        title: "Bachelor of Technology ",
        subTitle: "Vellore Institute of Technology",
        date: "2021 - 2025",
        description: "Specialized in Computer Science and Engineering.",
      },
      {
        title: "Higher Secondary Schooling",
        subTitle: "Saifee Golden Jubilee English School",
        date: "2018 - 2020",
        description: "Specialized in Physics, Chemistry, and Mathematics.",
      },
    ],
  },
  {
    title: "Work Experience",
    items: [
      {
        title: "Full Stack Developer Intern",
        subTitle: "Oxlac - Remote",
        date: "Oct 2023",
        description: "Developed and deployed full-stack web applications using the MERN stack, focusing on Next.js and Node.js. Collaborated with designers and developers to deliver client-facing features and internal tools for startups. Followed agile development practices to meet tight deadlines, enhancing project efficiency.",
      },
      {
        title: "WebFlow Developer",
        subTitle: "Capx - Freelance",
        date: "Oct 2023 - Oct 2023",
        description: "Led the design and development of the inaugural website prototype for Capx Tokens and the Capx App using Webflow. Translated brand vision into an engaging, interactive, and scalable website experience.",
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
        description: "Contributed to the HackClub community by leading technical initiatives, mentoring new members, and advising on project development. Focused on enhancing the technical skills of club members through workshops and collaborative projects.",
      },
      {
        title: "Member ~ Programming Lead ~ Advisory",
        subTitle: "SEDS VITC",
        date: "Mar 2022 - Apr 2025",
        description: "Engaged in the Space Exploration and Development Society (SEDS) at VITC, focusing on programming and technical leadership. Provided guidance on software development projects, fostering a collaborative environment for innovation in space-related technologies.",
      },
      {
        title: "Member",
        subTitle: "DAO VITC",
        date: "Mar 2023 - Mar 2024",
        description: "Planned and executed multiple technical and non-technical events, ensuring smooth coordination and high participant engagement. Organized inter-college hackathons, managing registrations, logistics, and judging workflows to deliver impactful experiences.Handled end-to-end logistics for events, including scheduling, venue coordination, and resource planning.",
      },
      {
        title: "Member ~ Technical lead",
        subTitle: "BiosphereClub VITC",
        date: "Feb 2022 - May 2023",
        description: "Oversaw all technical initiatives for The Biosphere Club, enhancing website functionality and event platform readiness. Supported the Senior Lead in managing GitHub repositories, enhancing collaboration and code quality. Contributed to the frontend development of club projects, enhancing user engagement.",
      },
      {
        title: "Microsoft Learn Student Ambassador",
        subTitle: "Microsoft",
        date: "Jul 2023 - Jun 2024",
        description: "Engaged in community outreach and technical workshops, promoting Microsoft technologies and tools. Facilitated learning sessions on cloud computing, AI, and software development best practices.",
      },
      {
        title: "Designer for Outreach Department",
        subTitle: "VITC",
        date: "Nov 2022 - Apr 2023",
        description: "Designed engaging story layouts and post templates for VIT's official Instagram and Facebook platforms.Ensured a cohesive visual identity across various campaigns, club announcements, and event promotions.",
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
