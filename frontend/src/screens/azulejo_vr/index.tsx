import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";

const VRMNAz = () => {
  return (
    <ProjectDetail 
      title="Aplicação Realidade Virtual - Museu Nacional do Azulejo"
      subtitle="Visualização dos espaços onde os Azulejos já estiveram"
      media={[
        { url: ImgSeg, type: "image" },
        { url: HBIM, type: "image" },
        { url: HBIM_vid, type: "video" },
      ]}
      description={[
        "O projeto de VR para o museu do azulejo utiliza portais para conectar ambientes que estão em camadas diferentes (no unity associamos layers para esconder ou mostrar ambientes virtuais)",
        "O projeto conta com 3 scenes:\n- Hedge App Scene - Contem a aplicação com a visita prolongado do museu, com os vários textos dos azulejos, e acesso através de portais para 3 modelos: jardim das amoreiras, palácio das Galveias e igreja são Lourenço.\n- Quick Version - Igual a Hedge App Scene, mas sem o texto dos azulejos, focando-se só na transição entre ambientes\n- Sample Scene - Scene de testes",
        "O projeto usa também o meta sdk para fazer a integração com os oculus meta quest 3S, usando tecnologia como o teleporte com gestos de mão ou comandos para locomover-se no ambiente."
      ]}
      links={[
        { 
          label: "Aplicação VR (Projeto e Documentação)", 
          url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FProjectos%2FAplica%C3%A7%C3%B5es%20AR%20e%20VR%20para%20o%20Museu%20do%20Azulejo%2FVR%20APP%20DT&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", 
          type: "external" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default VRMNAz;