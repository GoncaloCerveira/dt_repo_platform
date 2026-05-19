import { useEffect, useState } from "react";
// 1. Swap BrowserRouter for HashRouter in your imports
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { SelectedPage } from "@/components/types";
import Navbar from "@/screens/navbar";
import Home from "@/screens/home";
import OurProjectSection from "@/screens/ourProject2"; 
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
import Models3D from "./screens/3d_models";

// Authentication Imports
import Login from "@/screens/login_page";
import { ProtectedRoute } from "@/store/ProtectedRoute";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* APP MAIN */
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
  <div className="app bg-gray-20">
    <Navbar 
      selectedPage={SelectedPage.ModelDemo} 
      setSelectedPage={() => {}} 
    />
    <div className="pt-20">
      {children}
    </div>
    <Footer />
  </div>
);

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
const ModelsPage = () => <PageWrapper><Models3D /></PageWrapper>;

/* ROUTING */
function App() {
  return (
    <Provider store={store}>
      {/* 2. Replace BrowserRouter with HashRouter */}
      <HashRouter>
        <ScrollToTop />
        
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* All Protected Routes wrapped together */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<AppMain />} />
            <Route path="/santa-clara" element={<SantaClaraPage />} />
            <Route path="/azulejo" element={<AzulejoPage />} />
            <Route path="/gruta-escoural" element={<GrutaEscouralPage />} />
            <Route path="/hbim-pesquisa" element={<SearchPage />} />
            <Route path="/hbim-segmentacao" element={<SegmentationPage />} />
            <Route path="/app-milreu" element={<MireuPage />} />
            <Route path="/plataforma_iot" element={<PlatformPage />} />
            <Route path="/firmware_iot" element={<FirmwarePage />} />
            <Route path="/fluxo_visitantes" element={<VisitorPage />} />
          </Route>

          {/* Safe Fallback outside of protected wrapper */}
          <Route path="*" element={<AppMain />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;