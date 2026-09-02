import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import {
  BuildingLibraryIcon,
  PhotoIcon,
  Square3Stack3DIcon,
  CloudIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  LinkIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  GlobeAltIcon,
  UsersIcon,
  CubeIcon,
  HomeModernIcon,
  QrCodeIcon
} from "@heroicons/react/24/outline";

import MJ from "@/assets/pilot_models/mj.jpeg";
import MA from "@/assets/pilot_models/ma.jpg";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";
import RRM from "@/assets/pilot_models/rrm.jpg";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";
import HBIM from "@/assets/pilot_models/hbim.jpg";

type ProjectLink = {
  label: string;
  url: string;
  type: "web" | "doc" | "github";
};

type ProjectItem = {
  icon: JSX.Element;
  titleKey: string;
  descriptionKey: string; 
  detailedDescription?: string[]; 
  link?: string; 
  externalLinks?: ProjectLink[];
  tag: string;
  accent: string;
  statusKey: string;
};

type PilotSite = {
  nameKey: string;
  locationKey: string;
  url: string;
  typeKey: string;
  image: string;
};

const projectConfigs: ProjectItem[] = [
  {
    icon: <CloudIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p1.title",
    descriptionKey: "ourProject.items.p1.description",
    link: "/repository/plataforma_iot",
    tag: "Plataforma IoT",
    accent: "from-sky-500 to-blue-600",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <CpuChipIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p2.title",
    descriptionKey: "ourProject.items.p2.description",
    link: "/repository/firmware_iot",
    tag: "Firmware & Sensores",
    accent: "from-lime-500 to-green-600",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p3.title",
    descriptionKey: "ourProject.items.p3.description",
    link: "/repository/fluxo_visitantes",
    tag: "IoT & Edge Computing",
    accent: "from-orange-500 to-red-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <Square3Stack3DIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p4.title",
    descriptionKey: "ourProject.items.p4.description",
    link: "/repository/hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p5.title",
    descriptionKey: "ourProject.items.p5.description",
    link: "/repository/hbim-pesquisa",
    tag: "Processamento de Dados",
    accent: "from-orange-500 to-amber-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p6.title",
    descriptionKey: "ourProject.items.p6.description",
    link: "/repository/hbim-criacao",
    tag: "Processamento de Dados",
    accent: "from-red-500 to-rose-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p7.title",
    descriptionKey: "ourProject.items.p7.description",
    link: "/repository/santa-clara",
    tag: "Experiências Imersivas",
    accent: "from-blue-500 to-cyan-400",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <PhotoIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p8.title",
    descriptionKey: "ourProject.items.p8.description",
    link: "/repository/azulejo",
    tag: "XR Imersivo",
    accent: "from-indigo-500 to-purple-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <GlobeAltIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p9.title",
    descriptionKey: "ourProject.items.p9.description",
    link: "/repository/gruta-escoural",
    tag: "Experiências Imersivas",
    accent: "from-emerald-500 to-teal-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p10.title",
    descriptionKey: "ourProject.items.p10.description",
    link: "/repository/app-milreu",
    tag: "Experiências Imersivas",
    accent: "from-violet-500 to-fuchsia-500",
    statusKey: "ourProject.status.inDevelopment"
  },
  {
    icon: <QrCodeIcon className="h-6 w-6" />,
    titleKey: "ourProject.items.p11.title",
    descriptionKey: "ourProject.items.p11.description",
    link: "/repository/projetos-ux-ui",
    tag: "Experiências Imersivas",
    accent: "from-sky-500 to-blue-600",
    statusKey: "ourProject.status.inDevelopment"
  },
];

