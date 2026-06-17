import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/layout/ContactModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection} from "@/components/sections/ServicesSection";
import { InventivAISection } from "@/components/sections/InventivAISection";
import { StatsMarquee } from "@/components/sections/StatsMarquee";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ConsultCTA } from "@/components/sections/ConsultCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { StrategyCTA } from "@/components/sections/StrategyCTA";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MarketingCTA } from "@/components/sections/MarketingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { coreTechnologies, servicesSlides } from "@/data/content";
import { TechStackSection } from "@/components/sections/TechStack";
import { InnovationsSection } from "@/components/sections/InnovationSection";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <HeroSection />
        <InnovationsSection/>
        <ServicesSection />
        <ServicesCarousel slides={servicesSlides} />
        {/* <InventivAISection /> */}
        <StatsMarquee />
        <TechStackSection />
        {/* <PortfolioSection /> */}
        {/* <ConsultCTA /> */}
        <TestimonialsSection />
        <TrustedBySection />
        {/* <ExpertiseSection /> */}
        {/* <AwardsSection /> */}
        {/* <ComplianceSection /> */}
        {/* <StrategyCTA /> */}
        {/* <PartnersSection /> */}
        {/* <IndustriesSection /> */}
        {/* <MarketingCTA /> */}
        <FAQSection />
      </main>
      <Footer />
      <ContactModal />
    </SmoothScroll>
  );
}
