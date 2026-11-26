"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsSunglasses } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";

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
        className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out size-8 ${isDark ? "text-muted hover:text-foreground" : "text-yellow-400"} `}
      >
        <GoSun size={18} />
        <BsSunglasses
          size={12}
          className={`absolute text-black transition-all duration-300 ease-in-out ${isDark ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
        />
      </button>
      <button
        onClick={() => setTheme("dark")}
        type="button"
        aria-pressed={isDark}
        aria-label="فعال کردن تم تاریک"
        className={`relative z-10 flex items-center justify-center rounded-full transition-all size-8 ${isDark ? "text-foreground rotate-0" : "rotate-270 text-muted"} `}
      >
        {isDark ? <HiMiniMoon size={15} /> : <FiMoon size={15} />}
      </button>

      <span
        className={`absolute size-8 rounded-full bg-surface top-1 left-1 shadow-sm pointer-events-none transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isDark ? "translate-x-9" : "translate-x-0"}`}
        aria-hidden="true"
      ></span>
    </div>
  );
}