const pilotSites: PilotSite[] = [
  {
    nameKey: "ourProject.pilots.p1.name", locationKey: "ourProject.pilots.p1.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBX015awvslQ6kn1nsJhJQWAQ1KPIUfEDSgbF5khSLH0KM?e=g62dtN", typeKey: "ourProject.pilots.type",
    image: HBIM
  },
  {
    nameKey: "ourProject.pilots.p2.name", locationKey: "ourProject.pilots.p2.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDIdAUCOtcSTqdqta1ZVcoLATnlJkmgA6EBBYy3ey_YeUQ?e=nqxPap", typeKey: "ourProject.pilots.type",
    image: RRM
  },
  {
    nameKey: "ourProject.pilots.p3.name", locationKey: "ourProject.pilots.p3.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAbVzE51VFZSYedaaEHEOWYARQ2aNmNa1DSirSHDra9Oi8?e=CWTWhQ", typeKey: "ourProject.pilots.type",
    image: MJ
  },
  {
    nameKey: "ourProject.pilots.p4.name", locationKey: "ourProject.pilots.p4.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAXn_MLZSX4R6gs3KbYCj6zASmR3Rr9wCgjKwDvK0oZCcA?e=FheGbA", typeKey: "ourProject.pilots.type",
    image: MA
  },
  {
    nameKey: "ourProject.pilots.p5.name", locationKey: "ourProject.pilots.p5.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDU7u5kynUaT4ey0JwlAf9IASnmzHAiABgPfl0SCmAQR2I?e=Ov1kzA", typeKey: "ourProject.pilots.type",
    image: MNAZ
  },
  {
    nameKey: "ourProject.pilots.p6.name", locationKey: "ourProject.pilots.p6.location", url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAwWl8_sXl_R7NhXdsdOSY-Ab5fOeSVGEe3Rm2U1hxjKHw?e=ifsExS", typeKey: "ourProject.pilots.type",
    image: GE
  },
];

/* ================= SUB-COMPONENTS ================= */

