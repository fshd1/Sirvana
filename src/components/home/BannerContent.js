import Image from "next/image";

function BannerContent() {
  return (
    <div>
      <section className="relative h-50 w-full md:h-100 lg:h-130">
        <Image
          src="/images/banner.png"
          alt="Sirvana Banner"
          fill
          sizes="100vw"
          className="object-cover object-center"
          preload
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/40 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-center gap-4 px-6 text-white md:px-16">
          <h1 className="flex items-center gap-2 text-2xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-primary">رقابتت</span>
            <p>از اینجا شروع میشه</p>
          </h1>

          <p className="hidden max-w-lg text-sm text-gray-200 md:text-lg md:block">
            سیروانا؛ جایی برای ارتباط گیمرها، تشکیل تیم، رقابت و تجربه لحظات
            هیجان‌انگیز.
          </p>

          <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:brightness-110">
           کشف سیروانا
          </button>
        </div>
      </section>
    </div>
  );
}

export default BannerContent;
