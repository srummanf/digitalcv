import React from "react";
import { plusJakartaSans, inter } from "@/app/fonts";
import type { ContentWithNoLinks } from "@/data/contentWithNoLinks";

type ContentProps = ContentWithNoLinks;

const ContentWithNoLinks: React.FC<ContentProps> = ({ title, items }) => {
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
              <h4
                className={`${plusJakartaSans.className} text-slate-900 dark:text-[#eeeeee]`}
              >
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-[#b0b0b0]">
                {item.subTitle}
              </p>
              {item.description && (
                <div className="text-slate-600 dark:text-[#bbbbbb] mt-2">
                  {item.description.includes("/li") ? (
                    <ul className="list-disc ml-5 space-y-1">
                      {item.description
                        .split("/li")
                        .map((line, i) => line.trim())
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

export default ContentWithNoLinks;
