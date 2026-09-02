import PilotDetailPage from ".";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";

const AzuelejoPublic = () => {
  return (
    <PilotDetailPage
      title="Museu Nacional do Azulejo"
      image={{ src: MNAZ }}
      tagKey="pilots.azulejo.tag"
      descriptionKey="pilots.azulejo.description"
      resultsKey="pilots.azulejo.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default AzuelejoPublic;