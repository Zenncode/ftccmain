import Header from "@/components/Header";
import DepartmentsSection from "@/components/pages/DepartmentsSection";
import AboutSection from "@/components/pages/AboutSection";
import TestimonialsSection from "@/components/partsection/TestimonialsSection";
import ContactSection from "@/components/pages/ContactSection";
import Footer from "@/components/Footer";
import Home from "@/components/pages/Home";
import ServicesOverview from "@/components/partsection/ServicesOverview";

export default function HomePage() {

  return (

    <section>
      <Header />
      <main>
        <Home />
        <ServicesOverview />
        <DepartmentsSection />
        <AboutSection />
        <TestimonialsSection/>
        <ContactSection />
      </main>
      <Footer />

    </section>
    
  );
}
