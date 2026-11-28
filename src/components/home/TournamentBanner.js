import Image from "next/image";
import Link from "next/link";
import { GiTrophyCup } from "react-icons/gi";

function TournamentBanner() {
  return (
    <div className="relative w-full flex items-center overflow-hidden rounded-2xl border border-border min-h-44 md:min-h-52 lg:min-h-56">
      <Image
        src="/images/TournamentBanner.png"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-right md:object-center"
        fill
        alt=""
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center z-10 gap-3 w-[60%] mr-auto p-3 md:p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <GiTrophyCup className="text-primary size-6 md:size-8 shrink-0" />
          <h2 className="text-base md:text-2xl font-bold text-white">
            مسابقات هفتگی سیروانا
          </h2>
        </div>
        <p className="text-xs md:text-sm text-white/80">
          رقابت، تیم سازی و جایزه
        </p>
        <Link
          href="/tournaments"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-lg px-4 py-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap"
        >
          جزئیات و ثبت نام
        </Link>
      </div>
    </div>
  );
}

export default TournamentBanner;
