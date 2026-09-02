import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XMarkIcon, 
  GlobeAltIcon, 
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon, 
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import HText from "@/components/HText";

import CCS from "@/assets/locais_opt/Casa_Corpo_Santo_2021_1.webp";
import CMAG from "@/assets/locais_opt/museu_anastacio.webp";
import CE from "@/assets/locais_opt/Castelo-elvas.jpg";
import CG from "@/assets/locais_opt/CG.webp";
import CVA from "@/assets/locais_opt/CVA.jpeg";
import CAL from "@/assets/locais_opt/citaniasantaluzia.jpg";
import CC from "@/assets/locais_opt/CC.jpeg";
import CJ from "@/assets/locais_opt/Convento_Jesus_Claustro.webp";
import CSVF from "@/assets/locais_opt/CSVF.jpg";
import CBC from "@/assets/locais_opt/Imagem-do-Mosteiro-de-S-Bento-de-Castris.webp";
import EAFT from "@/assets/locais_opt/EAFT.jpeg";
import FS from "@/assets/locais_opt/Fortaleza_de_Sagres_Joao_Pedro_Costa.jpg";
import ISM from "@/assets/locais_opt/ISM.webp";
import MSMP from "@/assets/locais_opt/mosteiro-de-pombeiro-interior-felgueiras.width-1920.jpg";
import MJ from "@/assets/pilot_models/mj.jpeg";
import MSMT from "@/assets/locais_opt/MT.jpeg";
import MAP from "@/assets/locais_opt/MAP.jpg";
import MAS from "@/assets/locais_opt/Fachada_do_Museu_de_Alberto_Sampaio.webp";
import MADDS from "@/assets/locais_opt/MADDS.webp";
import MAEDS from "@/assets/locais_opt/MAEDS.jpg";
import MB from "@/assets/locais_opt/AOF_Museu_dos_Biscainhos.png";
import MJM from "@/assets/locais_opt/MJM.webp";
import MNAA from "@/assets/locais_opt/MNAA.webp";
import MNC from "@/assets/locais_opt/MNC.jpeg";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";
import MNTD from "@/assets/locais_opt/MNTD.webp";
import MNdT from "@/assets/locais_opt/MNdT.jpeg";
import MNdC from "@/assets/locais_opt/MNdC.webp";
import MNE from "@/assets/locais_opt/MNE.webp";
import MNFM from "@/assets/locais_opt/MNFM.webp";
import MNMC from "@/assets/locais_opt/MNMC.jpeg";
import PD from "@/assets/locais_opt/PP_Ana_Albuquerque_f79080f7d5.jpg";
import SB from "@/assets/locais_opt/SB.webp";
import SE from "@/assets/locais_opt/SE.webp";
import SN from "@/assets/locais_opt/sé-nova.jpg";
import SV from "@/assets/locais_opt/hero-se-velha.jpg";
import CCola from "@/assets/locais_opt/CCola.jpg";
import SAM from "@/assets/locais_opt/SAM.webp";
import SASC from "@/assets/locais_opt/SASC.webp";
import VRRP from "@/assets/locais_opt/villa_romana_de_torre_de_palma.jpg";
import TPCE from "@/assets/locais_opt/torre_paco_castelo-evoramonte.jpg";
import SP from "@/assets/locais_opt/SP.jpg";
import MA from "@/assets/pilot_models/ma.jpg";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";
import RRM from "@/assets/pilot_models/rrm.jpg";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";
import RCRB from "@/assets/locais_opt/ruinas_casa_rua_burgos.jpg";
import { useNavigate } from "react-router-dom";

export type LocationData = {
  id: string;
  image: string;
  website: string;
};

