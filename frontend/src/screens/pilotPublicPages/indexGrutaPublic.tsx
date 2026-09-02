import PilotDetailPage from ".";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";

const GrutaPublic = () => {
  return (
    <PilotDetailPage
      title="Gruta do Escoural"
      image={{ src: GE }}
      tagKey="pilots.gruta.tag"
      descriptionKey="pilots.gruta.description"
      resultsKey="pilots.gruta.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default GrutaPublic;