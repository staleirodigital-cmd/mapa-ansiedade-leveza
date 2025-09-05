import HeroSection from "@/components/HeroSection";
import EmotionalIdentification from "@/components/EmotionalIdentification";
import MapaExplanation from "@/components/MapaExplanation";
import TargetAudience from "@/components/TargetAudience";
import SessionBenefits from "@/components/SessionBenefits";
import PsychologistProfile from "@/components/PsychologistProfile";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import QualificationForm from "@/components/QualificationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmotionalIdentification />
      <MapaExplanation />
      <TargetAudience />
      <SessionBenefits />
      <PsychologistProfile />
      <Testimonials />
      <FinalCTA />
      <QualificationForm />
      <Footer />
    </div>
  );
};

export default Index;
