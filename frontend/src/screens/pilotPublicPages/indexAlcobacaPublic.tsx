import PilotDetailPage from ".";
import MA from "@/assets/pilot_models/ma.jpg";

const AlcobacaPublic = () => {
  return (
    <PilotDetailPage
      title="Real Mosteiro de Santa Maria de Alcobaça"
      image= {{ src: MA }}
      description="O Mosteiro de Alcobaça, também conhecido como Real Mosteiro de Santa Maria de Alcobaça, é um mosteiro situado na cidade de Alcobaça, na região Oeste portuguesa. É a primeira obra plenamente gótica erguida em solo português, tendo sido começada a sua construção em 1178 pelos monges da Ordem de Cister."
      tag="Piloto 03"
      setSelectedPage={() => {}} 
    />
  );
};

export default AlcobacaPublic;