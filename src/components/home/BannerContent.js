import { getImageProps } from "next/image";

function BannerContent() {
  const { props: desktop } = getImageProps({
    src: "/images/Banner2.png",
    alt: "",
    width: 1774,
    height: 887,
    sizes: "100vw",
  });
  const { props: mobile } = getImageProps({
    src: "/images/MobileBanner.png",
    alt: "",
    width: 1024,
    height: 1536,
    sizes: "100vw",
  });

  return (
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktop.srcSet}
          sizes={desktop.sizes}
        />

        <img
          {...mobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover mdd:object-top"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background from-20% via-44% to-100% md:via-transparent pointer-events-none" />
    </div>
  );
}

export default BannerContent;
