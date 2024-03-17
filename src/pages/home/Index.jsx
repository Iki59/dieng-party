import { useEffect, useState } from 'react';
import { Contact } from '../../components/ContactUs/Contact';
import { Faq } from '../../components/Faq/Faq';
import { Footer } from '../../components/Footer/Footer';
import { LandingPage } from '../../components/Landing/LandingPage';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import VillaRecomendation from '../../components/Recomendations/VillaRecomendation';
import VillaCard from '../../components/StayCard/VillaCard';
import UserTestimonials from '../../components/Testimonials/UserTestimonials';

export const HomePage = () => {
   const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('../data-villa.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('ini data', data);
  return (
    <>
      <div className="h-100 min-100-vh" style={{ marginTop: '8rem' }}>
        <IniNavbar />
        <LandingPage />
        <VillaRecomendation data={data} />
        {/* <Wisata /> */}
        <VillaCard data={data} />
        <UserTestimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
