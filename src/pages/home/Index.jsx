import { Contact } from "../../components/ContactUs/Contact";
import { Faq } from "../../components/Faq/Faq";
import { Footer } from "../../components/Footer/Footer";
import { LandingPage } from "../../components/Landing/LandingPage";
import VillaRecomendation from "../../components/Recomendations/VillaRecomendation";
import VillaCard from "../../components/StayCard/VillaCard";
import UserTestimonials from "../../components/Testimonials/UserTestimonials";
// import { Wisata } from '../../components/Wisata/wisata';

export const HomePage = () => {
  return (
    <>
      <div className="h-100 min-100-vh" style={{ marginTop: "8rem" }}>
        <LandingPage />
        <VillaRecomendation />
        {/* <Wisata /> */}
        <VillaCard />
        <UserTestimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
