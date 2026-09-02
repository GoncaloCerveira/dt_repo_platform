import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import Logo_navbar from "@/assets/digitaltwins_icone.png";
import { SelectedPage } from "@/components/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

type ProjectItemConfig = {
  nameKey: string;
  path: string;
};

const projectsList: ProjectItemConfig[] = [
  { nameKey: "navbarRepository.projects.santaClara", path: "/repository/santa-clara" },
  { nameKey: "navbarRepository.projects.azulejo", path: "/repository/azulejo" },
  { nameKey: "navbarRepository.projects.escoural", path: "/repository/gruta-escoural" },
  { nameKey: "navbarRepository.projects.hbimResearch", path: "/repository/hbim-pesquisa" },
  { nameKey: "navbarRepository.projects.hbimSegmentation", path: "/repository/hbim-segmentacao" },
  { nameKey: "navbarRepository.projects.milreuReconstruction", path: "/repository/app-milreu" },
  { nameKey: "navbarRepository.projects.sensorPlatform", path: "/repository/plataforma_iot" },
  { nameKey: "navbarRepository.projects.sensorFirmware", path: "/repository/firmware_iot" },
  { nameKey: "navbarRepository.projects.visitorFlow", path: "/repository/fluxo_visitantes" },
  { nameKey: "navbarRepository.projects.modelGallery", path: "/repository/galeria-modelos" },
];

const NavbarRepository = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/repository";

  const navbarBackground = "bg-primary-100 drop-shadow";

  // Use resolvedLanguage to get the active fallback language ('pt' or 'en')
  const currentLang = i18n.resolvedLanguage || i18n.language;
  const isPortuguese = currentLang.startsWith("pt");

  const toggleLanguage = () => {
    // Toggles between 'pt' and 'en'
    const nextLanguage = isPortuguese ? "en" : "pt";
    i18n.changeLanguage(nextLanguage);
  };

  const handleProjectNavigation = (path: string) => {
    setSelectedPage(SelectedPage.OurProject);
    navigate(path);
    setIsProjectsOpen(false);
    setIsMenuToggled(false);
  };

  const renderLanguageToggle = () => (
    <button
      onClick={toggleLanguage}
      className="rounded-lg bg-secondary-500 px-3 py-1 text-xs font-bold uppercase text-white hover:bg-opacity-80 transition cursor-pointer"
    >
      {/* Shows EN button when site is in PT, and PT button when site is in EN */}
      {isPortuguese ? "EN" : "PT"}
    </button>
  );

  const renderLinks = () => (
    <>
      <AnchorLink
        className={`${selectedPage === SelectedPage.Home ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.Home}`}
        onClick={() => setSelectedPage(SelectedPage.Home)}
      >
        {t("navbarRepository.home")}
      </AnchorLink>
      <AnchorLink
        className={`${selectedPage === SelectedPage.OurProject ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.OurProject}`}
        onClick={() => setSelectedPage(SelectedPage.OurProject)}
      >
        {t("navbarRepository.projectsButton")}
      </AnchorLink>
    </>
  );

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            
            <motion.button
              onClick={() => navigate("/repository")}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-3 md:gap-4 p-0 border-none bg-transparent cursor-pointer"
            >
              <img 
                src={Logo_navbar} 
                alt="Digital Twins Icon" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
              <span className="font-montserrat font-bold text-white uppercase text-3xl sm:text-xl whitespace-nowrap">
                DT4SST-CH
              </span>
            </motion.button>

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm font-bold`}>
                  {isHomePage ? renderLinks() : null}
                </div>
                
                <div className="flex items-center gap-4">
                  {/* LANGUAGE TOGGLE BUTTON */}
                  {renderLanguageToggle()}

                  {/* PROJECTS DROPDOWN */}
                  <div className="relative">
                    <AnimatePresence>
                      {isProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          onMouseLeave={() => setIsProjectsOpen(false)}
                          className="absolute right-0 mt-2 w-56 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black ring-opacity-5"
                        >
                          {projectsList.map((project) => (
                            <button
                              key={project.path}
                              onClick={() => handleProjectNavigation(project.path)}
                              className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-primary-100 hover:text-primary-500 transition"
                            >
                              {t(project.nameKey)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-between items-center px-8 pt-10 pb-6">
            {/* MOBILE LANGUAGE TOGGLE BUTTON */}
            {renderLanguageToggle()}

            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[15%] flex flex-col gap-8 text-2xl font-bold">
            {isHomePage && renderLinks()}
            
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                {t("navbarRepository.mobileProjectsHeading")}
              </p>
              {projectsList.map((project) => (
                <button
                  key={project.path}
                  onClick={() => handleProjectNavigation(project.path)}
                  className="text-left text-sm text-primary-500 hover:text-secondary-500"
                >
                  {t(project.nameKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarRepository;