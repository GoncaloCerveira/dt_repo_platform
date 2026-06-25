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
  CubeIcon
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
  title: string;
  description: string; 
  detailedDescription?: string[]; 
  link?: string; 
  externalLinks?: ProjectLink[];
  tag: string;
  accent: string;
  status: "Finalizado" | "Em Desenvolvimento" | "Pesquisa";
};

type PilotSite = {
  name: string;
  location: string;
  url: string;
  type: string;
  image: string;
};

const projects: ProjectItem[] = [
  {
    icon: <CloudIcon className="h-6 w-6" />,
    title: "Plataforma de Monitorização Ambiental para preservação Cultural",
    description: "Plataforma cloud para monitorização ambiental de património cultural, integrando dashboards em tempo real, IoT, MQTT e análise preditiva com IA.",
    link: "/repository/plataforma_iot",
    tag: "Plataforma IoT",
    accent: "from-sky-500 to-blue-600",
    status: "Em Desenvolvimento"
  },
  {
    icon: <CpuChipIcon className="h-6 w-6" />,
    title: "Firmware para a Plataforma de Monitorização",
    description: "Infraestrutura firmware para sensores STM32WB55 e gateways ESP32-S3 com suporte OTA, BLE, MQTT e gestão remota de dispositivos IoT.",
    link: "/repository/firmware_iot",
    tag: "Firmware & Sensores",
    accent: "from-lime-500 to-green-600",
    status: "Em Desenvolvimento"
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Monitorização de Fluxo e Ocupação - Jerónimos",
    description: "Sistema de contagem de visitantes e mapas de calor anónimos utilizando sensores ToF e mmWave com arquitetura IoT distribuída (STM32/ESP32).",
    link: "/repository/fluxo_visitantes",
    tag: "IoT & Edge Computing",
    accent: "from-orange-500 to-red-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <Square3Stack3DIcon className="h-6 w-6" />,
    title: "Segmentação de modelos 3D para HBIM",
    description: "Pipeline de segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
    link: "/repository/hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    title: "HBIM Pesquisa",
    description: "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
    link: "/repository/hbim-pesquisa",
    tag: "Processamento de Dados",
    accent: "from-orange-500 to-amber-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    title: "Simulador do Mosteiro de Santa Clara-a-Velha",
    description: "Simulação interativa em Unity para visualização e análise comparativa de cheias históricas no Mosteiro de Santa Clara-a-Velha.",
    link: "/repository/santa-clara",
    tag: "Experiências Imersivas",
    accent: "from-blue-500 to-cyan-400",
    status: "Em Desenvolvimento"
  },
  {
    icon: <PhotoIcon className="h-6 w-6" />,
    title: "Aplicações AR e VR para o Museu do Azulejo",
    description: "Plataformas interativas com AR para reconhecimento de monumentos e VR para exploração imersiva de ambientes históricos através de portais.",
    link: "/repository/azulejo",
    tag: "XR Imersivo",
    accent: "from-indigo-500 to-purple-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <GlobeAltIcon className="h-6 w-6" />,
    title: "Visita em realidade virtual à Gruta do Escoural",
    description: "Visualização da Gruta do Escoural baseada em captação 3D, navegável em tempo real.",
    link: "/repository/gruta-escoural",
    tag: "Experiências Imersivas",
    accent: "from-emerald-500 to-teal-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: "Reconstrução virtual das Ruínas Romanas de Milreu",
    description: "Reconstrução virtual das Ruínas Romanas de Milreu em 3D, desenvolvida no Blender a partir de referências históricas e arqueológicas.",
    link: "/repository/app-milreu",
    tag: "Experiências Imersivas",
    accent: "from-violet-500 to-fuchsia-500",
    status: "Em Desenvolvimento"
  },
];

