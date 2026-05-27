import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XMarkIcon, 
  GlobeAltIcon, 
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon 
} from "@heroicons/react/24/solid";
import HText from "@/components/HText";
import TRB from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";
import TR2 from "@/assets/pilot_models/ma.jpg";

export type LocationData = {
  id: string;
  name: string;
  image: string;
  description: string;
  website: string;
};

const locationsList: LocationData[] = [
  { id: "casa-corpo-santo", name: "Casa do Corpo Santo", image: TRB, description: "", website: "https://museus.mun-setubal.pt/10351/casadocorposanto" },
  { id: "casa-museu-anastacio-goncalves", name: "Casa Museu Dr. Anastácio Gonçalves", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/casa-museu-dr-anastacio-goncalves" },
  { id: "castelo-elvas", name: "Castelo de Elvas", image: TRB, description: "", website: "https://cm-elvas.pt/descobrir/patrimonio/militar/castelo/" },
  { id: "castelo-guimaraes", name: "Castelo de Guimarães", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/castelo-de-guimaraes" },
  { id: "castelo-viana-alentejo", name: "Castelo de Viana do Alentejo", image: TRB, description: "", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/castelo-de-viana-do-alentejo/" },
  { id: "citania-santa-luzia", name: "Citânia de Santa Luzia", image: TR2, description: "", website: "https://www.culturaportugal.gov.pt/pt/conhecer/local/_drcnorte/citania-de-santa-luzia/" },
  { id: "convento-cristo", name: "Convento de Cristo", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/convento-de-cristo" },
  { id: "convento-jesus", name: "Convento de Jesus", image: TR2, description: "", website: "https://museus.mun-setubal.pt/10348/conventodejesus" },
  { id: "convento-s-salvador-vilar-frades", name: "Convento de S. Salvador de Vilar de Frades", image: TRB, description: "", website: "https://www.mosteirosanorte.gov.pt/convento-de-vilar-de-frades/" },
  { id: "convento-sao-bento-castris", name: "Convento de São Bento de Cástris", image: TR2, description: "", website: "https://www.cm-evora.pt/locais/convento-de-s-bento-de-castris/" },
  { id: "estacao-arqueologica-freixo", name: "Estação Arqueológica do Freixo - Tongóbriga", image: TRB, description: "", website: "https://www.tongobriga.gov.pt/" },
  { id: "igreja-sao-miguel-castelo", name: "Igreja de São Miguel do Castelo", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/igreja-de-sao-miguel-do-castelo" },
  { id: "mosteiro-sta-maria-pombeiro", name: "Mosteiro de Sta. Maria de Pombeiro", image: TRB, description: "", website: "https://www.rotadoromanico.com/pt/monumentos/mosteiro-de-santa-maria-de-pombeiro/" },
  { id: "mosteiro-jeronimos", name: "Mosteiro dos Jerónimos", image: TR2, description: "Obra-prima da arquitetura portuguesa, o Real Mosteiro de Santa Maria de Belém, designado comumente por Mosteiro dos Jerónimos, por ter sido destinado à Ordem de São Jerónimo, está classificado como Monumento Nacional desde 1907 e foi inscrito na Lista do Património Mundial da UNESCO em 1983. A igreja, com serviço religioso e horário para visitas patrimoniais, e o claustro, secularizado no século XIX, formam o conjunto patrimonial mais visitado do país.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo" },
  { id: "mosteiro-sao-martinho-tibaes", name: "Mosteiro São Martinho de Tibães", image: TRB, description: "", website: "https://www.mosteirodetibaes.gov.pt/" },
  { id: "museu-arte-popular", name: "Museu Arte Popular", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arte-popular" },
  { id: "museu-alberto-sampaio", name: "Museu de Alberto Sampaio", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-alberto-sampaio" },
  { id: "museu-arqueologia-diogo-sousa", name: "Museu de Arqueologia D. Diogo de Sousa", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arqueologia-d-diogo-de-sousa" },
  { id: "museu-arqueologia-etnografia-setubal", name: "Museu de Arqueologia e Etnografia do Distrito de Setúbal", image: TRB, description: "", website: "https://maeds.amrs.pt/" },
  { id: "museu-biscainhos", name: "Museu dos Biscainhos", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-dos-biscainhos" },
  { id: "museu-jose-malhoa", name: "Museu José Malhoa", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-jose-malhoa" },
  { id: "museu-nacional-resistencia-liberdade", name: "Museu Nacional da Resistência e Liberdade", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-resistencia-e-liberdade" },
  { id: "museu-nacional-arte-antiga", name: "Museu Nacional de Arte Antiga", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-arte-antiga" },
  { id: "museu-nacional-azulejo", name: "Museu Nacional do Azulejo", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-azulejo" },
  { id: "museu-nacional-teatro-danca", name: "Museu Nacional do Teatro e da Dança", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-teatro-e-da-danca" },
  { id: "museu-nacional-traje", name: "Museu Nacional do Traje", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-traje" },
  { id: "museu-nacional-coches", name: "Museu Nacional dos Coches", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-dos-coches" },
  { id: "museu-nacional-etnologia", name: "Museu Nacional Etnologia", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-etnologia" },
  { id: "museu-nacional-frei-manuel-cenaculo", name: "Museu Nacional Frei Manuel do Cenáculo", image: TRB, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-frei-manuel-do-cenaculo-e-igreja-de-nossa-senhora-das-merces" },
  { id: "paco-duques-braganca", name: "Paço dos Duques de Bragança", image: TR2, description: "", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/paco-dos-duques" },
  { id: "ruinas-casa-rua-burgos", name: "Ruínas da Casa na Rua de Burgos", image: TRB, description: "", website: "http://www.monumentos.gov.pt/site/app_pagesuser/SIPA.aspx?id=10987" },
  { id: "se-braga", name: "Sé de Braga", image: TR2, description: "", website: "https://www.se-braga.pt/" },
  { id: "se-evora", name: "Sé de Évora", image: TRB, description: "", website: "https://www.evoracathedral.com/" },
  { id: "se-portalegre", name: "Sé de Portalegre", image: TR2, description: "", website: "https://imovel.patrimoniocultural.gov.pt/detalhes.php?code=70707" },
  { id: "se-porto", name: "Sé do Porto", image: TRB, description: "", website: "https://www.diocese-porto.pt/catedral-do-porto/" },
  { id: "sitio-arqueologico-castro-cola", name: "Sítio Arqueológico de Castro de Cola", image: TR2, description: "", website: "https://roteirosarqueologicosdoalentejo.uevora.pt/castro-da-cola/" },
  { id: "sitio-arqueologico-mirobriga", name: "Sítio Arqueológico de Miróbriga", image: TRB, description: "", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-mirobriga/" },
  { id: "sitio-arqueologico-sao-cucufate", name: "Sítio Arqueológico de São Cucufate", image: TR2, description: "", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-sao-cucufate/" },
  { id: "sitio-arqueologico-torre-palma", name: "Sítio Arqueológico de Torre de Palma", image: TRB, description: "", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/villa-romana-de-torre-de-palma/" },
  { id: "torre-castelo-evoramonte", name: "Torre do Castelo de Evoramonte", image: TR2, description: "", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/torrepaco-do-castelo-de-evoramonte/" }
];

const LocationsCatalog = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce Effect for performance
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fuzzy Search string normalization
  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Filter and sort logic
  const filteredLocations = [...locationsList]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((location) => {
      if (!debouncedSearch) return true;
      const searchNormalized = normalizeString(debouncedSearch);
      const nameNormalized = normalizeString(location.name);
      const descNormalized = normalizeString(location.description);

      return (
        nameNormalized.includes(searchNormalized) || 
        descNormalized.includes(searchNormalized)
      );
    });

  return (
    <section id="all-locations" className="mx-auto bg-gray-20 min-h-screen py-20">
      <div className="mx-auto w-5/6">
        
        {/* HEADER & CONTROLS ROW */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 text-left">
          
          {/* Left Text Block */}
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
                Territórios Inteligentes
              </p>
            </div>
            <HText>TODOS OS GÉMEOS DIGITAIS</HText>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Explore a nossa rede completa de património. Clique em qualquer um dos locais abaixo para descobrir mais informações, detalhes históricos e visitar o website oficial.
            </p>
          </motion.div>

          {/* Right Action Block: Search Bar on the Right, Count to the Right of it */}
          <motion.div 
            className="flex flex-row items-center gap-4 w-full lg:w-auto justify-start lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search input field */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar por nome ou detalhe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Counter Badge to the right of Search */}
            <div className="whitespace-nowrap bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-700 font-medium text-sm sm:text-base">
              <span className="text-xl font-bold text-primary-500 mr-1.5">
                {filteredLocations.length}
              </span>
              Locais Encontrados
            </div>
          </motion.div>
        </div>

        {/* MAIN GRID - Configured to be 4 columns from md breakpoint and up */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredLocations.map((location) => (
                <motion.div
                  layout // Allows smooth resorting
                  key={location.id} // Must be unique for AnimatePresence to work!
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLocation(location)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex-grow flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-2 leading-snug">
                      {location.name}
                    </h3>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity min-w-[20px] ml-2" />
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
            className="py-20 text-center"
          >
            <MagnifyingGlassIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Nenhum local encontrado</h3>
            <p className="text-gray-500 mt-2">Não encontrámos resultados para "{searchTerm}". Tente usar outros termos.</p>
          </motion.div>
        )}
      </div>

      {/* DETAIL POPUP */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-8 bg-primary-500" />
                  <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                    Detalhes do Local
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedLocation.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {selectedLocation.description || "Descrição detalhada não disponível para este local no momento."}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a
                    href={selectedLocation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    Visitar Website Oficial
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LocationsCatalog;