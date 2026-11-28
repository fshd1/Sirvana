import Container from "../ui/Container";
import BannerContent from "./BannerContent";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <section className="relative md:min-h-100 lg:min-h-150">
      <BannerContent />
      <Container className="relative z-10 flex flex-col items-center md:items-start pt-64 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
        <HeroContent />
      </Container>
    </section>
  );
}

export default HeroSection;
