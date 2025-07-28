"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="px-6 absolute left-0 bottom-6">
        <label
          htmlFor="theme"
          className="mr-2 font-light text-sm text-slate-400 dark:text-slate-400"
        >
          Theme
        </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="font-light text-sm text-slate-900 dark:text-slate-100"
          id="theme"
        >
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </>
  );
};

export default ThemeSwitch;

/* If you want to use Dark/Light Mode Toggle - Uncomment this, Add it in globals.css and make your changes */
/* Custom dark mode without config */
/* html {
  transition: background-color 0.3s ease, color 0.3s ease;
} */

/* Light theme */
/* html.light {
  color-scheme: light;
} */

/* Dark theme */
/* html.dark {
  color-scheme: dark;
} */

/* Apply dark styles when .dark class is present */
/* html.dark body {
  background-color: rgb(17 24 39); 
  color: rgb(243 244 246); 
} */

/* html.light body {
  background-color: rgb(255 255 255);
  color: rgb(17 24 39);
} */
