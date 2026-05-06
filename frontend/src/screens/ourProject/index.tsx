import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import {
  BuildingLibraryIcon,
  PhotoIcon,
  Square3Stack3DIcon,
  CloudIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Board from "./Board";
import SegImg from "@/assets/segmentation.png"

const boards = [
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: "/assets/santa-clara.jpg",
    title: "Mosteiro de Santa Clara-a-Velha",
    description: "Exploração do gémeo digital e monitorização do Mosteiro de Santa Clara em Coimbra.",
    link: "/santa-clara",
    tag: "Piloto 01",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: "/assets/azulejo.jpg",
    title: "Museu Nacional do Azulejo",
    description: "Digitalização e preservação virtual das coleções únicas de azulejaria portuguesa.",
    link: "/azulejo",
    tag: "Piloto 02",
    accent: "from-indigo-500 to-purple-500"
  },
  {
    icon: <CloudIcon className="h-5 w-5" />,
    image: "/assets/escoural.jpg",
    title: "Gruta do Escoural",
    description: "Preservação digital de arte rupestre e monitorização ambiental em ambiente cavernoso.",
    link: "/gruta-escoural",
    tag: "Piloto 03",
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: <MagnifyingGlassIcon className="h-5 w-5" />,
    image: "/assets/hbim-search.jpg",
    title: "HBIM Pesquisa",
    description: "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
    link: "/hbim-pesquisa",
    tag: "Investigação",
    accent: "from-orange-500 to-amber-500"
  },
  {
    icon: <Square3Stack3DIcon className="h-5 w-5" />,
    image: SegImg,
    title: "HBIM Segmentação",
    description: "Segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
    link: "/hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500"
  },
  {
    icon: <DevicePhoneMobileIcon className="h-5 w-5" />,
    image: "/assets/milreu.jpg",
    title: "App Milreu",
    description: "Aplicação móvel interativa para as Ruínas Romanas de Milreu no Algarve.",
    link: "/app-milreu",
    tag: "Mobile",
    accent: "from-violet-500 to-fuchsia-500"
  }
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

const OurProjectSection = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourproject"
      className="mx-auto bg-gray-20 min-h-[400px] py-20 md:pt-14"
    >
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProject)}
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
              Aplicações & Tecnologia
            </p>
          </div>
          <HText>MAIS DO QUE APENAS UM PROJETO</HText>
          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            Aqui encontra se todos as aplicações desenvolvidas, até ao momento,
            dentro deste projeto, cada página apresenta conteudo importante
            juntamente com a sua documentação
          </p>
        </motion.div>

        {/* 2×3 GRID */}
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
      </motion.div>
    </section>
  );
};

export default OurProjectSection;