const ProjectRow = ({ item }: { item: ProjectItem }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasInternalPage = !!item.link;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`group mb-3 bg-white border ${
        isExpanded ? "border-primary-500 shadow-lg" : "border-gray-200"
      } rounded-xl overflow-hidden transition-all duration-300`}
    >
      {/* MAIN HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6">
        <div className="flex items-start gap-4 md:basis-3/5">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.accent} text-white shadow-sm transition-transform group-hover:scale-105`}>
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                {t(item.titleKey)}
              </h3>
              <span className="hidden sm:block px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter border border-gray-200 text-gray-400 rounded">
                {t("ourProject.publicBadge")}
              </span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-1">{t(item.descriptionKey)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t("ourProject.statusLabel")}</span>
            <span className="text-xs font-bold text-amber-500">
              {t(item.statusKey)}
            </span>
          </div>

          {hasInternalPage ? (
            <button
              onClick={() => navigate(item.link!)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary-500 transition-all shadow-sm"
            >
              <DocumentTextIcon className="h-4 w-4" />
              {t("ourProject.knowMore")}
              <ChevronRightIcon className="h-3 w-3" />
            </button>
          ) : (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider border transition-all ${
                isExpanded 
                ? "bg-primary-50 border-primary-500 text-primary-500" 
                : "bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <CommandLineIcon className="h-4 w-4" />
              {isExpanded ? t("ourProject.close") : t("ourProject.details")}
              <ChevronDownIcon className={`h-3 w-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {/* PAINEL EXPANSÍVEL */}
      <AnimatePresence>
        {isExpanded && !hasInternalPage && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gray-50/50 border-t border-gray-100"
          >
            <div className="p-8 pt-6">
              <div className="grid md:grid-cols-3 gap-10">
                {/* COLUNA ESQUERDA: DESCRIÇÃO DETALHADA */}
                <div className="md:col-span-2 space-y-5">
                  <div className="flex items-center gap-2">
                    <CodeBracketSquareIcon className="h-5 w-5 text-primary-500" />
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{t("ourProject.projectSummary")}</h4>
                  </div>
                  <div className="space-y-4">
                    {item.detailedDescription?.map((paragraph, idx) => (
                      <p key={idx} className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-primary-500/30">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* COLUNA DIREITA: RECURSOS E LINKS */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary-500" />
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{t("ourProject.externalResources")}</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {item.externalLinks?.map((ext, idx) => (
                      <a
                        key={idx}
                        href={ext.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-500 hover:text-primary-500 transition-all group/link shadow-sm"
                      >
                        <span className="text-xs font-bold text-gray-700 group-hover/link:text-primary-500">
                          {ext.label}
                        </span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PilotModelSlider = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="group mt-20 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      {/* HEADER */}
      <div className="relative overflow-hidden border-b border-[#77945D]/20 bg-gradient-to-r from-[#77945D] via-[#88a36f] to-[#77945D] p-8">
        <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-white/90">
              <CubeIcon className="h-5 w-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                {t("ourProject.showcaseSub")}
              </span>
            </div>

            <h3 className="text-3xl font-black tracking-tight text-white">
              {t("ourProject.showcaseTitle")}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              {t("ourProject.showcaseDesc")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-6 rounded-xl border border-white/20 bg-white/10 px-10 py-2 backdrop-blur-md">
              <div className="text-center">
                <p className="text-2xl font-black text-white">
                  50+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {t("ourProject.resourcesCount")}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/repository/galeria-modelos")}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#77945D] shadow-lg transition-transform hover:scale-105"
            >
              {t("ourProject.viewFullGallery")}
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative bg-[#fafafa]">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto p-8 no-scrollbar">
          {pilotSites.map((site, idx) => (
            <motion.a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group/card relative flex-shrink-0 snap-center"
            >
              <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover/card:shadow-xl">
                <img
                  src={site.image}
                  alt={t(site.nameKey)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-[#77945D]/10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-6">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                    <Square3Stack3DIcon className="h-6 w-6 text-white" />
                  </div>

                  <div className="rounded-full border border-white/20 bg-black/20 p-2 backdrop-blur-sm">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {t(site.typeKey)}
                  </span>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    {t(site.locationKey)}
                  </p>

                  <h4 className="mt-2 text-2xl font-black leading-tight text-white">
                    {t(site.nameKey)}
                  </h4>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover/card:text-white">
                      {t("ourProject.exploreModel")}
                    </span>

                    <div className="flex items-center gap-2 text-white">
                      <span className="text-xs font-bold">{t("ourProject.openLabel")}</span>
                      <ChevronRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            onClick={() => navigate("/repository/galeria-modelos")}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group/card relative flex flex-shrink-0 snap-center cursor-pointer items-center justify-center"
          >
            <div className="relative flex aspect-[3/4] w-72 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#77945D]/40 bg-[#77945D]/5 p-8 transition-all duration-300 group-hover/card:border-[#77945D] group-hover/card:bg-[#77945D]/10">
              <div className="mb-4 rounded-full bg-[#77945D]/20 p-4 text-[#77945D] transition-transform duration-300 group-hover/card:scale-110">
                <CubeIcon className="h-10 w-10" />
              </div>
              
              <h4 className="text-center text-xl font-black text-gray-800">
                {t("ourProject.exploreFullGalleryCardTitle")}
              </h4>
              
              <p className="mt-3 text-center text-xs font-medium leading-relaxed text-gray-500">
                {t("ourProject.exploreFullGalleryCardDesc")}
              </p>
              
              <div className="mt-8 flex items-center gap-2 rounded-lg bg-[#77945D] px-5 py-3 text-white shadow-md transition-colors hover:bg-[#637d4d]">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {t("ourProject.seeMoreModels")}
                </span>
                <ChevronRightIcon className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProjectSection = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  return (
    <section id="ourproject" className="mx-auto bg-gray-20 py-12">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProject)}
        viewport={{ amount: 0.2, margin: "-10% 0px -60% 0px" }}
      >
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-gray-300 pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w-3/5"
          >
            <div className="mb-3 flex items-center gap-2 text-primary-500">
              <CommandLineIcon className="h-6 w-6" />
              <p className="text-xs font-bold uppercase tracking-widest">
                {t("ourProject.repositorySystem")}
              </p>
            </div>
            <HText>{t("ourProject.documentationCenter")}</HText>
            <p className="mt-4 text-lg font-medium text-gray-600">
              {t("ourProject.headerSubtitle")}
            </p>
          </motion.div>

          <div className="mt-8 md:mt-0 flex items-center gap-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">{projectConfigs.length}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t("ourProject.projectsCount")}</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
               <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t("ourProject.openAccess")}</p>
            </div>
          </div>
        </div>

        {/* REPOs LIST */}
        <motion.div
          className="flex flex-col mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{t("ourProject.activeApplications")}</span>
          </div>

          <div className="space-y-1">
            {projectConfigs.map((item, index) => (
              <ProjectRow key={index} item={item} />
            ))}
          </div>
        </motion.div>

        <PilotModelSlider />

        {/* FOOTER GITHUB */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 mb-10 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <CommandLineIcon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">{t("ourProject.footerAccessTitle")}</p>
              <p className="text-sm text-gray-500">{t("ourProject.footerAccessDesc")}</p>
            </div>
          </div>
          <a
            href="https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD7xRB94gRHQKceNf9VDkHDAbdYhJGqYRe3mAgwwKUhHcM?e=NkK7u0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors text-center"
          >
            {t("ourProject.viewOneDriveButton")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProjectSection;