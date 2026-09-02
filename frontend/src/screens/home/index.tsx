import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import NOVA from "@/assets/NOVA.png";
import UEVORA from "@/assets/logotipos/UEvora cor.png";
import PCultural from "@/assets/logotipos/PCultural_L250px.png";
import MMP from "@/assets/logotipos/Museus_monumentos_250px.png";
import PRR from "@/assets/logotipos/prr_L250px.png";
import Republica from "@/assets/logotipos/Republica_L250px.png";
import EU from "@/assets/logotipos/EU_L250px.png";
import ARTE from "@/assets/arte.png";
import ICON from "@/assets/digitaltwins_icone.png";
import BackgroundImage from "@/assets/background.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const partners = [
    { src: NOVA, alt: "NOVA FCT" },
    { src: UEVORA, alt: "UEVORA" },
    { src: PCultural, alt: "Património Cultural" },
    { src: MMP, alt: "Museus e Monumentos de Portugal" },
    { src: ARTE, alt: "ARTE" },
    { src: PRR, alt: "PRR" },
    { src: Republica, alt: "República Portuguesa" },
    { src: EU, alt: "União Europeia" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between min-h-[90svh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900/70 z-0" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col flex-grow pt-24 md:pt-32 pb-8 w-5/6 mx-auto">
        {/* CENTERED CONTENT */}
        <div className="flex-grow flex items-center justify-start">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            <div className="relative">
              <span className="absolute -top-12 -left-1 z-[-1] hidden md:block font-montserrat text-7xl font-bold text-gray-100 opacity-10 uppercase">
                {t("home.title")}
              </span>
              <h1 className="flex flex-col gap-2 font-montserrat font-bold text-white">
                <span className="text-4xl sm:text-5xl md:text-7xl uppercase">
                  {t("home.title")}
                </span>
                <span 
                  className="text-lg sm:text-xl md:text-3xl font-medium text-gray-200 leading-snug max-w-2xl [text-wrap:balance]"
                >
                  {t("home.subtitle")}
                </span>
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PARTNERS BAR */}
      <div className="relative z-10 w-full bg-primary-100 py-6 border-t border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="mx-auto w-5/6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-16 bg-white/95 rounded-lg shadow-sm p-2 flex items-center justify-center hover:bg-white transition-colors"
              >
                <img alt={partner.alt} src={partner.src} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;