import PilotDetailPage from ".";
import RRM from "@/assets/pilot_models/rrm.jpg";

const RuinasPublic = () => {
  return (
    <PilotDetailPage
      title="Ruínas Romanas de Milreu"
      image= {{ src: RRM }}
      description="As Ruínas romanas de Milreu ou Ruínas de Estói são um importante conjunto arqueológico em Estói, no município de Faro, em Portugal. É composto principalmente pela abastada villa romana de Sambada ou Sambata, com termas anexas, e os vários edíficios em redor, incluindo um templo, mausoléus e diversas estruturas industriais e comerciais."
      tag="Piloto 04"
      results={[
        "Capturas aéreas e terrestres (fotogrametria + LiDAR) concluídas",
        "Gêmeo digital modelado em 3D",
        "Reconstrução digital de elementos arquitetônicos (dissertação de mestrado)",
        "Sobreposição do modelo de reconstrução no gêmeo digital",
        "Aplicativo de Realidade Aumentada para leitura arqueológica ao ar livre"
      ]}      
      setSelectedPage={() => {}} 
    />
  );
};

export default RuinasPublic;