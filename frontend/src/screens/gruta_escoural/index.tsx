import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import GRUTA1 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 02.jpg";
import GRUTA2 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 03.jpg";
import GRUTA3 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 04.jpg";
import GRUTA4 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07.mp4";

const Escoural = () => {
  return (
    <ProjectDetail 
      title="Segmentação para HBIMs"
      subtitle="Integração Semântica e Enriquecimento"
      media={[
        { url: GRUTA1, type: "image" },
        { url: GRUTA2, type: "image" },
        { url: GRUTA3, type: "image" },
        { url: GRUTA4, type: "video" },
      ]}
      description={[
        "Visualização imersiva da Gruta do Escoural, baseada num modelo captado com recurso a fotogrametria e laser-scanning. Com recurso a um motor de jogo, o modelo da gruta é iluminado em tempo real de forma foto-realística e os utilizadores podem explorar as diferentes áreas de forma interativa numa perspetiva de primeira pessoa."  
      ]}
      links={[
        { 
          label: "Scripts de Teste e Projeções", 
          url: "", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default Escoural;