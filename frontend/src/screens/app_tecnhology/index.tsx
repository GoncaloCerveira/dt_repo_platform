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
  HomeModernIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

type ProjectLink = {
  labelKey: string;
  url: string;
  type: "web" | "doc" | "github";
};

type ProjectItem = {
  id: string;
  icon: JSX.Element;
  link?: string;
  externalLinks?: ProjectLink[];
  accent: string;
};

const projectItems: ProjectItem[] = [
  {
    id: "iotPlatform",
    icon: <CloudIcon className="h-6 w-6" />,
    link: "/tech-plataforma-iot",
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "iotFirmware",
    icon: <CpuChipIcon className="h-6 w-6" />,
    link: "/tech-firmware-iot",
    accent: "from-lime-500 to-green-600",
  },
  {
    id: "visitorFlow",
    icon: <UsersIcon className="h-6 w-6" />,
    link: "/tech-fluxo_visitantes",
    accent: "from-orange-500 to-red-500",
  },
  {
    id: "hbimSegmentation",
    icon: <Square3Stack3DIcon className="h-6 w-6" />,
    link: "/tech-hbim-segmentacao",
    accent: "from-rose-500 to-pink-500",
  },
  {
    id: "hbimSearch",
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    link: "/tech-hbim-pesquisa",
    accent: "from-orange-500 to-amber-500",
  },
  {
    id: "hbimDev",
    icon: <HomeModernIcon className="h-6 w-6" />,
    link: "/tech-hbim",
    accent: "from-red-500 to-rose-500",
  },
  {
    id: "santaClaraSimulator",
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    link: "/tech-santa-clara",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: "azulejoXR",
    icon: <PhotoIcon className="h-6 w-6" />,
    link: "/tech-azulejo",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    id: "escouralVR",
    icon: <GlobeAltIcon className="h-6 w-6" />,
    link: "/tech-gruta-escoural",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "milreu3D",
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    link: "/tech-milreu",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "uxUiProjects",
    icon: <QrCodeIcon className="h-6 w-6" />,
    link: "/projetos-ux-ui",
    accent: "from-sky-500 to-blue-600",
  },
];

const ProjectRow = ({ item }: { item: ProjectItem }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasInternalPage = !!item.link;

  const title = t(`technology.projects.${item.id}.title`);
  const description = t(`technology.projects.${item.id}.description`);
  const tag = t(`technology.projects.${item.id}.tag`);

  // Handle optional detailed description array
  const rawDetailed = t(`technology.projects.${item.id}.detailedDescription`, {
    returnObjects: true,
  });
  const detailedDescription: string[] = Array.isArray(rawDetailed)
    ? (rawDetailed as string[])
    : [];

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
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${item.accent} text-white shadow-sm transition-transform group-hover:scale-105`}
          >
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                {title}
              </h3>
              <span className="hidden sm:block px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter border border-gray-200 text-gray-400 rounded">
                {tag}
              </span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0">
          {hasInternalPage ? (
            <button
              onClick={() => navigate(item.link!)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary-500 transition-all shadow-sm cursor-pointer"
            >
              <DocumentTextIcon className="h-4 w-4" />
              {t("technology.actions.learnMore")}
              <ChevronRightIcon className="h-3 w-3" />
            </button>
          ) : (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                isExpanded
                  ? "bg-primary-50 border-primary-500 text-primary-500"
                  : "bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <CommandLineIcon className="h-4 w-4" />
              {isExpanded
                ? t("technology.actions.close")
                : t("technology.actions.details")}
              <ChevronDownIcon
                className={`h-3 w-3 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* EXPANDABLE PANEL */}
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
                <div className="md:col-span-2 space-y-5">
                  <div className="flex items-center gap-2">
                    <CodeBracketSquareIcon className="h-5 w-5 text-primary-500" />
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                      {t("technology.detailsSummary")}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {detailedDescription.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-primary-500/30"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* RESOURCES & LINKS */}
                {item.externalLinks && item.externalLinks.length > 0 && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-primary-500" />
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        {t("technology.externalResources")}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3">
                      {item.externalLinks.map((ext, idx) => (
                        <a
                          key={idx}
                          href={ext.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-500 hover:text-primary-500 transition-all group/link shadow-sm"
                        >
                          <span className="text-xs font-bold text-gray-700 group-hover/link:text-primary-500">
                            {t(ext.labelKey)}
                          </span>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ================= MAIN COMPONENT ================= */

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurTecnhologySection = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  return (
    <section id="technology" className="mx-auto bg-gray-20 pb-20">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurTechonology)}
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
              <span className="h-px w-6 bg-primary-500" />
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                {t("technology.sectionBadge")}
              </p>
            </div>
            <HText>{t("technology.title")}</HText>
            <p className="mt-4 text-lg font-medium text-gray-600">
              {t("technology.description")}
            </p>
          </motion.div>

          <div className="mt-8 md:mt-0 flex items-center gap-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">
                {projectItems.length}
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                {t("technology.stats.projects")}
              </p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                {t("technology.stats.openAccess")}
              </p>
            </div>
          </div>
        </div>

        {/* REPOS LIST */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="space-y-1">
            {projectItems.map((item) => (
              <ProjectRow key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTecnhologySection;