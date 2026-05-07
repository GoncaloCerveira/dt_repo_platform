import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/types";
import NOVA from "@/assets/NOVA.png";
import PCultural from "@/assets/logotipos/PCultural_L250px.png"
import MMP from "@/assets/logotipos/Museus_monumentos_250px.png";
import PRR from "@/assets/logotipos/prr_L250px.png";
import Republica from "@/assets/logotipos/Republica_L250px.png";
import EU from "@/assets/logotipos/EU_L250px.png";
import ARTE from "@/assets/arte.png";
import BackgroundImage from "@/assets/background.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  // Lista de parceiros para mapeamento limpo
  const partners = [
    { src: NOVA, alt: "NOVA FCT" },
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
      className="relative flex flex-col justify-between min-h-[500px] h-[85vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900/70 z-0" />

      <motion.div
        className="relative z-10 mx-auto w-5/6 flex-grow flex items-center justify-start pt-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <span className="absolute uppercase -top-12 -left-1 z-[-1] hidden md:block 
                                font-montserrat text-7xl font-bold tracking-tighter 
                                text-gray-100 opacity-10 select-none">
                Gémeos Digitais
              </span>

              <h1 className="flex flex-col gap-2 font-montserrat font-bold tracking-tighter text-white">
                <span className="block uppercase text-5xl sm:text-7xl leading-tight">
                  Gémeos Digitais
                </span>
                <span className="text-xl sm:text-3xl font-medium leading-relaxed max-w-[800px] text-gray-200">
                  Para Turismo Inteligente, Sustentável e Preservação do Património Cultural
                </span>
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="relative z-10 w-full bg-primary-100 py-6 border-t border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          <div className="mx-auto w-4/6">
            <div className="flex items-center justify-between gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex-1 h-16 bg-white/95 rounded-lg shadow-sm p-2 flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <img
                    alt={partner.alt}
                    src={partner.src}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;