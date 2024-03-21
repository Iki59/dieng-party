import { Contact } from '../../components/ContactUs/Contact';
import { Faq } from '../../components/Faq/Faq';
import { Footer } from '../../components/Footer/Footer';
import { LandingPage } from '../../components/Landing/LandingPage';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import { VillaRecomendation } from '../../components/Recomendations/VillaRecomendation';
import VillaCard from '../../components/StayCard/VillaCard';
import UserTestimonials from '../../components/Testimonials/UserTestimonials';
import dataVilla from '../../../data-villa.json';

export const HomePage = () => {
  return (
    <>
      <div className="h-100 min-100-vh" style={{ marginTop: '8rem' }}>
        <IniNavbar />
        <LandingPage />
        <VillaRecomendation />
        {/* <Wisata /> */}
        <VillaCard data={dataVilla} />
        <UserTestimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
