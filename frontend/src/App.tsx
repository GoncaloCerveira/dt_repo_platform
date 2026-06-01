import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { SelectedPage } from "@/components/types";
import Navbar from "@/screens/navbar";
import Home from "@/screens/home";
import OurProjectSection from "@/screens/ourProject"; 
import Footer from "@/screens/footer";
import SantaClara from "@/screens/santa_clara";
import Segmentation from "@/screens/segmentation";
import AzulejoProjectPage from "@/screens/ourProjects2_multi"
import SearchPage2 from "@/screens/search";
import Milreu from "@/screens/milreu";
import Escoural from "./screens/gruta_escoural";
import Deployment from "./screens/deployment";
import Firmware from "./screens/firmaware";
import VisitorFlow from "./screens/visitors_flow";
import Model from "./screens/model";
import OurTecnhologySection from "@/screens/app_tecnhology";

// Authentication Imports
import Login from "@/screens/login_page";
import { ProtectedRoute } from "@/store/ProtectedRoute";

// Public Pages
import NavbarPublic from "./screens/navbar_public";
import OurProjectSectionPublic from "./screens/ourProjectPublic";
import SantaClaraPub from "./screens/pilotPublicPages/indexSantaPublic";
import AzuelejoPublicPub from "./screens/pilotPublicPages/indexAzulejoPublic";
import AlcobacaPublicPub from "./screens/pilotPublicPages/indexAlcobacaPublic";
import RuinasPublicPub from "./screens/pilotPublicPages/indexRuinasPublic";
import MosteiroPublicPub from "./screens/pilotPublicPages/indexMosteiroPublic";
import GrutaPublicPub from "./screens/pilotPublicPages/indexGrutaPublic";
import LocationsCatalog from "./screens/locations_page";

// Public Pages Technology
import DeploymentTech from "@/screens/app_tecnhology/tech_deployment";
import FirmwareTech from "./screens/app_tecnhology/tech_firmware";
import EscouralTech from "./screens/app_tecnhology/tech_gruta";
import MilreuTech from "./screens/app_tecnhology/tech_milreu";
import AzulejoDetailFullTech from "./screens/app_tecnhology/tech_vr_ar";
import SantaClaraTech from "./screens/app_tecnhology/tech_santa_clara";
import SearchTech from "./screens/app_tecnhology/tech-search";
import SegmentationTech from "./screens/app_tecnhology/tech_segmentation";
import VisitorFlowTech from "./screens/app_tecnhology/tech_visitors_flow";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* PUBLIC LANDING */
function PublicLanding() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavbarPublic
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Model setSelectedPage={setSelectedPage}/>
      <OurProjectSectionPublic setSelectedPage={setSelectedPage}/>
      <OurTecnhologySection setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  );
}

const PageWrapperPublic = ({ children }: { children: React.ReactNode }) => (
  <div className="app bg-gray-20">
    <NavbarPublic 
      selectedPage={SelectedPage.ModelDemo} 
      setSelectedPage={() => {}} 
    />
    <div className="pt-20">
      {children}
    </div>
    <Footer />
  </div>
);

const SantaClaraPublic = () => <PageWrapperPublic><SantaClaraPub /></PageWrapperPublic>;
const AzulejoPublic = () => <PageWrapperPublic><AzuelejoPublicPub /></PageWrapperPublic>;
const AlcobacaPublic = () => <PageWrapperPublic><AlcobacaPublicPub /></PageWrapperPublic>;
const RuinasPublic = () => <PageWrapperPublic><RuinasPublicPub /></PageWrapperPublic>;
const MosteiroPublic = () => <PageWrapperPublic><MosteiroPublicPub /></PageWrapperPublic>;
const GrutaPublic = () => <PageWrapperPublic><GrutaPublicPub /></PageWrapperPublic>;
const LocationsCatalogPage = () => <PageWrapperPublic><LocationsCatalog /></PageWrapperPublic>;
const AboutUsPage = () => <PageWrapperPublic><LocationsCatalog /></PageWrapperPublic>;

{/* PUBLIC ROUTES for Technology */}
const SantaClaraPagePub = () => <PageWrapperPublic><SantaClaraTech /></PageWrapperPublic>;
const AzulejoPagePub = ({ setSelectedPage }: { setSelectedPage?: (value: any) => void }) => (
  <PageWrapperPublic>
    <AzulejoDetailFullTech setSelectedPage={setSelectedPage || (() => {})} />
  </PageWrapperPublic>
);
const GrutaEscouralPagePub = () => <PageWrapperPublic><EscouralTech /></PageWrapperPublic>;
const SearchPagePub = () => <PageWrapperPublic><SearchTech /></PageWrapperPublic>;
const SegmentationPagePub = () => <PageWrapperPublic><SegmentationTech /></PageWrapperPublic>;
const MireuPagePub = () => <PageWrapperPublic><MilreuTech /></PageWrapperPublic>;
const PlatformPagePub = () => <PageWrapperPublic><DeploymentTech /></PageWrapperPublic>;
const FirmwarePagePub = () => <PageWrapperPublic><FirmwareTech /></PageWrapperPublic>;
const VisitorPagePub = () => <PageWrapperPublic><VisitorFlowTech /></PageWrapperPublic>;

