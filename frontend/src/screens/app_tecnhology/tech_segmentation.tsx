import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

const SegmentationTech = () => {
  return (
    <ProjectDetailPublic
      title="Segmentação para HBIMs"
      subtitle="Integração Semântica e Enriquecimento"
      media={[
        { url: ImgSeg, type: "image" },
        { url: HBIM, type: "image" },
        { url: HBIM_vid, type: "video" },
      ]}
      description={[
        "Esta pipeline foca-se na automação da captura de dados através da abordagem 'Scan-to-BIM'. O processo inicia-se com a Segmentação 2D, onde utilizamos o modelo SAM3 (Segment Anything Model) assistido por prompts de classes. Para melhorar a precisão, integrámos um LLM Multimodal que filtra ruído e melhora a inferência de materiais, permitindo identificar artefactos específicos com base no acervo visual do museu.",
        "Na segunda fase, ocorre a Projeção de Rótulos para a Nuvem de Pontos. Através dos parâmetros intrínsecos e extrínsecos da câmara, projetamos os rótulos das máscaras 2D diretamente nos pontos 3D. A consistência semântica da nuvem é garantida por um processo de fusão multi-vista baseado em 'majority voting', que resolve discrepâncias entre diferentes perspetivas fotográficas.",
        "Finalmente, procedemos à Geração do Modelo HBIM (Heritage Building Information Modeling). A nuvem de pontos segmentada é limpa e simplificada para otimização de performance, agrupando classes em formas geométricas fundamentais. O resultado é um Digital Twin rigoroso em formato BIM, que inclui relações espaciais complexas (IFCRelations) e metadados métricos precisos para a gestão do edíficio."
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default SegmentationTech;