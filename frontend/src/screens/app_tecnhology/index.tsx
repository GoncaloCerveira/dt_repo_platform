import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  QrCodeIcon
} from "@heroicons/react/24/outline";

type ProjectLink = {
  label: string;
  url: string;
  type: "web" | "doc" | "github";
};

type ProjectItem = {
  icon: JSX.Element;
  title: string;
  description: string; 
  detailedDescription?: string[]; 
  link?: string; 
  externalLinks?: ProjectLink[];
  tag: string;
  accent: string;
};

const projects: ProjectItem[] = [
  {
    icon: <CloudIcon className="h-6 w-6" />,
    title: "Plataforma de Monitorização Ambiental para preservação Cultural",
    description: "Plataforma cloud para monitorização ambiental de património cultural, integrando dashboards em tempo real, IoT, MQTT e análise preditiva com IA.",
    link: "/tech-plataforma-iot",
    tag: "Plataforma IoT",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: <CpuChipIcon className="h-6 w-6" />,
    title: "Firmware para a Plataforma de Monitorização",
    description: "Infraestrutura firmware para sensores STM32WB55 e gateways ESP32-S3 com suporte OTA, BLE, MQTT e gestão remota de dispositivos IoT.",
    link: "/tech-firmware-iot",
    tag: "Firmware & Sensores",
    accent: "from-lime-500 to-green-600",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Monitorização de Fluxo e Ocupação - Jerónimos",
    description: "Sistema de contagem de visitantes e mapas de calor anónimos utilizando sensores ToF e mmWave com arquitetura IoT distribuída (STM32/ESP32).",
    link: "/tech-fluxo_visitantes",
    tag: "IoT & Edge Computing",
    accent: "from-orange-500 to-red-500",
  },
  {
    icon: <Square3Stack3DIcon className="h-6 w-6" />,
    title: "Segmentação de modelos 3D para HBIM",
    description: "Pipeline de segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
    link: "/tech-hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    title: "HBIM Pesquisa",
    description: "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
    link: "/tech-hbim-pesquisa",
    tag: "Processamento de Dados",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Desenvolvimento de HBIMs",
    description: "Modelação tridimensional IFC e mapeamento semântico de patologias a partir de nuvens de pontos e arquivos históricos.",
    link: "/tech-hbim",
    tag: "Processamento de Dados",
    accent: "from-red-500 to-rose-500",
  },
  {
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    title: "Simulador do Mosteiro de Santa Clara-a-Velha",
    description: "Simulação interativa em Unity para visualização e análise comparativa de cheias históricas no Mosteiro de Santa Clara-a-Velha.",
    link: "/tech-santa-clara",
    tag: "Experiências Imersivas",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: <PhotoIcon className="h-6 w-6" />,
    title: "Aplicações AR e VR para o Museu do Azulejo",
    description: "Plataformas interativas com AR para reconhecimento de monumentos e VR para exploração imersiva de ambientes históricos através de portais.",
    link: "/tech-azulejo",
    tag: "XR Imersivo",
    accent: "from-indigo-500 to-purple-500",
  },
   {
    icon: <GlobeAltIcon className="h-6 w-6" />,
    title: "Visita em realidade virtual à Gruta do Escoural",
    description: "Visualização da Gruta do Escoural baseada em captação 3D, navegável em tempo real.",
    link: "/tech-gruta-escoural",
    tag: "Experiências Imersivas",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
  title: "Reconstrução virtual das Ruínas Romanas de Milreu",
    description: "Reconstrução virtual das Ruínas Romanas de Milreu em 3D, desenvolvida no Blender a partir de referências históricas e arqueológicas.",
    link: "/tech-milreu",
    tag: "Experiências Imersivas",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <QrCodeIcon className="h-6 w-6" />,
    title: "Desenvolvimento de UX e UI para os projetos do Digital Twins",
    description: "Processo e desenvolvimento de UX e UI para os projetos do Digital Twins.",
    link: "/projetos-ux-ui",
    tag: "Experiências Imersivas",
    accent: "from-sky-500 to-blue-600",
  },
];

const ProjectRow = ({ item }: { item: ProjectItem }) => {
  const navigate = useNavigate();
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
                {item.title}
              </h3>
              <span className="hidden sm:block px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter border border-gray-200 text-gray-400 rounded">
                {hasInternalPage ? "Public" : "Public"}
              </span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0">
          {hasInternalPage ? (
            <button
              onClick={() => navigate(item.link!)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary-500 transition-all shadow-sm"
            >
              <DocumentTextIcon className="h-4 w-4" />
              SABER MAIS
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
              {isExpanded ? "Fechar" : "Detalhes"}
              <ChevronDownIcon className={`h-3 w-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
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
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Resumo do Projeto</h4>
                  </div>
                  <div className="space-y-4">
                    {item.detailedDescription?.map((paragraph, idx) => (
                      <p key={idx} className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-primary-500/30">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* RESOURCES & LINKS */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary-500" />
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Recursos Externos</h4>
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

/* ================= MAIN COMPONENT ================= */

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurTecnhologySection = ({ setSelectedPage }: Props) => {
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
                Tecnologias
              </p>
            </div>
            <HText>Ferramentas e Aplicações</HText>
            <p className="mt-4 text-lg font-medium text-gray-600">
              Esta secção reúne as ferramentas e aplicações em desenvolvimento no âmbito do projeto, 
              traduzindo a investigação científica em soluções tecnológicas. Aqui encontrará os nossos 
              desenvolvimentos em IoT, modelação 3D, realidade imersiva e análise preditiva aplicadas ao setor cultural.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-0 flex items-center gap-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">{projects.length}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Projetos</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
               <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Open Access</p>
            </div>
          </div>
        </div>

        {/* REPOs LIST */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <div className="flex items-center gap-2 px-2">
          </div>

          <div className="space-y-1">
            {projects.map((item, index) => (
              <ProjectRow key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTecnhologySection;