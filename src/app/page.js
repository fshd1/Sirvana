import HomeDashboard from "../components/home/HomeDashboard";
import HeroSection from "../components/home/HeroSection";
import QuickAccess from "../components/home/QuickAccess";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <QuickAccess />
      <HomeDashboard />
    </main>
  );
}
