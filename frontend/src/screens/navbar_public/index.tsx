import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo_navbar from "@/assets/Logo_navbar.png";
import { SelectedPage } from "@/components/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const projectsList = [
  { name: "", path: "/santa-clara" },
];

const NavbarPublic = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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
        Sobre
      </AnchorLink>
      <AnchorLink
        className={`${selectedPage === SelectedPage.OUrProjectPublic ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.OUrProjectPublic}`}
        onClick={() => setSelectedPage(SelectedPage.OUrProjectPublic)}
      >
        Projetos Piloto
      </AnchorLink>
      <AnchorLink
        className={`${selectedPage === SelectedPage.OurTechonology ? "text-primary-500" : ""} hover:text-primary-500 transition`}
        href={`#${SelectedPage.OurTechonology}`}
        onClick={() => setSelectedPage(SelectedPage.OurTechonology)}
      >
        Tecnologia
      </AnchorLink>
    </>
  );

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            
            <button onClick={() => navigate("/")}>
              <img alt="logo" className="w-44 h-auto object-contain cursor-pointer" src={Logo_navbar} />
            </button>

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm font-bold`}>
                  {isHomePage ? renderLinks() : null}
                </div>
                
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

export default NavbarPublic;