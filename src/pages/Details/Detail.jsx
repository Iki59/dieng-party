import React from 'react';
import { DetailVilla } from '../../components/Detail/DetailVilla';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import { VillaRecomendation } from '../../components/Recomendations/VillaRecomendation';
import UserTestimonials from '../../components/Testimonials/UserTestimonials';
import { Faq } from '../../components/Faq/Faq';
import { Contact } from '../../components/ContactUs/Contact';
import { Footer } from '../../components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import MobileTestimonials from '../../components/Testimonials/MobileTestimonials';

export const Detail = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <div style={{ marginTop: '8rem' }}>
        <IniNavbar />
        <DetailVilla />
        {isMobile && <MobileTestimonials />}
        <VillaRecomendation />
        <UserTestimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
