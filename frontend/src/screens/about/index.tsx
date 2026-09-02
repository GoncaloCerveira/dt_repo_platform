import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import { 
  BuildingLibraryIcon, 
  UserIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline"; 
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// LOGOs
import NOVA from "@/assets/NOVA.png";
import UEVORA from "@/assets/logotipos/UEvora cor.png";
import PCultural from "@/assets/logotipos/PCultural_L250px.png";
import MMP from "@/assets/logotipos/Museus_monumentos_250px.png";
import PRR from "@/assets/logotipos/prr_L250px.png";
import Republica from "@/assets/logotipos/Republica_L250px.png";
import EU from "@/assets/logotipos/EU_L250px.png";
import ARTE from "@/assets/arte.png";

import NOVALINCS from "@/assets/logotipos/novalincs_L250px.png";
import VICARTE from "@/assets/logotipos/vicarte_A150px.png";

import IN2PAST from "@/assets/outros/IN2PAST_logo_horizontal_colour.png";
import HERCULES from "@/assets/outros/hercules cor.png";
import ARTERIA from "@/assets/outros/logo-completo-preto.svg";
import ICT from "@/assets/outros/ICT_Pt-300x131.png";
import CREATE from "@/assets/outros/createcor1-1024x349.jpg";
import DATA01 from "@/assets/outros/DATA 01-1.png";

const partnerLogos = [
  { id: 1, name: "Universidade NOVA de Lisboa", img: NOVA, link: "https://www.unl.pt/" },
  { id: 2, name: "Universidade de Évora", img: UEVORA, link: "https://www.uevora.pt/" },
  { id: 3, name: "Património Cultural", img: PCultural, link: "https://www.patrimoniocultural.gov.pt/" },
  { id: 4, name: "Museus e Monumentos de Portugal", img: MMP, link: "https://www.museusemonumentos.pt/" },
  { id: 5, name: "ARTE", img: ARTE, link: "https://www.arte.gov.pt/" },
  { id: 6, name: "PRR", img: PRR, link: "https://recuperarportugal.gov.pt/" },
  { id: 7, name: "República Portuguesa Cultura", img: Republica },
  { id: 16, name: "União Europeia", img: EU, link: "https://european-union.europa.eu/index_pt" },
];

const labLogos = [
  { id: 8, name: "NOVA LINCS", img: NOVALINCS, link: "https://nova-lincs.di.fct.unl.pt/" },
  { id: 9, name: "Universidade de Évora", img: VICARTE, link: "https://vicarte.org/" },
];

const otherLogos = [
  { id: 10, name: "IN2PAST - Laboratório Associado", img: IN2PAST, link: "https://in2past.org/" },
  { id: 11, name: "Laboratório HERCULES", img: HERCULES, link: "https://www.hercules.uevora.pt/" },
  { id: 12, name: "ARTERIA_LAB", img: ARTERIA, link: "https://arterialab.uevora.pt/" },
  { id: 13, name: "ICT - Instituto de Ciência da Terra", img: ICT, link: "https://www.icterra.pt/" },
  { id: 14, name: "CREATE", img: CREATE, link: "https://www.create.uevora.pt/" },
  { id: 15, name: "DATA/01", img: DATA01, link: "https://www.data01.it/index.html" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
};

const MemberCard = ({ name, role }: { name: string; role: string }) => (
  <motion.div 
    variants={itemVariant}
    className="bg-white px-4 py-3.5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-500/30 transition-all duration-300 flex items-center gap-3.5 group relative overflow-hidden h-full min-h-[72px]"
  >
    <div className="absolute top-0 left-0 w-full h-[3px] bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    <div className="bg-gray-50 p-2.5 rounded-xl text-gray-600 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors duration-300 flex-shrink-0">
      <UserIcon className="h-5 w-5" />
    </div>
    <div className="flex flex-col justify-center min-w-0 flex-1 my-auto">
      <p className="text-sm md:text-base font-bold text-gray-800 font-montserrat group-hover:text-primary-500 transition-colors duration-200 leading-tight">
        {name}
      </p>
      {role ? (
        <p className="text-[10px] md:text-xs font-bold uppercase text-primary-500 mt-1.5 tracking-wider bg-primary-50 px-2 py-0.5 rounded-md w-fit max-w-full leading-snug break-words">
          {role}
        </p>
      ) : null}
    </div>
  </motion.div>
);

const LogoCard = ({ name, img, link }: { name: string; img: string; link?: string }) => {
  const cardClass = "h-24 w-full flex items-center justify-center p-5 bg-white border border-gray-100/80 rounded-xl shadow-sm hover:shadow-lg hover:border-primary-500/20 transition-all duration-300 group relative";
  
  const content = (
    <>
      <img
        src={img}
        alt={`Logótipo: ${name}`}
        loading="lazy"
        className="max-h-full max-w-full object-contain filter group-hover:filter-none group-hover:opacity-100 transition-all duration-300 ease-in-out"
      />
      {link && (
        <ArrowTopRightOnSquareIcon className="absolute top-2 right-2 h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-primary-500 transition-all duration-200" />
      )}
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariant}
        whileHover={{ scale: 1.03, y: -4 }}
        className={`${cardClass} cursor-pointer`}
        title={`Visitar website de ${name}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={itemVariant}
      whileHover={{ scale: 1.03, y: -4 }}
      className={cardClass}
    >
      {content}
    </motion.div>
  );
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutDetailed = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const novaTeam = [
    { name: "Nuno Correia", role: t("aboutDetailed.roles.pi") },
    { name: "Márcia Vilarigues", role: "" },
    { name: "Carla Machado", role: "" },
    { name: "Ricardo Castro", role: "" }
  ];

  const uevoraTeam = [
    { name: "António Candeias", role: "" },
    { name: "Teresa Reis", role: "" }
  ];

  const pcTeam = [
    { name: "Luís Sebastian", role: "" },
  ];

  const mmpTeam = [
    { name: "Matthias Tissot", role: "" },
  ];

  return (
    <section id="about-detailed" className="w-full bg-gradient-to-b from-gray-20 to-gray-20 pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto pb-24 md:pb-32"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={container}
      >
        {/* PROJECT DESCRIPTION */}
        <motion.div
          className="mb-20 md:mb-20"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-primary-500 rounded-full" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary-500">
              {t("aboutDetailed.subheading")}
            </p>
          </div>
          <HText>{t("aboutDetailed.title")}</HText>
          
          <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-gray-600 font-normal">
            <p className="text-lg md:text-xl text-gray-800 font-medium border-l-4 border-primary-500 pl-4 md:pl-6 my-6">
              {t("aboutDetailed.heroText")}
            </p>
            
            <p className="text-gray-600 pl-1">
              {t("aboutDetailed.objectiveText")}
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-gray-800">{t("aboutDetailed.conservationTitle")}</h3>
              <p>{t("aboutDetailed.conservationParagraph1")}</p>
              <p>{t("aboutDetailed.conservationParagraph2")}</p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-gray-800">{t("aboutDetailed.applicationTitle")}</h3>
              <p>{t("aboutDetailed.applicationIntro")}</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{t("aboutDetailed.generalScopeLabel")}:</strong> {t("aboutDetailed.generalScopeText")}
                </li>
                <li>
                  <strong>{t("aboutDetailed.advancedScopeLabel")}:</strong> {t("aboutDetailed.advancedScopeText")}
                </li>
              </ul>

              <p>{t("aboutDetailed.whitePaperText")}</p>
              
              <p className="italic border-l-2 border-gray-300 pl-4 mt-4">
                {t("aboutDetailed.ecosystemQuote")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEAMS & PARTNERS */}
        <div className="w-full space-y-20 md:space-y-24">
          <div className="space-y-12">
            <div className="border-b border-gray-200 pb-2">
              <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">
                {t("aboutDetailed.consortiumTitle")}
              </span>
            </div>

            {/* NOVA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  Universidade NOVA de Lisboa
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {novaTeam.map((member, idx) => <MemberCard key={idx} name={member.name} role={member.role} />)}
              </div>
            </div>

            {/* EVORA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  Universidade de Évora
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uevoraTeam.map((member, idx) => <MemberCard key={idx} name={member.name} role={member.role} />)}
              </div>
            </div>

            {/* Património Cultural, I.P. */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BuildingLibraryIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  Património Cultural, I.P.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pcTeam.map((member, idx) => <MemberCard key={idx} name={member.name} role={member.role} />)}
              </div>
            </div>

            {/* Museus e Monumentos */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BuildingLibraryIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  Museus e Monumentos de Portugal, E.P.E.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mmpTeam.map((member, idx) => <MemberCard key={idx} name={member.name} role={member.role} />)}
              </div>
            </div>
          </div>

          {/* LOGO GRIDS SECTION */}
          <div className="space-y-16 pt-8 border-t border-gray-100">
            {/* Instituições */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <SparklesIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  {t("aboutDetailed.institutionsTitle")}
                </h3>
              </div>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" variants={container}>
                {partnerLogos.map((partner) => <LogoCard key={partner.id} name={partner.name} img={partner.img} link={partner.link} />)}
              </motion.div>
            </div>

            {/* Unidades de Investigação e Outros Parceiros */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BeakerIcon className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight">
                  {t("aboutDetailed.researchUnitsTitle")}
                </h3>
              </div>
              
              {/* Lab Logos */}
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" variants={container}>
                {labLogos.map((partner) => <LogoCard key={partner.id} name={partner.name} img={partner.img} link={partner.link} />)}
              </motion.div>
              
              {/* Separator line between categories */}
              <hr className="my-10 border-gray-200" />

              {/* Other Logos */}
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" variants={container}>
                {otherLogos.map((partner) => <LogoCard key={partner.id} name={partner.name} img={partner.img} link={partner.link} />)}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutDetailed;