"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMiniMoon } from "react-icons/hi2";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <span className="inline-block h-10 w-19" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      dir="ltr"
      className="relative w-fit flex items-center gap-1 rounded-full bg-surface-elevated p-1 transition-colors  "
    >
      <button
        onClick={() => setTheme("light")}
        type="button"
        aria-pressed={!isDark}
        aria-label="فعال کردن تم روشن"
        className={`relative z-10 flex items-center justify-center rounded-full transition-colors size-8 ${isDark ? "text-muted hover:text-foreground" : "text-yellow-400"} `}
      >
        <FiSun size={17} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        type="button"
        aria-pressed={isDark}
        aria-label="فعال کردن تم تاریک"
        className={`relative z-10 flex items-center justify-center rounded-full transition-colors size-8 ${isDark ? "text-foreground" : "text-muted hover:text-foreground"} `}
      >
        {isDark ? <HiMiniMoon size={17} /> : <FiMoon size={17} />}
      </button>

      <span
        className={`absolute size-8 rounded-full bg-surface top-1 left-1 shadow-sm pointer-events-none transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isDark ? "translate-x-9" : "translate-x-0"}`}
        aria-hidden="true"
      ></span>
    </div>
  );
}
