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
import AzulejoProjectPage from "@/screens/ourProjects2_multi"
import SearchPage2 from "@/screens/search";
import Milreu from "@/screens/milreu";

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
const GrutaEscouralPage = () => <PageWrapper><Segmentation /></PageWrapper>;
const SearchPage = () => <PageWrapper><SearchPage2 /></PageWrapper>;
const SegmentationPage = () => <PageWrapper><Segmentation /></PageWrapper>;
const MireuPage = () => <PageWrapper><Milreu /></PageWrapper>;

/* ROUTING */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<AppMain />} />
          <Route path="/santa-clara" element={<SantaClaraPage />} />
          <Route path="/azulejo" element={<AzulejoPage />} />
          <Route path="/gruta-escoural" element={<SegmentationPage />} />
          <Route path="/hbim-pesquisa" element={<SearchPage />} />
          <Route path="/hbim-segmentacao" element={<SegmentationPage />} />
          <Route path="/app-milreu" element={<MireuPage />} />

          {/* Fallback */}
          <Route path="*" element={<AppMain />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;