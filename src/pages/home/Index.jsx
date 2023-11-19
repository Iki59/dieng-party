import { LandingPage } from "../../components/Landing/LandingPage";
import { IniNavbar } from "../../components/Navbar/iniNavbar";
import VillaRecomendation from "../../components/Recomendations/VillaRecomendation";

const HomePage = () => {
  return (
    <>
      <IniNavbar />
      <LandingPage />
      <VillaRecomendation />
    </>
  );
};

export default HomePage;
