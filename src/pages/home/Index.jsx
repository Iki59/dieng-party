import { Faq } from "../../components/Faq/Faq";
import { LandingPage } from "../../components/Landing/LandingPage";
import { IniNavbar } from "../../components/Navbar/iniNavbar";
import VillaRecomendation from "../../components/Recomendations/VillaRecomendation";
import VillaCard from "../../components/StayCard/VillaCard";
import { Wisata } from "../../components/Wisata/wisata";

const HomePage = () => {
  return (
    <>
      <IniNavbar />
      <LandingPage />
      <VillaRecomendation />
      <Wisata />
      <VillaCard />
      <Faq />
    </>
  );
};

export default HomePage;
