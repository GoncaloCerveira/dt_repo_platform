import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/types";
import ActionButton from "@/components/ActionButton";
import NOVA from "@/assets/NOVA.png";
import Logo_MMP from "@/assets/Logo_MMP.png";
import Logo_PatrimonioCultural from "@/assets/Logo_PatrimonioCultural.png";
import Logo_RepublicaPortuguesaCultura from "@/assets/Logo_RepublicaPortuguesaCultura.png";
import BackgroundImage from "@/assets/background.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between gap-10 min-h-[500px] h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-800/80 z-0" />

      {/* MAIN HEADER CONTAINER */}
      <motion.div
        className="relative z-10 mx-auto w-5/6 pt-24 md:pt-32 flex-grow flex items-center justify-start"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* TEXT CONTENT */}
        <div className="z-10 md:basis-3/5">
          {/* HEADINGS */}
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
              {/* Background Shadow Text */}
              <span 
                className="absolute uppercase -top-10 -left-1 z-[-1] hidden md:block 
                          font-montserrat text-5xl sm:text-7xl font-bold tracking-tighter 
                          text-gray-100 opacity-20 select-none">
                Gémeos Digitais
              </span>

              <h1 className="flex flex-col gap-1 font-montserrat font-bold tracking-tighter">
                <span className="block whitespace-nowrap uppercase text-5xl sm:text-7xl text-gray-100 leading-none">
                  Gémeos Digitais
                </span>

                <span className="text-2xl sm:text-4xl text-gray-100 leading-[1.2] max-w-[700px]">
                  Para Turismo Inteligente, Sustentável e Preservação do Património Cultural
                </span>
              </h1>
            </div>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-6 flex items-center gap-6" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          </motion.div>
        </div>
      </motion.div>

      {/* Partnerships Bar */}
      {isAboveMediumScreens && (
        <div className="relative z-10 mt-auto h-[130px] w-full bg-primary-100/95 py-6 backdrop-blur-sm border-t border-primary-300">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-5">
              <img alt="nova" className="w-40 h-auto object-contain" src={NOVA} />
              <img alt="mmp" className="w-44 h-auto object-contain" src={Logo_MMP} />
              <img alt="patrimoniocultural" className="w-40 h-auto object-contain" src={Logo_PatrimonioCultural} />
              <img alt="republicaportuguesacultura" className="w-40 h-auto object-contain" src={Logo_RepublicaPortuguesaCultura} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;