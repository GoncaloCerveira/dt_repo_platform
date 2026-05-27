import PilotDetailPage from ".";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";

const SantaClaraPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro de Santa Clara-a-Velha"
      image= {{ src: MSCV }}
      description="O Mosteiro de Santa Clara de Coimbra, popularmente conhecido como Convento de Santa Clara-a-Velha, localiza-se na margem esquerda do rio Mondego, freguesia de Santa Clara e Castelo Viegas, na cidade, município e distrito de Coimbra, em Portugal. Representa um momento de experimentação do estilo gótico no país."
      tag="Piloto 01"
      results={["Capturas de fotogrametria aérea e terrestre e LiDAR concluídas", "Modelagem completa de gêmeos digitais", "Simulação histórica de inundações em desenvolvimento", "Sobreposição de cenários de inundação com dados históricos", "Análise do impacto das inundações no abandono do edifício"]}
      setSelectedPage={() => {}} 
    />
  );
};

export default SantaClaraPublic;