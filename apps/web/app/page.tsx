// app/page.tsx
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProjectMap from "@/components/projects/ProjectMap";
import NewsSection from "@/components/home/NewsSection";
import PartnersSection from "@/components/home/PartnersSection";
import PartnershipCTA from "@/components/home/PartnershipCTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <StatsSection />
      <ProjectsSection />
      <ProjectMap />
      <NewsSection />
      <PartnersSection />
      <PartnershipCTA />
    </main>
  );
}