/* APP MAIN (Repository Page) */
function AppMain() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }

      const triggerLine = window.scrollY + 300;

      const sections = [
        { id: "home", value: SelectedPage.Home },
        { id: "ourproject", value: SelectedPage.OurProject },
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (triggerLine >= offsetTop && triggerLine < offsetTop + offsetHeight) {
            setSelectedPage(section.value);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OurProjectSection setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="app bg-gray-20 flex flex-col min-h-screen">
    <Navbar 
      selectedPage={SelectedPage.ModelDemo} 
      setSelectedPage={() => {}} 
    />
    <main className="flex-1 pt-20">
      {children}
    </main>
    
    <Footer />
  </div>
);

{/* PUBLIC ROUTES for Pilots */}
const SantaClaraPage = () => <PageWrapper><SantaClara /></PageWrapper>;
const AzulejoPage = ({ setSelectedPage }: { setSelectedPage?: (value: any) => void }) => (
  <PageWrapper>
    <AzulejoProjectPage setSelectedPage={setSelectedPage || (() => {})} />
  </PageWrapper>
);
const GrutaEscouralPage = () => <PageWrapper><Escoural /></PageWrapper>;
const SearchPage = () => <PageWrapper><SearchPage2 /></PageWrapper>;
const SegmentationPage = () => <PageWrapper><Segmentation /></PageWrapper>;
const MireuPage = () => <PageWrapper><Milreu /></PageWrapper>;
const PlatformPage = () => <PageWrapper><Deployment /></PageWrapper>;
const FirmwarePage = () => <PageWrapper><Firmware /></PageWrapper>;
const VisitorPage = () => <PageWrapper><VisitorFlow /></PageWrapper>;

/* ROUTING CONFIGURATION */
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        
        <Routes>
          {/* PUBLIC ROUTES (Not Safe) */}
          <Route path="/" element={<PublicLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/santa-clara" element={<SantaClaraPublic />} />
          <Route path="/azulejo" element={<AzulejoPublic />} />
          <Route path="/alcobaca" element={<AlcobacaPublic />} />
          <Route path="/ruinas_milreu" element={<RuinasPublic />} />
          <Route path="/mosteiro_jeronimos" element={<MosteiroPublic />} />
          <Route path="/gruta_escoural" element={<GrutaPublic />} />
          <Route path="/outros-sitios" element={<LocationsCatalogPage />} />
          <Route path="/tech-santa-clara" element={<SantaClaraPagePub />} />
          <Route path="/tech-azulejo" element={<AzulejoPagePub />} />
          <Route path="/tech-gruta-escoural" element={<GrutaEscouralPagePub />} />
          <Route path="/tech-hbim-pesquisa" element={<SearchPagePub />} />
          <Route path="/tech-hbim-segmentacao" element={<SegmentationPagePub />} />
          <Route path="/tech-milreu" element={<MireuPagePub />} />
          <Route path="/tech-plataforma-iot" element={<PlatformPagePub />} />
          <Route path="/tech-firmware-iot" element={<FirmwarePagePub />} />
          <Route path="/tech-fluxo_visitantes" element={<VisitorPagePub />} />
          <Route path="/sobre-nos" element={<AboutUsPage />} />

          {/* PROTECTED REPOSITORY ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/repository" element={<AppMain />} />
            
            <Route path="/repository/santa-clara" element={<SantaClaraPage />} />
            <Route path="/repository/azulejo" element={<AzulejoPage />} />
            <Route path="/repository/gruta-escoural" element={<GrutaEscouralPage />} />
            <Route path="/repository/hbim-pesquisa" element={<SearchPage />} />
            <Route path="/repository/hbim-segmentacao" element={<SegmentationPage />} />
            <Route path="/repository/app-milreu" element={<MireuPage />} />
            <Route path="/repository/plataforma_iot" element={<PlatformPage />} />
            <Route path="/repository/firmware_iot" element={<FirmwarePage />} />
            <Route path="/repository/fluxo_visitantes" element={<VisitorPage />} />
          </Route>

          {/* SAFE FALLBACK */}
          <Route path="*" element={<PublicLanding />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;