import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import DiasporaBanner from "@/components/home/DiasporaBanner";
import AgencesSection from "@/components/home/AgencesSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <DiasporaBanner />
      <AgencesSection />
      <CTASection />
    </>
  );
}
