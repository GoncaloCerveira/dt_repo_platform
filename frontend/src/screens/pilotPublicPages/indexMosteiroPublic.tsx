import PilotDetailPage from ".";
import MJ from "@/assets/pilot_models/mj.jpeg";

const MosteiroPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro dos Jerónimos"
      image= {{ src: MJ }}
      description="O Mosteiro de Santa Maria de Belém, mais conhecido como Mosteiro dos Jerónimos, é um mosteiro português, mandado construir no final do século XV pelo rei D. Manuel I e estava entregue à Ordem de São Jerónimo. Situa-se na freguesia de Belém, na cidade e concelho de Lisboa."
      tag="Piloto 05"
      setSelectedPage={() => {}} 
    />
  );
};

export default MosteiroPublic;