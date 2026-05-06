import ActionButton from "@/components/ActionButton";
import NOVA from "@/assets/NOVA.png";
import CAMPUS from "@/assets/campusfct.png"
import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type PartnerCardProps = {
  img: string;
  bgImg?: string;
  name: string;
  isCoordinator?: boolean;
};

const PartnerCard = ({ img, bgImg, name, isCoordinator }: PartnerCardProps) => (
  <motion.div 
    className="bg-white px-4 py-3 shadow-xl border border-gray-100 flex flex-col items-center h-full rounded-sm"
    whileHover={{ scale: 1.05, rotateZ: isCoordinator ? 0 : 2 }}
    transition={{ type: "spring", stiffness: 300 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="relative w-full h-auto aspect-video overflow-hidden border border-gray-100 mb-3 bg-gray-900 rounded-sm">
      {/* Background Image */}
      {bgImg && (
        <img 
          src={bgImg} 
          alt={`Place associated with ${name}`} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Logo Image */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <img 
            src={img} 
            alt={name} 
            className="w-auto h-auto max-h-[65%] max-w-[80%] object-contain drop-shadow-2xl" 
          />
      </div>
    </div>
    
    {/* Text Area */}
    <div className="w-full px-1 flex-grow text-center flex flex-col justify-center font-montserrat tracking-tight leading-tight">
      {isCoordinator && (
        <p className="text-[10px] font-bold uppercase text-primary-500 mb-0.5">Coordenador</p>
      )}
      <p className="text-sm font-semibold text-gray-900 line-clamp-2" dangerouslySetInnerHTML={{ __html: name }} />
    </div>
  </motion.div>
);

const partners = [
  { img: NOVA, bgImg: CAMPUS, name: "Universidade Nova de Lisboa" },
  { img: NOVA, bgImg: CAMPUS, name: "Universidade de Évora" },
  { img: NOVA, bgImg: CAMPUS, name: "Património Cultural, I.P." },
  { img: NOVA, bgImg: CAMPUS, name: "Museus e Monumentos<br />de Portugal, E.P.E."},
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Model = ({ setSelectedPage }: Props) => {
  return (
    <section id="model" className="w-full bg-gray-20 pt-12 md:pt-14">
      <motion.div
        className="mx-auto w-5/6 pb-24 md:pb-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Model)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          className="md:w-full mb-16 md:mb-18 mt-12 md:mt-2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-primary-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
               O DESAFIO DA CIDADE INTELIGENTE
            </p>
          </div>
          <HText>O Projeto</HText>
          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            O projeto <span className="font-bold text-primary-500">DT4SST-CH.PT</span> propõe novos métodos de gestão e valorização do património cultural português através da criação de gémeos digitais de 65 museus e monumentos nacionais. Combinando digitalização 3D, sensores IoT, inteligência artificial e realidade aumentada, o projeto promove a preservação do património cultural, experiências turísticas imersivas e estratégias de gestão sustentável.
          </p>
          <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            O projeto contempla seis locais-piloto, que serão palco de demonstrações inovadoras que integram monitorização ambiental e narrativas interativas em ambientes de realidade mista. Culmina com a produção de um Livro Branco, que reunirá recomendações para políticas públicas e servirá de guia para a criação e adoção de gémeos digitais no setor cultural, posicionando Portugal como referência internacional em turismo inteligente e preservação patrimonial.
          </p>
        </motion.div>

       <div className="w-full">
          <div className="flex items-center gap-5 mb-8 md:mb-10 pb-5 border-b border-gray-300">
            <UserGroupIcon className="h-12 w-12 text-primary-500 flex-shrink-0" />
            <HText>Quem somos</HText>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            {partners.map((partner) => (
              <PartnerCard 
                key={partner.name} 
                {...partner} 
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* Bottom Divider */}
      <div className="bg-primary-100 py-16 border-t"/>
    </section>
  );
};

export default Model;