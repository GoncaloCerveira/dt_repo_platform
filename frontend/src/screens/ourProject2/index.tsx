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
  CodeBracketSquareIcon
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
  status: "Finalizado" | "Em Desenvolvimento" | "Pesquisa";
};

const projects: ProjectItem[] = [
  {
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    title: "Simulador Santa Clara",
    description: "Texto para repor, so texto para ver como e que fica a demo. Muito texto vai para a pagina dedicada",
    link: "/santa-clara",
    tag: "Experiências Imersivas",
    accent: "from-blue-500 to-cyan-400",
    status: "Finalizado"
  },
  {
    icon: <PhotoIcon className="h-6 w-6" />,
    title: "AR e VR azulejo",
    description: "Texto para repor, so texto para ver como e que fica a demo. Muito texto vai para a pagina dedicada",
    link: "/azulejo",
    tag: "XR Imersivo",
    accent: "from-indigo-500 to-purple-500",
    status: "Em Desenvolvimento"
  },
   {
    icon: <CloudIcon className="h-6 w-6" />,
    title: "Navegação gruta do escoural",
    description: "Texto para repor, so texto para ver como e que fica a demo. Muito texto vai para a pagina dedicada",
    link: "/gruta-escoural",
    tag: "Experiências Imersivas",
    accent: "from-emerald-500 to-teal-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    title: "HBIM Pesquisa",
    description: "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
    link: "/hbim-pesquisa",
    tag: "Processamento de Dados",
    accent: "from-orange-500 to-amber-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <Square3Stack3DIcon className="h-6 w-6" />,
    title: "HBIM Segmentação",
    description: "Pipeline de segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
    link: "/hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: "Aplicação Milreu",
    description: "Texto para repor, so texto para ver como e que fica a demo. Muito texto vai para a pagina dedicada",
    detailedDescription: [
      "Investigação focada na criação de um motor de busca semântico que permite consultar elementos construtivos através de linguagem natural (NLP).",
      "Integração de bases de dados de conservação e restauro diretamente no ambiente BIM."
    ],
    externalLinks: [
      { label: "Paper de Investigação", url: "#", type: "doc" }
    ],
    tag: "Experiências Imersivas",
    accent: "from-violet-500 to-fuchsia-500",
    status: "Em Desenvolvimento"
  }
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
              Docs
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

      {/* PAINEL EXPANSÍVEL (DADOS TÉCNICOS) */}
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

/* ================= MAIN COMPONENT ================= */

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProjectSection = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourproject" className="mx-auto bg-gray-20 min-h-screen py-12">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProject)}
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
                Sistema de Reposotórios
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
          className="flex flex-col mb-16"
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

        {/* FOOTER GITHUB */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <CommandLineIcon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Acesso ao Código Fonte</p>
              <p className="text-sm text-gray-500">Todos os repositórios técnicos estão disponíveis via documentação individual.</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors">
            Ver Todos no GitHub
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProjectSection;