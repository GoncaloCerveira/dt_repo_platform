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
  {
    id: "torre-belem-1",
    name: "Torre de Belém",
    image: TRB,
    description: "A Torre de Belém é um dos monumentos mais expressivos da cidade de Lisboa. Localizada na margem direita do rio Tejo, é uma obra de referência do estilo manuelino.",
    website: "https://www.patrimoniocultural.gov.pt",
  },
  {
    id: "castelo-s-jorge-1",
    name: "Castelo de São Jorge",
    image: TR2,
    description: "O Castelo de S. Jorge ergue-se na colina mais alta de Lisboa, oferecendo uma das vistas mais deslumbrantes sobre a cidade e o rio Tejo. Um local repleto de história desde o tempo dos mouros.",
    website: "https://castelodesaojorge.pt",
  },
  {
    id: "palacio-pena-1",
    name: "Palácio Nacional da Pena",
    image: TRB,
    description: "O Palácio Nacional da Pena, localizado na serra de Sintra, representa uma das principais expressões do Romantismo arquitetónico do século XIX no mundo, sendo Património Mundial da UNESCO.",
    website: "https://www.parquesdesintra.pt",
  },
  {
    id: "convento-cristo-1",
    name: "Convento de Cristo",
    image: TR2,
    description: "O Convento de Cristo, em Tomar, pertenceu à Ordem dos Templários. Constitui um dos mais importantes conjuntos monumentais de Portugal, misturando estilos românico, gótico, manuelino e renascentista.",
    website: "http://www.conventocristo.gov.pt",
  },
  {
    id: "torre-belem-2",
    name: "Torre de Belém",
    image: TRB,
    description: "A Torre de Belém é um dos monumentos mais expressivos da cidade de Lisboa. Localizada na margem direita do rio Tejo, é uma obra de referência do estilo manuelino.",
    website: "https://www.patrimoniocultural.gov.pt",
  },
  {
    id: "castelo-s-jorge-2",
    name: "Castelo de São Jorge",
    image: TR2,
    description: "O Castelo de S. Jorge ergue-se na colina mais alta de Lisboa, oferecendo uma das vistas mais deslumbrantes sobre a cidade e o rio Tejo. Um local repleto de história desde o tempo dos mouros.",
    website: "https://castelodesaojorge.pt",
  },
  {
    id: "palacio-pena-2",
    name: "Palácio Nacional da Pena",
    image: TRB,
    description: "O Palácio Nacional da Pena, localizado na serra de Sintra, representa uma das principais expressões do Romantismo arquitetónico do século XIX no mundo, sendo Património Mundial da UNESCO.",
    website: "https://www.parquesdesintra.pt",
  },
  {
    id: "convento-cristo-2",
    name: "Convento de Cristo",
    image: TR2,
    description: "O Convento de Cristo, em Tomar, pertenceu à Ordem dos Templários. Constitui um dos mais importantes conjuntos monumentais de Portugal, misturando estilos românico, gótico, manuelino e renascentista.",
    website: "http://www.conventocristo.gov.pt",
  },
  {
    id: "torre-belem-3",
    name: "Torre de Belém",
    image: TRB,
    description: "A Torre de Belém é um dos monumentos mais expressivos da cidade de Lisboa. Localizada na margem direita do rio Tejo, é uma obra de referência do estilo manuelino.",
    website: "https://www.patrimoniocultural.gov.pt",
  },
  {
    id: "castelo-s-jorge-3",
    name: "Castelo de São Jorge",
    image: TR2,
    description: "O Castelo de S. Jorge ergue-se na colina mais alta de Lisboa, oferecendo uma das vistas mais deslumbrantes sobre a cidade e o rio Tejo. Um local repleto de história desde o tempo dos mouros.",
    website: "https://castelodesaojorge.pt",
  },
  {
    id: "palacio-pena-3",
    name: "Palácio Nacional da Pena",
    image: TRB,
    description: "O Palácio Nacional da Pena, localizado na serra de Sintra, representa uma das principais expressões do Romantismo arquitetónico do século XIX no mundo, sendo Património Mundial da UNESCO.",
    website: "https://www.parquesdesintra.pt",
  },
  {
    id: "convento-cristo-3",
    name: "Convento de Cristo",
    image: TR2,
    description: "O Convento de Cristo, em Tomar, pertenceu à Ordem dos Templários. Constitui um dos mais importantes conjuntos monumentais de Portugal, misturando estilos românico, gótico, manuelino e renascentista.",
    website: "http://www.conventocristo.gov.pt",
  }
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
        
        {/* HEADER & SEARCH AREA */}
        <div className="mb-12 flex flex-col items-start text-left">
          <motion.div
            className="md:w-3/5"
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
                Território Inteligente
              </p>
            </div>
            <HText>TODOS OS LOCAIS MAPEADOS</HText>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Explore a nossa rede completa de património. Clique em qualquer um dos locais abaixo para descobrir mais informações, detalhes históricos e visitar o website oficial.
            </p>
          </motion.div>

          {/* SEARCH BAR - Now under the text section */}
          <motion.div 
            className="mt-8 relative w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>
        </div>

        {/* MAIN GRID */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
                      {location.name}
                    </h3>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  {selectedLocation.description}
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