import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import {
  BuildingLibraryIcon,
  PhotoIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Board from "./Board";

import MJ from "@/assets/pilot_models/mj.jpeg";
import MA from "@/assets/pilot_models/ma.jpg";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";
import RRM from "@/assets/pilot_models/rrm.jpg";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";

type BoardConfig = {
  icon: JSX.Element;
  image: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  tagKey: string;
  accent: string;
};

const boards: BoardConfig[] = [
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MSCV,
    titleKey: "ourProjectPublic.boards.mscv.title",
    descriptionKey: "ourProjectPublic.boards.mscv.description",
    link: "/santa-clara",
    tagKey: "ourProjectPublic.boards.tags.p1",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: MNAZ,
    titleKey: "ourProjectPublic.boards.mnaz.title",
    descriptionKey: "ourProjectPublic.boards.mnaz.description",
    link: "/azulejo",
    tagKey: "ourProjectPublic.boards.tags.p2",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MA,
    titleKey: "ourProjectPublic.boards.ma.title",
    descriptionKey: "ourProjectPublic.boards.ma.description",
    link: "/alcobaca",
    tagKey: "ourProjectPublic.boards.tags.p3",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: RRM,
    titleKey: "ourProjectPublic.boards.rrm.title",
    descriptionKey: "ourProjectPublic.boards.rrm.description",
    link: "/ruinas_milreu",
    tagKey: "ourProjectPublic.boards.tags.p4",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: <BuildingLibraryIcon className="h-5 w-5" />,
    image: MJ,
    titleKey: "ourProjectPublic.boards.mj.title",
    descriptionKey: "ourProjectPublic.boards.mj.description",
    link: "/mosteiro_jeronimos",
    tagKey: "ourProjectPublic.boards.tags.p5",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: <PhotoIcon className="h-5 w-5" />,
    image: GE,
    titleKey: "ourProjectPublic.boards.ge.title",
    descriptionKey: "ourProjectPublic.boards.ge.description",
    link: "/gruta_escoural",
    tagKey: "ourProjectPublic.boards.tags.p6",
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
  const { t } = useTranslation();

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
              {t("ourProjectPublic.sectionTag")}
            </p>
          </div>

          <HText>{t("ourProjectPublic.title")}</HText>

          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            {t("ourProjectPublic.description")}
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
              key={`${board.titleKey}-${index}`}
              index={index + 1}
              icon={board.icon}
              image={board.image}
              title={t(board.titleKey)}
              description={t(board.descriptionKey)}
              link={board.link}
              tag={t(board.tagKey)}
              accent={board.accent}
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
              {t("ourProjectPublic.ctaTitle")}
            </h3>

            <p className="text-gray-600 mb-6">
              {t("ourProjectPublic.ctaDescription")}
            </p>

            <button
              onClick={handleAllLocationsClick}
              className="group flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-900 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300"
            >
              {t("ourProjectPublic.ctaButton")}

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