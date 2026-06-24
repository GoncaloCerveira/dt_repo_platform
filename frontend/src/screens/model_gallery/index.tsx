import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  ArrowRightIcon,
  FolderOpenIcon,
  CubeIcon,
  VideoCameraIcon,
  CircleStackIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { FolderIcon as FolderSolidIcon } from "@heroicons/react/24/solid";
import HText from "@/components/HText";

// Import Images
import CCS from "@/assets/locais_opt/Casa_Corpo_Santo_2021_1.webp";
import CMAG from "@/assets/locais_opt/museu_anastacio.webp";
import CE from "@/assets/locais_opt/Castelo-elvas.jpg";
import CG from "@/assets/locais_opt/CG.webp";
import CVA from "@/assets/locais_opt/CVA.jpeg";
import CAL from "@/assets/locais_opt/citaniasantaluzia.jpg";
import CC from "@/assets/locais_opt/CC.jpeg";
import CJ from "@/assets/locais_opt/Convento_Jesus_Claustro.webp";

/* ================= TYPES ================= */

type ResourceState = {
  available: boolean;
  url: string;
};

export type LocationData = {
  id: string;
  name: string;
  image: string;
  resources: {
    dados: ResourceState;
    modelos3D: ResourceState;
    demos: ResourceState;
  };
};

type FilterType = "ALL" | "DADOS" | "MODELOS" | "DEMOS";

/* ================= DADOS ================= */
// para que possa ver os filtros e botões desativados em ação. 
// Substitua as URLs '#' pelos seus links reais do OneDrive.

