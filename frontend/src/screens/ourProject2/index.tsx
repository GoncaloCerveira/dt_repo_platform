import { motion } from "framer-motion";
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
  ChevronRightIcon
} from "@heroicons/react/24/outline";

/* ================= TYPES & DATA ================= */

type ProjectItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  tag: string;
  accent: string;
  status: "Finalizado" | "Em Desenvolvimento" | "Pesquisa";
};

const boards: ProjectItem[] = [
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
    description: "Segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
    link: "/hbim-segmentacao",
    tag: "Processamento de Dados",
    accent: "from-rose-500 to-pink-500",
    status: "Em Desenvolvimento"
  },
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: "Aplicação Milreu",
    description: "Texto para repor, so texto para ver como e que fica a demo. Muito texto vai para a pagina dedicada",
    link: "/app-milreu",
    tag: "Experiências Imersivas",
    accent: "from-violet-500 to-fuchsia-500",
    status: "Em Desenvolvimento"
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const ProjectRow = ({ item }: { item: ProjectItem }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      className="group flex flex-col md:flex-row items-start md:items-center justify-between p-7 mb-3 bg-white border border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-4 md:basis-3/5">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${item.accent} text-white shadow-sm`}>
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

      <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-4 md:mt-0">
        <div className="flex items-center gap-4 mr-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categoria</span>
            <span className="text-xs font-semibold text-gray-700">{item.tag}</span>
          </div>
          <div className="h-8 w-px bg-gray-100 hidden md:block" />
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</span>
            <span className={`text-xs font-bold ${item.status === "Finalizado" ? "text-emerald-500" : "text-amber-500"}`}>
              {item.status}
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate(item.link)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-bold text-xs uppercase tracking-wider border border-gray-100 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all group/btn"
        >
          <DocumentTextIcon className="h-4 w-4" />
          Docs
          <ChevronRightIcon className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
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
              <p className="text-2xl font-black text-gray-900">{boards.length}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Projetos</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
               <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Open Access</p>
            </div>
          </div>
        </div>

        {/* REPOSITORY LIST */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Aplicações Ativas</span>
          </div>

          <div className="space-y-1">
            {boards.map((item, index) => (
              <ProjectRow key={index} item={item} />
            ))}
          </div>
        </motion.div>

        {/* FOOTER DA SECÇÃO */}
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