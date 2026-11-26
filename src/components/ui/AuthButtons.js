"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { LuLogIn, LuLogOut, LuUserPlus, LuUserRound } from "react-icons/lu";

export default function AuthButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { status } = useSession();

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (status === "loading") {
    return (
      <div className="h-10 w-40 animate-pulse rounded-lg bg-foreground/10" />
    );
  }

  if (status === "authenticated") {
    return (
      <div
        ref={dropdownRef}
        className="relative flex items-center lg:flex-row-reverse gap-5 "
      >
        <FaRegBell
          size={22}
          className="rounded-full flex items-center justify-center text-muted cursor-pointer hover:text-foreground hover:bg-surface-elevated transition-colors"
        />
        <button
          type="button"
          className="size-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center transition-colors hover:border-primary"
          aria-label="منوی حساب کاربری"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <LuUserRound size={18} />
        </button>

        <div
          inert={!isOpen}
          className={`absolute top-full left-0 lg:right-0 w-56 mt-2 bg-surface border border-border rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-200 ease-out origin-top-left motion-reduce:transition-none ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
        >
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-4 border-b border-border text-sm hover:bg-surface-elevated transition-colors"
          >
            <LuUserRound size={20} />
            حساب کاربری
          </Link>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-3 p-4  text-sm hover:text-primary hover:bg-surface-elevated  transition-colors ease-in-out"
          >
            <LuLogOut size={19} className="text-primary" />
            خروج از حساب
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Login */}
      <Link
        href="/login"
        className="flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <LuLogIn size={18} />
        <span>ورود</span>
      </Link>

      {/* Register */}
      <Link
        href="/register"
        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_4px_16px_rgba(232,93,74,0.2)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(232,93,74,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <LuUserPlus size={18} />
        <span>ثبت‌نام</span>
      </Link>
    </div>
  );
}