const locationsList: LocationData[] = [
  { 
    id: "casa-corpo-santo", 
    name: "Casa do Corpo Santo", 
    image: CCS, 
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/..." },
      modelos3D: { available: false, url: "" },
      demos: { available: true, url: "https://unlpt-my.sharepoint.com/..." }
    }
  },
  { 
    id: "casa-museu-anastacio-goncalves", 
    name: "Casa Museu Dr. Anastácio Gonçalves", 
    image: CMAG, 
    resources: {
      dados: { available: true, url: "#" },
      modelos3D: { available: true, url: "#" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "castelo-elvas", 
    name: "Castelo de Elvas", 
    image: CE, 
    resources: {
      dados: { available: true, url: "#" },
      modelos3D: { available: true, url: "#" },
      demos: { available: true, url: "#" }
    }
  },
  { 
    id: "castelo-guimaraes", 
    name: "Castelo de Guimarães", 
    image: CG, 
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: false, url: "" },
      demos: { available: true, url: "#" }
    }
  },
  { 
    id: "castelo-viana-alentejo", 
    name: "Castelo de Viana do Alentejo", 
    image: CVA, 
    resources: {
      dados: { available: true, url: "#" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "citania-santa-luzia", 
    name: "Citânia de Santa Luzia", 
    image: CAL, 
    resources: {
      dados: { available: true, url: "#" },
      modelos3D: { available: true, url: "#" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "convento-cristo", 
    name: "Convento de Cristo", 
    image: CC, 
    resources: {
      dados: { available: true, url: "#" },
      modelos3D: { available: true, url: "#" },
      demos: { available: true, url: "#" }
    }
  },
  { 
    id: "convento-jesus", 
    name: "Convento de Jesus", 
    image: CJ, 
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "#" },
      demos: { available: false, url: "" }
    }
  },
];

/* ================= COMPONENTE PRINCIPAL ================= */

const ModelCatalog = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const navigate = useNavigate();

  // Debounce Effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const normalizeString = (str: string) => {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Filtragem Dupla (Pesquisa + Filtro de Recurso)
  const filteredLocations = [...locationsList]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((location) => {
      // Filtro de Texto
      const matchesSearch = !debouncedSearch || normalizeString(location.name).includes(normalizeString(debouncedSearch));
      
      // Filtro de Recursos (Pastas)
      let matchesFilter = true;
      if (activeFilter === "DADOS") matchesFilter = location.resources.dados.available;
      if (activeFilter === "MODELOS") matchesFilter = location.resources.modelos3D.available;
      if (activeFilter === "DEMOS") matchesFilter = location.resources.demos.available;

      return matchesSearch && matchesFilter;
    });

  /* ================= SUB-COMPONENTES ================= */
  
  // Renderiza os botões dentro do Modal
  const ResourceButton = ({ title, icon, resource }: { title: string, icon: JSX.Element, resource: ResourceState }) => {
    if (!resource.available) {
      return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-200 text-gray-400 rounded-lg">{icon}</div>
            <div className="text-left">
              <h4 className="font-bold text-gray-500">{title}</h4>
              <p className="text-xs text-gray-400">Pasta Vazia / Indisponível</p>
            </div>
          </div>
          <ExclamationCircleIcon className="h-6 w-6 text-gray-300" />
        </div>
      );
    }

    return (
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:border-primary-500 hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-50 text-primary-500 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
            {icon}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900 group-hover:text-primary-500 transition-colors">{title}</h4>
            <p className="text-xs text-emerald-500 font-medium flex items-center gap-1">
              <CheckCircleIcon className="h-3 w-3" /> Ficheiros Disponíveis
            </p>
          </div>
        </div>
        <FolderOpenIcon className="h-6 w-6 text-gray-300 group-hover:text-primary-500 transition-colors" />
      </a>
    );
  };

  return (
    <section id="all-locations" className="mx-auto bg-gray-20 min-h-screen py-20">
      <div className="mx-auto w-5/6">
        
        {/* HEADER */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 text-left border-b border-gray-200 pb-8">
          <motion.div
            className="w-full lg:w-1/2"
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
                Acesso de Dados
              </p>
            </div>
            <HText>REPOSITÓRIO DE GÉMEOS DIGITAIS</HText>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
              Explore os resultados dos levantamentos e processamentos. Aceda diretamente às pastas de <strong>Dados Brutos</strong>, <strong>Modelos 3D</strong> e <strong>Vídeos/Demos</strong> disponíveis para cada local.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center w-fit gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-xs uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </motion.button>
        </div>

        {/* BARRA DE FILTROS E PESQUISA */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Pills de Filtro */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2 hidden sm:block">Filtrar por:</span>
            
            <button onClick={() => setActiveFilter("ALL")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === "ALL" ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
              Todos
            </button>
            <button onClick={() => setActiveFilter("DADOS")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === "DADOS" ? "bg-primary-500 text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
              <CircleStackIcon className="h-4 w-4" /> Dados
            </button>
            <button onClick={() => setActiveFilter("MODELOS")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === "MODELOS" ? "bg-primary-500 text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
              <CubeIcon className="h-4 w-4" /> Modelos 3D
            </button>
            <button onClick={() => setActiveFilter("DEMOS")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === "DEMOS" ? "bg-primary-500 text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
              <VideoCameraIcon className="h-4 w-4" /> Demos
            </button>
          </div>

          {/* Input de Pesquisa */}
          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pesquisar local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* MAIN GRID */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredLocations.map((location) => (
                <motion.div
                  layout 
                  key={location.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedLocation(location)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
                >
                  <div className="h-40 w-full overflow-hidden relative">
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Badge flutuante de contagem de recursos */}
                    <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <FolderSolidIcon className="h-3 w-3" />
                      {[location.resources.dados.available, location.resources.modelos3D.available, location.resources.demos.available].filter(Boolean).length}/3
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-2">
                      {location.name}
                    </h3>
                    
                    <div className="mt-auto flex flex-col gap-2 border-t border-gray-100 pt-3">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Recursos</p>
                      <div className="flex gap-2">
                        {/* Ícones de disponibilidade */}
                        <div title="Dados" className={`p-1.5 rounded-md ${location.resources.dados.available ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-300'}`}>
                          <CircleStackIcon className="h-4 w-4" />
                        </div>
                        <div title="Modelos 3D" className={`p-1.5 rounded-md ${location.resources.modelos3D.available ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-50 text-gray-300'}`}>
                          <CubeIcon className="h-4 w-4" />
                        </div>
                        <div title="Demos e Vídeos" className={`p-1.5 rounded-md ${location.resources.demos.available ? 'bg-purple-50 text-purple-500' : 'bg-gray-50 text-gray-300'}`}>
                          <VideoCameraIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* EMPTY STATE */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-20 text-center bg-white rounded-3xl border border-gray-200 border-dashed"
          >
            <FolderOpenIcon className="h-16 w-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Nenhum resultado encontrado</h3>
            <p className="text-sm text-gray-500 mt-2">
              Não existem locais que correspondam à sua pesquisa ou filtro atual.
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setActiveFilter("ALL"); }}
              className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-bold transition-colors"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>

      {/* MODAL DE ARQUIVOS */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white text-gray-800 rounded-full backdrop-blur-md transition-all shadow-sm"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              
              {/* Cabeçalho do Modal (Imagem menor, foco no título) */}
              <div className="h-40 relative w-full border-b border-gray-100">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 flex flex-col justify-end p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400 mb-1">
                    Explorador de Arquivos
                  </p>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {selectedLocation.name}
                  </h2>
                </div>
              </div>

              {/* Corpo do Modal (As 3 Pastas) */}
              <div className="p-8 bg-gray-50">
                <p className="text-sm text-gray-500 mb-6">
                  Selecione o tipo de ficheiro que deseja explorar no repositório partilhado. Pastas ainda sem conteúdo encontram-se desativadas.
                </p>
                
                <div className="flex flex-col gap-4">
                  <ResourceButton 
                    title="Dados (Levantamentos)" 
                    icon={<CircleStackIcon className="h-6 w-6" />} 
                    resource={selectedLocation.resources.dados} 
                  />
                  <ResourceButton 
                    title="Modelos 3D" 
                    icon={<CubeIcon className="h-6 w-6" />} 
                    resource={selectedLocation.resources.modelos3D} 
                  />
                  <ResourceButton 
                    title="Demos & Vídeos" 
                    icon={<VideoCameraIcon className="h-6 w-6" />} 
                    resource={selectedLocation.resources.demos} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ModelCatalog;