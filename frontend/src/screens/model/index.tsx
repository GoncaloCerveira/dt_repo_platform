import ActionButton from "@/components/ActionButton";
import NOVAWHITE from "@/assets/NOVA_WHITE.png";
import CAMPUS from "@/assets/campusfct.png";
import EVORA from "@/assets/logo_vertical_branco.png";
import CAMPUSEV from "@/assets/campus_evora.jpg";
import IP from "@/assets/Logo_PatrimonioCultural.png";
import CAMPUSIP from "@/assets/DSC_1026_Most-Salzedas-scaled.jpg";
import MMP from "@/assets/Logo_MMP.png";
import CAMPUSMMP from "@/assets/Museus-e-monumentos.jpg";
import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import { UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type PartnerCardProps = {
  img: string;
  bgImg?: string;
  name: string;
  subName?: string;
  isCoordinator?: boolean;
};

const PartnerCard = ({ img, bgImg, name, subName, isCoordinator }: PartnerCardProps) => (
  <motion.div 
    className="bg-white px-4 py-3 shadow-xl border border-gray-100 flex flex-col items-center h-full rounded-sm"
    whileHover={{ scale: 1.05, rotateZ: isCoordinator ? 0 : 2 }}
    transition={{ type: "spring", stiffness: 300 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="relative w-full h-auto aspect-video overflow-hidden border border-gray-100 mb-3 bg-gray-900 rounded-sm">
      {bgImg && (
        <img 
          src={bgImg} 
          alt={`Localização: ${name}`} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
        <img 
          src={img} 
          alt={`Logo ${name}`} 
          className="w-auto h-auto max-h-[65%] max-w-[80%] object-contain drop-shadow-2xl" 
        />
      </div>
    </div>
    
    <div className="w-full px-1 flex-grow text-center flex flex-col justify-center font-montserrat tracking-tight leading-tight">
      {isCoordinator && (
        <p className="text-[10px] font-bold uppercase text-primary-500 mb-0.5"></p>
      )}
      <p className="text-sm font-semibold text-gray-900">
        {name}
        {subName && <span className="block font-normal mt-0.5">{subName}</span>}
      </p>
    </div>
  </motion.div>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Model = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const partners = [
    { img: NOVAWHITE, bgImg: CAMPUS, name: "Universidade Nova de Lisboa", isCoordinator: true },
    { img: EVORA, bgImg: CAMPUSEV, name: "Universidade de Évora" },
    { img: IP, bgImg: CAMPUSIP, name: "Património Cultural, I.P." },
    { img: MMP, bgImg: CAMPUSMMP, name: "Museus e Monumentos", subName: "de Portugal, E.P.E." },
  ];

  const handleAboutUsClick = () => {
    window.scrollTo(0, 0);
    navigate("/sobre-nos");
  };

  return (
    <section id="ourproject" className="w-full bg-gray-20 pt-12 md:pt-14">
      <motion.div
        className="mx-auto w-5/6 pb-24 md:pb-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Model)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          className="md:w-full mb-16 md:mb-18 mt-12 md:mt-2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-primary-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
              {t("model.challengeSubheading")}
            </p>
          </div>
          <HText>{t("model.title")}</HText>
          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            {t("model.paragraph1Before")}{" "}
            <span className="font-bold text-primary-500">{t("model.projectName")}</span>{" "}
            {t("model.paragraph1After")}
          </p>
          <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            {t("model.paragraph2")}
          </p>
        </motion.div>

        <div className="w-full">
          <div className="flex items-center gap-5 mb-8 md:mb-10 pb-5 border-b border-gray-300">
            <UserGroupIcon className="h-12 w-12 text-primary-500 flex-shrink-0" />
            <HText>{t("model.whoWeAreTitle")}</HText>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-8 items-stretch"
            variants={container}
          >
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleAboutUsClick}
              aria-label={t("model.moreInfoButton")}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-8 bg-gray-900 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 shadow-md text-sm font-montserrat"
            >
              {t("model.moreInfoButton")}
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-primary-100 py-16 border-t"/>
    </section>
  );
};

export default Model;