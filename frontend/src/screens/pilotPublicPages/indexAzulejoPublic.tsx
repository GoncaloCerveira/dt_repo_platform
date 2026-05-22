import PilotDetailPage from ".";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";

const AzuelejoPublic = () => {
  return (
    <PilotDetailPage
      title="Museu Nacional do Azulejo"
      image= {{ src: MNAZ }}
      description="O Museu Nacional do Azulejo, em Lisboa, é um dos mais importantes museus de Portugal, pela sua colecção singular, dedicada ao azulejo, expressão artística diferenciadora da cultura portuguesa, e pelo edifício ímpar em que se encontra instalado, o antigo Convento da Madre de Deus, fundado em 1509 pela rainha D. Leonor."
      tag="Piloto 02"
      setSelectedPage={() => {}} 
    />
  );
};

export default AzuelejoPublic;