import PilotDetailPage from ".";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";

const GrutaPublic = () => {
  return (
    <PilotDetailPage
      title="Gruta do Escoural"
      image= {{ src: GE }}
      description="A Gruta do Escoural é uma cavidade natural conhecida pela arte rupestre paleolítica e enterros, localizada na aldeia de S. Brissos, município alentejano de Montemor-o-Novo, em Portugal. Está classificada como Monumento Nacional desde 1963."
      tag="Piloto 06"
      setSelectedPage={() => {}} 
    />
  );
};

export default GrutaPublic;