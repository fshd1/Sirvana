import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GrFormClose } from "react-icons/gr";
import AuthButtons from "../ui/AuthButtons";

function MobileDrawer({ isOpen, onClose, navLinks, isGuest }) {
  const pathname = usePathname();
  return (
    <>
      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`max-w-[85vw] flex flex-col gap-6 overflow-y-auto border-l border-border rounded-l-2xl motion-reduce:transition-none fixed inset-y-0 right-0 z-50 w-72 bg-surface p-4 shadow-xl transition-transform duration-300 xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link onClick={onClose} href="/">
            <Image
              src="/images/sirvanaLogo2.png"
              alt="لوگو سیروانا"
              width={150}
              height={50}
              loading="eager"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="size-11 flex items-center justify-center shrink-0 rounded-lg hover:bg-surface-elevated transition-colors"
          >
            <GrFormClose size={24} />
          </button>
        </div>

        {isGuest && <AuthButtons />}

        <nav className="flex flex-col gap-1 border-b pb-2 border-border ">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={onClose}
                className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-primary/15" : "hover:bg-surface-elevated"}`}
              >
                <Icon
                  size={22}
                  className={`${isActive ? "text-primary" : "text-muted"} `}
                />
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 xl:hidden"
        />
      )}
    </>
  );
}

export default MobileDrawer;
