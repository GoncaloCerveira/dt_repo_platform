import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import {
  BuildingLibraryIcon,
  PhotoIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Board from "./Board";

import MJ from "@/assets/pilot_models/mj.jpeg";
import MA from "@/assets/pilot_models/ma.jpg";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";
import RRM from "@/assets/pilot_models/rrm.jpg";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";

const boards = [
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MSCV,
    title: "Mosteiro de Santa Clara-a-Velha",
    description:
      "Representa um momento de experimentação do estilo gótico no país.",
    link: "/santa-clara",
    tag: "Piloto 01",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: MNAZ,
    title: "Museu Nacional do Azulejo",
    description:
      "O Museu Nacional do Azulejo, em Lisboa, é um dos mais importantes museums de Portugal, pela sua colecção singular, dedicada ao azulejo.",
    link: "/azulejo",
    tag: "Piloto 02",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MA,
    title: "Real Mosteiro de Santa Maria de Alcobaça",
    description:
      "É a primeira obra plenamente gótica erguida em solo português, tendo sido começada a sua construção em 1178 pelos monges da Ordem de Cister.",
    link: "/alcobaca",
    tag: "Piloto 03",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: RRM,
    title: "Ruínas Romanas de Milreu",
    description:
      "As Ruínas romanas de Milreu ou Ruínas de Estói são um importante conjunto arqueológico em Estói, no município de Faro, em Portugal.",
    link: "/ruinas_milreu",
    tag: "Piloto 04",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MJ,
    title: "Mosteiro dos Jerónimos",
    description:
      "Situa-se na freguesia de Belém, na cidade e concelho de Lisboa.",
    link: "/mosteiro_jeronimos",
    tag: "Piloto 05",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: GE,
    title: "Gruta do Escoural",
    description:
      "Está classificada como Monumento Nacional desde 1963.",
    link: "/gruta_escoural",
    tag: "Piloto 06",
    accent: "from-violet-500 to-fuchsia-500",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProjectSectionPublic = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();

  const handleAllLocationsClick = () => {
    window.scrollTo(0, 0);
    navigate("/outros-sitios");
  };

  return (
    <section
      id="ourprojectpublic"
      className="mx-auto bg-gray-20 min-h-[400px] py-20 md:pt-14"
    >
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() =>
          setSelectedPage(SelectedPage.OUrProjectPublic)
        }
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-primary-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
              Projetos Piloto e Mais
            </p>
          </div>

          <HText>MAIS DO QUE APENAS UM PROJETO</HText>

          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            Os seis locais emblemáticos escolhidos como locais-piloto são
            Santa Clara-a-Velha, as Ruínas Romanas de Milreu, o Mosteiro dos
            Jerónimos, o Mosteiro de Alcobaça, o Museu Nacional do Azulejo e
            a Gruta do Escoural. Mas não ficámos por aqui. O projeto continua
            a expandir-se, mapeando e integrando uma rede de património muito
            mais vasta.
          </p>
        </motion.div>

        {/* 2x3 GRID */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {boards.map((board, index) => (
            <Board
              key={`${board.title}-${index}`}
              index={index + 1}
              {...board}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* CTA CARD */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full md:w-1/3 bg-white p-8 rounded-2xl border border-gray-200 shadow-md text-center hover:border-primary-500 transition-colors"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Descubra Todos os Locais do Território Inteligente
            </h3>

            <p className="text-gray-600 mb-6">
              Explore o nosso catálogo completo de património mapeado.
            </p>

            <button
              onClick={handleAllLocationsClick}
              className="group flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-900 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300"
            >
              Ver todos os locais

              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-primary-100 py-16 border-t mt-20" />
    </section>
  );
};

export default OurProjectSectionPublic;