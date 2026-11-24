"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import AuthButtons from "../ui/AuthButtons";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { title: "صفحه اصلی", href: "/" },
  { title: "پیدا کردن هم‌تیمی", href: "/players" },
  { title: "آگهی‌ها", href: "/posts" },
  { title: "اخبار", href: "/news" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-surface text-foreground">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:flex-row-reverse">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="cursor-pointer md:hidden"
        >
          <HiOutlineMenu size={26} />
        </button>

        {/* Logo & Theme Toggle */}
        <div className="flex items-center gap-4 flex-row-reverse">
          <Link href="/" aria-label="صفحه اصلی سیروانا">
            {/* Mobile Icon */}
            <Image
              src="/images/sirvana-icon.svg"
              alt="Sirvana"
              width={40}
              height={50}
              className="md:hidden"
            />

            {/* Desktop Logo */}
            <Image
              src="/images/sirvanaLogo.png"
              alt="لوگوی سیروانا"
              width={200}
              height={50}
              loading="eager"
              className="hidden h-auto md:block"
            />
          </Link>
          <ThemeToggle />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        {/* Login Logout */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-surface p-6 shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 pt-10">
          <AuthButtons />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-0 z-40 bg-black/60 md:hidden"
        />
      )}

      <div className="flex flex-wrap items-center gap-4 p-6">
        <Button>دکمه اصلی</Button>

        <Button variant="secondary">دکمه ثانویه</Button>

        <Button variant="outline">ویرایش پروفایل</Button>

        <Button variant="ghost">انصراف</Button>

        <Button variant="danger">حذف</Button>

        <Button disabled>غیرفعال</Button>

        <Button size="sm">کوچک</Button>

        <Button size="lg">بزرگ</Button>

        <Button isLoading loadingText="در حال ذخیره...">
          ذخیره اطلاعات
        </Button>
      </div>
    </header>
  );
}
