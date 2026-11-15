import Link from "next/link";
import { LuLogIn, LuUserPlus } from "react-icons/lu";

export default function AuthButtons() {
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
