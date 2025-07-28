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
    "Hey there! I'm John, a senior front-end developer with 10 years of experience in web development. \n loper with 10 years of experience in web development. \n\n loper with 10 years of experience in web development.",
  contacts: [
    {
      label: "Email",
      value: "john.doe@gmail.com",
      href: "mailto:john.doe@gmail.com",
    },
    {
      label: "Twitter",
      value: "ibelick",
      href: "https://twitter.com/ibelick",
    },
    {
      label: "Github",
      value: "ibelick",
      href: "https://github.com/ibelick",
    },
    {
      label: "Read.CV",
      value: "ibelick",
      href: "https://read.cv/ibelick",
    },
  ],
};

/**
 * Status - Use Circular Emoji for Better Visibility - 🟢, 🔴, 🟡, 🔵, 🟣, ⚫, ⚪, 🟠, 🟤, 🟩, 🟦, 🟥, 🟪, 🟫, 🌑, 🌕, 🌖, 🌗, 🌘, 🌒

 */