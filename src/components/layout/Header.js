"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  LuHouse,
  LuMegaphone,
  LuNewspaper,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";

import { useSession } from "next-auth/react";
import AuthButtons from "../ui/AuthButtons";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";
import DesktopHeader from "./DesktopHeader";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { title: "خانه", href: "/", icon: LuHouse },
  { title: "بازیکنان", href: "/players", icon: LuUsers },
  { title: "آگهی‌ها", href: "/posts", icon: LuMegaphone },
  { title: "مسابقات", href: "/news", icon: LuTrophy },
  { title: "اخبار", href: "/Tornouments", icon: LuNewspaper },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isGuest = status === "unauthenticated";
  const isLoading = status === "loading";

  return (
    <header className="relative z-50 bg-surface text-foreground border-b border-border">
      <Container>
        <DesktopHeader onClose={() => setIsOpen(false)} navLinks={navLinks} />
        <div className="flex h-16 items-center justify-between xl:hidden">
          {/* Mobile HamburgerMenu Button */}
          <div className="flex items-center gap-4 ">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="cursor-pointer size-11 justify-center shrink-0"
            >
              <HiOutlineMenu size={24} />
            </button>
            <ThemeToggle />
          </div>

          {/*Actions: Login Logout */}
          <div className="flex items-center gap-6">
            {isAuthenticated && <AuthButtons />}
            {isGuest && (
              <Link href="/" aria-label="صفحه اصلی سیروانا">
                {/* Desktop Logo */}
                <Image
                  src="/images/sirvanaLogo2.png"
                  alt="لوگوی سیروانا"
                  width={150}
                  height={50}
                  loading="eager"
                  className=""
                />
              </Link>
            )}
            {isLoading && (
              <div className="h-10 w-40 animate-pulse rounded-lg bg-foreground/10" />
            )}
          </div>
        </div>

        <MobileDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinks={navLinks}
          isGuest={isGuest}
        />
      </Container>
    </header>
  );
}
