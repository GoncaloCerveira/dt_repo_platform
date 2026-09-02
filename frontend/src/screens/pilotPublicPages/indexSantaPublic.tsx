import PilotDetailPage from ".";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";

const SantaClaraPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro de Santa Clara-a-Velha"
      image={{ src: MSCV }}
      tagKey="pilots.santaClara.tag"
      descriptionKey="pilots.santaClara.description"
      resultsKey="pilots.santaClara.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default SantaClaraPublic;