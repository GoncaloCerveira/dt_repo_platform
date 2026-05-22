import PilotDetailPage from ".";
import RRM from "@/assets/pilot_models/rrm.jpg";

const RuinasPublic = () => {
  return (
    <PilotDetailPage
      title="Ruínas Romanas de Milreu"
      image= {{ src: RRM }}
      description="As Ruínas romanas de Milreu ou Ruínas de Estói são um importante conjunto arqueológico em Estói, no município de Faro, em Portugal. É composto principalmente pela abastada villa romana de Sambada ou Sambata, com termas anexas, e os vários edíficios em redor, incluindo um templo, mausoléus e diversas estruturas industriais e comerciais."
      tag="Piloto 04"
      setSelectedPage={() => {}} 
    />
  );
};

export default RuinasPublic;