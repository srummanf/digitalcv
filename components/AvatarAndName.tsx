import Image from "next/image";
import { generalData } from "@/data/general";


const AvatarAndName = () => {
  return (
    <>
      <section className="flex items-center font-normal">
        <div className="relative w-20 h-20">
          <Image
            alt="Author"
            src={generalData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />

          <div className="absolute -bottom-1 -right-1 rounded-full bg-slate-200 dark:bg-[#383838] p-1 border border-white dark:border-slate-800">
            <span className="text-base">
              {generalData.statusEmoji ? (
                generalData.statusEmoji
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>

        <div className="ml-4">
          <h1 className="text-xl text-slate-900 dark:text-[#eeeeee] font-normal">
            {generalData.name}
          </h1>
          <p className="text-sm text-slate-600 dark:text-[#bbbbbb]">
            {generalData.jobTitle}
          </p>

          {generalData.website && (
            <span className="mt-1 inline-block rounded-full bg-slate-200/80 px-3 py-1 text-sm text-slate-700 dark:bg-[#383838] dark:text-[#cdcdcd]">
              <a
                href={generalData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {generalData.website
                  .replace(/(^\w+:|^)\/\//, "")
                  .replace("www.", "")}
              </a>
            </span>
          )}
        </div>
      </section>
    </>
  );
};

export default AvatarAndName;
