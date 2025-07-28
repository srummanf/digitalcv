import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import { projectData } from "@/data/contentWithLinks";
import ContentWithNoLinks from "@/components/ContentWithNoLinks";
import ContentWithLinks from "@/components/ContentWithLinks";
import { plusJakartaSans } from "./fonts";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
      {/* Avatar & Name */}
      <section className="flex items-center">
        <Image
          alt="Author"
          src={generalData.avatar}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="ml-4">
          <h1
            className={`${plusJakartaSans.className} mb-0.5 text-xl text-slate-900 dark:text-slate-100`}
          >
            {generalData.name}
          </h1>
          <p
            className={`${plusJakartaSans.className} text-slate-600 dark:text-slate-300 text-sm`}
          >
            {generalData.jobTitle}
          </p>
          {generalData.website && (
            <span className="text-sm text-slate-400 dark:text-slate-400">
              <a
                href={generalData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {generalData.website.replace(/(^\w+:|^)\/\//, "").replace("www.", "")}
              </a>
            </span>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="my-9 text-sm">
        <h3
          className={`${plusJakartaSans.className} mb-1 text-slate-900 dark:text-slate-100`}
        >
          About
        </h3>
        <div className="text-slate-600 dark:text-slate-300">
          {generalData.about.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </div>
      </section>

      {/* Work Experience & Education */}
      {contentData.map((content, index) => (
        <ContentWithNoLinks {...content} key={index} />
      ))}

      {/* Projects, Side Projects, Awards, etc. */}
      {projectData.map((section, index) => (
        <ContentWithLinks {...section} key={index} />
      ))}

      {/* Contact */}
      <section className="my-14 text-sm">
        <h3 className="mb-6 text-slate-900 dark:text-slate-100">Contact</h3>
        <div className="flex flex-col gap-6">
          {generalData.contacts.map((contact, index) => (
            <div className="flex" key={index}>
              <div
                className={`${plusJakartaSans.className} mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400`}
              >
                {contact.label}
              </div>
              <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex"
                >
                  {contact.value}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                      className="fill-current text-slate-900 dark:text-slate-100"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uncomment for theme toggle */}
      {/* <div className="px-6 absolute left-0 bottom-6">
        <ThemeSwitch />
      </div> */}
    </main>
  );
}
