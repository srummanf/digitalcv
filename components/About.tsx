import React from "react";
import { plusJakartaSans } from "@/app/fonts";
import { generalData } from "@/data/general";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
