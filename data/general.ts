// types/general.ts
export interface GeneralData {
  avatar: string;
  name: string;
  jobTitle: string;
  website?: string;
  statusEmoji?: string; // New optional field
}

export const generalData = {
  name: "Shaikh Rumman Fardeen",
  avatar: "/images/srummanf.jpg",
  jobTitle: "Software Developer",
  website: "https://srummanf.vercel.app",
  statusEmoji: "🌖",
  about:
    "Hi, I'm Rumman, a Software Developer with a passion for building impactful web applications. I specialize in full-stack development, particularly with the MERN stack, and have a keen interest in AI and data analysis.",
  contacts: [
    {
      label: "Email",
      value: "rummanfardeen4567@gmail.com",
      href: "mailto:rummanfardeen4567@gmail.com",
    },
    {
      label: "Twitter",
      value: "srummanf",
      href: "https://twitter.com/srummanf",
    },
    {
      label: "Github",
      value: "srummanf",
      href: "https://github.com/srummanf",
    },
    {
      label: "Instagram",
      value: "ig.srummanf",
      href: "https://www.instagram.com/ig.srummanf",
    },
  ],
};

/**
 * Status - Use Circular Emoji for Better Visibility - 🟢, 🔴, 🟡, 🔵, 🟣, ⚫, ⚪, 🟠, 🟤, 🟩, 🟦, 🟥, 🟪, 🟫, 🌑, 🌕, 🌖, 🌗, 🌘, 🌒
 */
