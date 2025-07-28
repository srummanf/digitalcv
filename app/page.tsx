import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/contentWithNoLinks";
import { projectData } from "@/data/contentWithLinks";
import ContentWithNoLinks from "@/components/ContentWithNoLinks";
import ContentWithLinks from "@/components/ContentWithLinks";
import { plusJakartaSans } from "./fonts";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AvatarAndName from "@/components/AvatarAndName";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
      {/* Avatar & Name */}
      <AvatarAndName />

      {/* About Section */}
      <About />

      {/* Content With No Links Section */}
      {contentData.map((content, index) => (
        <ContentWithNoLinks {...content} key={index} />
      ))}

      {/* Content With Links Section */}
      {projectData.map((section, index) => (
        <ContentWithLinks {...section} key={index} />
      ))}

      {/* Contact Section */}
      <Contact />

      {/* Theme Switch Button Section */}
      {/* <div className="px-6 absolute left-0 bottom-6">
        <ThemeSwitch />
      </div> */}
    </main>
  );
}