const pilotSites: PilotSite[] = [
  {
    name: "Mosteiro dos Jerónimos", location: "Lisboa", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FMJ&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelos & Mesh",
    image: MJ
  },
  {
    name: "Mosteiro de Alcobaça", location: "Alcobaça", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FMA&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelos & Mesh",
    image: MA
  },
  {
    name: "Museu Nacional do Azulejo", location: "Lisboa", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FMNAz&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelos & Mesh",
    image: MNAZ
  },
  {
    name: "Ruínas Romanas de Milreu", location: "Faro", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FRRM&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelos & Mesh",
    image: RRM
  },
  {
    name: "Gruta do Escoural", location: "Alentejo", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FGE&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelo Completo",
    image: GE
  },
  {
    name: "Santa Clara-a-Velha (Modelo)", location: "Coimbra", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FModelos%203D%2FMSCV&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "Modelo Completo",
    image: MSCV
  },
  {
    name: "Santa Clara-a-Velha (HBIM)", location: "Coimbra", url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FHBIM%20Santa%20Clara&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", type: "HBIM Data",
    image: HBIM
  },
];

/* ================= SUB-COMPONENTS ================= */

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
                Public
              </span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</span>
            <span className={`text-xs font-bold ${item.status === "Finalizado" ? "text-emerald-500" : "text-amber-500"}`}>
              {item.status}
            </span>
          </div>

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

                {/* COLUNA DIREITA: RECURSOS E LINKS */}
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

const PilotModelSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="group mt-20 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      {/* HEADER */}
      <div className="relative overflow-hidden border-b border-[#77945D]/20 bg-gradient-to-r from-[#77945D] via-[#88a36f] to-[#77945D] p-8">
        {/* glow accents */}
        <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-white/90">
              <CubeIcon className="h-5 w-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Digital Twin Showcase
              </span>
            </div>

            <h3 className="text-3xl font-black tracking-tight text-white">
              Sítios-Piloto: Modelos 3D & HBIM
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              Levantamentos geométricos, malhas tridimensionais e dados HBIM
              produzidos para preservação, análise e exploração digital do
              património cultural.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-6 rounded-xl border border-white/20 bg-white/10 px-10 py-2 backdrop-blur-md">
              <div className="text-center">
                <p className="text-2xl font-black text-white">
                  30+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Modelos
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/repository/galeria-modelos")}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#77945D] shadow-lg transition-transform hover:scale-105"
            >
              Ver Galeria Completa
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
                {/* IMAGE */}
                <img
                  src={site.image}
                  alt={site.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-[#77945D]/10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                {/* TOP */}
                <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-6">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                    <Square3Stack3DIcon className="h-6 w-6 text-white" />
                  </div>

                  <div className="rounded-full border border-white/20 bg-black/20 p-2 backdrop-blur-sm">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {site.type}
                  </span>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    {site.location}
                  </p>

                  <h4 className="mt-2 text-2xl font-black leading-tight text-white">
                    {site.name}
                  </h4>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover/card:text-white">
                      Explorar Modelo
                    </span>

                    <div className="flex items-center gap-2 text-white">
                      <span className="text-xs font-bold">Open</span>
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
                Explorar Galeria Completa
              </h4>
              
              <p className="mt-3 text-center text-xs font-medium leading-relaxed text-gray-500">
                Descubra a nossa coleção completa de modelos 3D, gémeos digitais e levantamentos geométricos na galeria dedicada.
              </p>
              
              <div className="mt-8 flex items-center gap-2 rounded-lg bg-[#77945D] px-5 py-3 text-white shadow-md transition-colors hover:bg-[#637d4d]">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Ver Mais Modelos
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
                Sistema de Repositórios
              </p>
            </div>
            <HText>CENTRO DE DOCUMENTAÇÃO</HText>
            <p className="mt-4 text-lg font-medium text-gray-600">
              Repositório centralizado de aplicações, gémeos digitais e pipelines 
              de processamento desenvolvidos no âmbito do projeto.
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
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Aplicações Ativas</span>
          </div>

          <div className="space-y-1">
            {projects.map((item, index) => (
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
              <p className="font-bold text-gray-900">Acesso ao Código/Modelos/Documentação</p>
              <p className="text-sm text-gray-500">Todos os repositórios técnicos de GitHub estão disponíveis via documentação individual.</p>
            </div>
          </div>
          <a
            href="https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD7xRB94gRHQKceNf9VDkHDAVPLFImG0NFLkQPDxrLZWW4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors text-center"
          >
            Ver Todos os Projetos no OneDrive
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProjectSection;