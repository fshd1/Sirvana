import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AuthButtons from "../ui/AuthButtons";
import ThemeToggle from "../ui/ThemeToggle";

function DesktopHeader({ navLinks, onClose }) {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex items-center justify-between gap-6 h-18">
      <div className="flex items-center gap-4 shrink-0">
        {/* Actions */}
        <AuthButtons />
        <ThemeToggle />
      </div>
      <nav className="flex items-center gap-6 h-full">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onClose}
              className={`relative flex items-center gap-2 p-3 h-full rounded-xl text-base font-medium transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:transition-transform after:duration-300 after:ease-in-out after:origin-center motion-reduce:after:transition-none ${isActive ? "text-primary after:scale-x-100 after:shadow-[0_0_8px_var(--primary)]" : "text-muted hover:text-foreground after:scale-x-0 	hover:after:scale-x-100"}`}
            >
              <Icon size={22} aria-hidden="true" />
              {link.title}
            </Link>
          );
        })}
      </nav>
      <div className="shrink-0">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="لوگو سیروانا"
            src="/images/sirvanaLogo2.png"
            width={220}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}

export default DesktopHeader;
