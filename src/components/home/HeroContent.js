import Link from "next/link";

import { FaUsers } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

function HeroContent() {
  return (
    <div className="relative flex flex-col gap-4 z-10 text-center md:text-start items-center md:items-start w-full md:max-w-[48%] xl:max-w-xl lg:max-w-xl">
      <h1 className="text-4xl text-foreground md:text-white md:text-5xl lg:text-6xl font-black">
        سیروانا
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl md:text-white font-bold">
        جامعه تخصصی بازیکنان <span className="text-primary">Dota 2</span>
      </h2>
      <p className="text-sm md:text-base md:text-white/80 text-foreground/80 leading-8">
        پیدا کردن هم‌تیمی، ثبت آگهی، شرکت در مسابقات و ارتباط با بازیکنان
        ایرانی، همه در یکجا
      </p>
      <div className="max-w-xs flex flex-col md:flex-row gap-3 w-full md:w-auto md:max-w-none">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium transition-colors bg-primary text-white hover:bg-primary-hover"
        >
          <FaUsers />
          همین حالا شروع کنید
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium transition-colors border border-primary text-primary hover:bg-primary/10"
        >
          <IoPlayOutline />
          معرفی سیروانا
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
