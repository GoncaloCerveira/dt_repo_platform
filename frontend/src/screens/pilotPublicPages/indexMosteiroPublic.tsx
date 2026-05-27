import PilotDetailPage from ".";
import MJ from "@/assets/pilot_models/mj.jpeg";

const MosteiroPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro dos Jerónimos"
      image= {{ src: MJ }}
      description="O Mosteiro de Santa Maria de Belém, mais conhecido como Mosteiro dos Jerónimos, é um mosteiro português, mandado construir no final do século XV pelo rei D. Manuel I e estava entregue à Ordem de São Jerónimo. Situa-se na freguesia de Belém, na cidade e concelho de Lisboa."
      tag="Piloto 05"
      results={[
        "Levantamento detalhado de interiores e exteriores através de fotogrametria aérea e terrestre para a geração de nuvens de pontos de alta densidade",
        "Desenvolvimento de gémeos digitais e foco na otimização de gestão de fluxos e mitigação de impactos ambientais",
        "Integração de sensores IoT para monitorização ambiental contínua e validação dos resultados com gestores e visitantes"
      ]} 
      setSelectedPage={() => {}} 
    />
  );
};

export default MosteiroPublic;