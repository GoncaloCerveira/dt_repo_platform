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
          url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FGE%20%2D%20Gruta%20do%20Escoural&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default Escoural;