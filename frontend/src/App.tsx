import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { SelectedPage } from "@/components/types";
import Navbar from "@/screens/navbar";
import Home from "@/screens/home";
import OurProjectSection from "@/screens/ourProject2";
import Footer from "@/screens/footer";
import SantaClara from "@/screens/santa_clara";
import Segmentation from "@/screens/segmentation";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppMain() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
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
  <div className="appdemo bg-gray-20">
    <Navbar 
      selectedPage={SelectedPage.ModelDemo} 
      setSelectedPage={() => {}} // Função vazia para páginas estáticas
    />
    {children}
    <Footer />
  </div>
);

const SantaClara_page = () => (
  <PageWrapper>
    <SantaClara />
  </PageWrapper>
);

const Azulejo_page = () => (
  <PageWrapper>
    <Segmentation />
  </PageWrapper>
);

const GrutaEscoural_page = () => (
  <PageWrapper>
    <Segmentation />
  </PageWrapper>
);

const HBIMSearch_page = () => (
  <PageWrapper>
    <Segmentation />
  </PageWrapper>
);

const HBIMSegmentation_page = () => (
  <PageWrapper>
    <Segmentation />
  </PageWrapper>
);

const MilreuAPP_page = () => (
  <PageWrapper>
    <Segmentation />
  </PageWrapper>
);

function AppWithRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<AppMain />} />
          <Route path="/santa-clara" element={<SantaClara_page />} />
          <Route path="/azulejo" element={<Azulejo_page />} />
          <Route path="/gruta-escoural" element={<GrutaEscoural_page />} />
          <Route path="/hbim-pesquisa" element={<HBIMSearch_page />} />
          <Route path="/hbim-segmentacao" element={<HBIMSegmentation_page />} />
          <Route path="/app-milreu" element={<MilreuAPP_page />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppWithRouter;