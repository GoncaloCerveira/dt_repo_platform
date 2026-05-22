import PilotDetailPage from ".";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";

const SantaClaraPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro de Santa Clara-a-Velha"
      image= {{ src: MSCV }}
      description="O Mosteiro de Santa Clara de Coimbra, popularmente conhecido como Convento de Santa Clara-a-Velha, localiza-se na margem esquerda do rio Mondego, freguesia de Santa Clara e Castelo Viegas, na cidade, município e distrito de Coimbra, em Portugal. Representa um momento de experimentação do estilo gótico no país."
      tag="Piloto 01"
      setSelectedPage={() => {}} 
    />
  );
};

export default SantaClaraPublic;