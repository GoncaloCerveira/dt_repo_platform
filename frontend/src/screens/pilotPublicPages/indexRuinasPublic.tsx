import PilotDetailPage from ".";
import RRM from "@/assets/pilot_models/rrm.jpg";

const RuinasPublic = () => {
  return (
    <PilotDetailPage
      title="Ruínas Romanas de Milreu"
      image={{ src: RRM }}
      tagKey="pilots.milreu.tag"
      descriptionKey="pilots.milreu.description"
      resultsKey="pilots.milreu.results"
      setSelectedPage={() => {}} 
    />
  );
};

export default RuinasPublic;