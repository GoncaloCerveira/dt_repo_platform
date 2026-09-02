import PilotDetailPage from ".";
import MA from "@/assets/pilot_models/ma.jpg";

const AlcobacaPublic = () => {
  return (
    <PilotDetailPage
      title="Real Mosteiro de Santa Maria de Alcobaça"
      image={{ src: MA }}
      tagKey="pilots.alcobaca.tag"
      descriptionKey="pilots.alcobaca.description"
      resultsKey="pilots.alcobaca.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default AlcobacaPublic;