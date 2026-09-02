import PilotDetailPage from ".";
import MJ from "@/assets/pilot_models/mj.jpeg";

const MosteiroPublic = () => {
  return (
    <PilotDetailPage
      title="Mosteiro dos Jerónimos"
      image={{ src: MJ }}
      tagKey="pilots.jeronimos.tag"
      descriptionKey="pilots.jeronimos.description"
      resultsKey="pilots.jeronimos.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default MosteiroPublic;