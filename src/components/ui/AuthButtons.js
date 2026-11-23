"use client";

import Link from "next/link";
import { LuLogIn, LuUserPlus, LuUserRound } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-10 w-40 animate-pulse rounded-lg bg-foreground/10" />
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/profile"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <LuUserRound size={18} />
          حساب کاربری
        </Link>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_4px_16px_rgba(232,93,74,0.2)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(232,93,74,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
        >
          خروج
        </button>
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
