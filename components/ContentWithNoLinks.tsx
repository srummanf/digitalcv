import React from "react";
import { plusJakartaSans } from "@/app/fonts";
import type { ContentWithNoLinks } from "@/data/content";

type ContentProps = ContentWithNoLinks;

const ContentWithNoLinks: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3
        className={`${plusJakartaSans.className} mb-6 text-slate-900 dark:text-slate-100`}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div className="flex" key={index}>
            <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
              {item.date}
            </div>
            <div className="flex flex-col flex-1">
              <h4
                className={`${plusJakartaSans.className} text-slate-900 dark:text-slate-100`}
              >
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-gray-400">
                {item.subTitle}
              </p>
              {item.description && (
                <p className="text-slate-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWithNoLinks;
