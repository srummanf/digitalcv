import React from "react";
import { plusJakartaSans } from "@/app/fonts";
import { type ContentWithLinks } from "@/data/contentWithLinks";

type ContentProps = ContentWithLinks;

const ContentWithLinks: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm font-normal">
      <h3
        className={`${plusJakartaSans.className} mb-6 text-slate-900 dark:text-[#eeeeee]`}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div className="flex" key={index}>
            <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-[#888888]">
              {item.date}
            </div>
            <div className="flex flex-col flex-1">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${plusJakartaSans.className} group text-slate-900 dark:text-[#eeeeee] hover:underline underline-offset-3 inline-flex items-center gap-1`}
              >
                {item.title}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                    className="fill-current text-slate-900 dark:text-slate-100"
                  />
                </svg>
              </a>

              <p className="text-slate-600 dark:text-[#b0b0b0]">
                {item.subTitle}
              </p>

              {item.description && (
                <div className="text-slate-600 dark:text-[#bbbbbb] mt-2">
                  {item.description.includes("/li") ? (
                    <ul className="list-disc ml-5 space-y-1">
                      {item.description
                        .split("/li")
                        .map((line) => line.trim())
                        .filter(Boolean)
                        .map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWithLinks;