const locationsList: LocationData[] = [
  { id: "casa-corpo-santo", image: CCS, website: "https://museus.mun-setubal.pt/10351/casadocorposanto" },
  { id: "casa-museu-anastacio-goncalves", image: CMAG, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/casa-museu-dr-anastacio-goncalves" },
  { id: "castelo-elvas", image: CE, website: "https://cm-elvas.pt/descobrir/patrimonio/militar/castelo/" },
  { id: "castelo-guimaraes", image: CG, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/castelo-de-guimaraes" },
  { id: "castelo-viana-alentejo", image: CVA, website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/castelo-de-viana-do-alentejo/" },
  { id: "citania-santa-luzia", image: CAL, website: "https://www.culturaportugal.gov.pt/pt/conhecer/local/_drcnorte/citania-de-santa-luzia/" },
  { id: "convento-cristo", image: CC, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/convento-de-cristo" },
  { id: "convento-jesus", image: CJ, website: "https://museus.mun-setubal.pt/10348/conventodejesus" },
  { id: "convento-s-salvador-vilar-frades", image: CSVF, website: "https://www.mosteirosanorte.gov.pt/convento-de-vilar-de-frades/" },
  { id: "convento-sao-bento-castris", image: CBC, website: "https://www.cm-evora.pt/locais/convento-de-s-bento-de-castris/" },
  { id: "estacao-arqueologica-freixo", image: EAFT, website: "https://www.tongobriga.gov.pt/" },
  { id: "igreja-sao-miguel-castelo", image: ISM, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/igreja-de-sao-miguel-do-castelo" },
  { id: "mosteiro-sta-maria-pombeiro", image: MSMP, website: "https://www.rotadoromanico.com/pt/monumentos/mosteiro-de-santa-maria-de-pombeiro/" },
  { id: "mosteiro-jeronimos", image: MJ, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo" },
  { id: "mosteiro-sao-martinho-tibaes", image: MSMT, website: "https://www.mosteirodetibaes.gov.pt/" },
  { id: "museu-arte-popular", image: MAP, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arte-popular" },
  { id: "museu-alberto-sampaio", image: MAS, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-alberto-sampaio" },
  { id: "museu-arqueologia-diogo-sousa", image: MADDS, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arqueologia-d-diogo-de-sousa" },
  { id: "museu-arqueologia-etnografia-setubal", image: MAEDS, website: "https://maeds.amrs.pt/" },
  { id: "museu-biscainhos", image: MB, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-dos-biscainhos" },
  { id: "museu-jose-malhoa", image: MJM, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-jose-malhoa" },
  { id: "museu-nacional-arte-antiga", image: MNAA, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-arte-antiga" },
  { id: "museu-nacional-azulejo", image: MNAZ, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-azulejo" },
  { id: "museu-nacional-teatro-danca", image: MNTD, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-teatro-e-da-danca" },
  { id: "museu-nacional-traje", image: MNdT, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-traje" },
  { id: "museu-nacional-coches", image: MNdC, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-dos-coches" },
  { id: "museu-nacional-etnologia", image: MNE, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-etnologia" },
  { id: "museu-nacional-frei-manuel-cenaculo", image: MNFM, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-frei-manuel-do-cenaculo-e-igreja-de-nossa-senhora-das-merces" },
  { id: "paco-duques-braganca", image: PD, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/paco-dos-duques" },
  { id: "ruinas-casa-rua-burgos", image: RCRB, website: "http://www.monumentos.gov.pt/site/app_pagesuser/SIPA.aspx?id=10987" },
  { id: "se-braga", image: SB, website: "https://www.se-braga.pt/" },
  { id: "se-evora", image: SE, website: "https://www.evoracathedral.com/" },
  { id: "se-portalegre", image: SP, website: "https://imovel.patrimoniocultural.gov.pt/detalhes.php?code=70707" },
  { id: "sitio-arqueologico-castro-cola", image: CCola, website: "https://roteirosarqueologicosdoalentejo.uevora.pt/castro-da-cola/" },
  { id: "sitio-arqueologico-mirobriga", image: SAM, website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-mirobriga/" },
  { id: "sitio-arqueologico-sao-cucufate", image: SASC, website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-sao-cucufate/" },
  { id: "sitio-arqueologico-torre-palma", image: VRRP, website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/villa-romana-de-torre-de-palma/" },
  { id: "torre-castelo-evoramonte", image: TPCE, website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/torrepaco-do-castelo-de-evoramonte/" },
  { id: "se-nova-coimbra", image: SN, website: "https://www.cm-coimbra.pt/areas/visitar/conhecer-coimbra/monumentos/se-nova-colegio-de-jesus" },
  { id: "se-velha-coimbra", image: SV, website: "https://arciprestadocoimbraurbana.pt/visitar/se-velha-de-coimbra/ " },
  { id: "museu-machado-castro", image: MNMC, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-machado-de-castro " },
  { id: "museu-conimbriga", image: MNC, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-conimbriga " },
  { id: "fortaleza-sagres", image: FS, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/fortaleza-de-sagres " },
  { id: "mosteiro-santa-clara-velha", image: MSCV, website: "https://www.patrimoniocultural.gov.pt/mosteiro-de-santa-clara-a-velha/" },
  { id: "real-mosteiro-santa-maria-alcobaca", image: MA, website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-de-alcobaca" },
  { id: "ruinas-romanas-milreu", image: RRM, website: "https://www.monumentosdoalgarve.pt/pt/monumentos-do-algarve/ruinas-romanas-de-milreu" },
  { id: "gruta-escoural", image: GE, website: "https://culturaportugal.gov.pt/pt/conhecer/local/pc-locais/gruta-do-escoural/" },
];

const LocationsCatalog = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();

  // Traduções dos conteúdos de cada local (i18n.ts -> locations.items)
  const getName = (id: string) => t(`locations.items.${id}.name`);
  const getDescription = (id: string) =>
    t(`locations.items.${id}.description`, { defaultValue: t("locations.noDescription") });

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
    .sort((a, b) => getName(a.id).localeCompare(getName(b.id)))
    .filter((location) => {
      if (!debouncedSearch) return true;
      const searchNormalized = normalizeString(debouncedSearch);
      const nameNormalized = normalizeString(getName(location.id));
      const descNormalized = normalizeString(getDescription(location.id));

      return (
        nameNormalized.includes(searchNormalized) || 
        descNormalized.includes(searchNormalized)
      );
    });

  return (
    <section id="all-locations" className="mx-auto bg-gray-20 min-h-screen py-20">
      <div className="mx-auto w-5/6">
        
        {/* HEADER & CONTROLS */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 text-left">
          
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
                {t("locations.subheading")}
              </p>
            </div>
            <HText>{t("locations.title")}</HText>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              {t("locations.intro")}
            </p>
          </motion.div>

          {/* Right Action Block */}
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
                placeholder={t("locations.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Counter Badge */}
            <div className="whitespace-nowrap bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-700 font-medium text-sm sm:text-base">
              <span className="text-xl font-bold text-primary-500 mr-1.5">
                {filteredLocations.length}
              </span>
              {t("locations.resultsLabel")}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-sm uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group shrink-0 ml-auto"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              {t("locations.backButton")}
            </motion.button>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredLocations.map((location) => (
                <motion.div
                  layout 
                  key={location.id} 
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
                      alt={getName(location.id)} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex-grow flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-2 leading-snug">
                      {getName(location.id)}
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
            <h3 className="text-xl font-bold text-gray-700">{t("locations.emptyTitle")}</h3>
            <p className="text-gray-500 mt-2">{t("locations.emptyText", { term: searchTerm })}</p>
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
                  alt={getName(selectedLocation.id)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-8 bg-primary-500" />
                  <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                    {t("locations.detailsLabel")}
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {getName(selectedLocation.id)}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {getDescription(selectedLocation.id)}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a
                    href={selectedLocation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    {t("locations.visitWebsite")}
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
