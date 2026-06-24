import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo_navbar from "@/assets/digitaltwins_icone.png";
import { SelectedPage } from "@/components/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const projectsList = [
  { name: "Santa Clara-a-Velha", path: "/repository/santa-clara" },
  { name: "Museu Nacional do Azulejo", path: "/repository/azulejo" },
  { name: "Gruta do Escoural", path: "/repository/gruta-escoural" },
  { name: "Pesquisa HBIM", path: "/repository/hbim-pesquisa" },
  { name: "Segmentação HBIM", path: "/repository/hbim-segmentacao" },
  { name: "Reconstrução Milreu", path: "/repository/app-milreu" },
  { name: "Plataforma Sensores", path: "/repository/plataforma_iot" },
  { name: "Firmware Sensores", path: "/repository/firmware_iot" },
  { name: "Fluxo de Visitantes - Jerónimos", path: "/repository/fluxo_visitantes" },
];

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/repository";

  const navbarBackground = "bg-primary-100 drop-shadow";

  const handleProjectNavigation = (path: string) => {
    setSelectedPage(SelectedPage.OurProject);
    navigate(path);
    setIsProjectsOpen(false);
    setIsMenuToggled(false);
  };

  const renderLinks = () => (
    <>
      <AnchorLink
        className={`${selectedPage === SelectedPage.Home ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.Home}`}
        onClick={() => setSelectedPage(SelectedPage.Home)}
      >
        Início
      </AnchorLink>
      <AnchorLink
        className={`${selectedPage === SelectedPage.OurProject ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.OurProject}`}
        onClick={() => setSelectedPage(SelectedPage.OurProject)}
      >
        Projetos
      </AnchorLink>
    </>
  );

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            
            <motion.button
              onClick={() => navigate("/")}
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
                
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="flex text-white items-center gap-2 rounded-md bg-gray-900 px-10 py-2 font-bold hover:bg-primary-500 hover:text-white transition duration-200"
                  >
                    Projetos
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                  </button>

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
                            {project.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[15%] flex flex-col gap-10 text-2xl font-bold">
            {isHomePage && renderLinks()}
            
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-widest text-gray-400">Nossos Projetos</p>
              {projectsList.map((project) => (
                <button
                  key={project.path}
                  onClick={() => handleProjectNavigation(project.path)}
                  className="text-left text-primary-500 hover:text-secondary-500"
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;