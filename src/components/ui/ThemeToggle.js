"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <span className="inline-block h-8 w-8" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "فعال کردن تم روشن" : "فعال کردن تم تاریک"}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-background text-foreground transition-colors"
    >
      {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
}
