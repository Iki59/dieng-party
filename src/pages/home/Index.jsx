import { LandingPage } from '../../components/Landing/LandingPage';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import VillaRecomendation from '../../components/Recomendations/VillaRecomendation';
import VillaCard from '../../components/StayCard/VillaCard';

const HomePage = () => {
  return (
    <>
      <IniNavbar />
      <LandingPage />
      <VillaRecomendation />
      <VillaCard />
    </>
  );
};

export default HomePage;
