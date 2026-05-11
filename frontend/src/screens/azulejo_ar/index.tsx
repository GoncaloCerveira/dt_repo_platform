import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";

const ARMNAz = () => {
  return (
    <ProjectDetail 
      title="Aplicação Realidade Aumentada - Museu Nacional do Azulejo"
      subtitle="Deteção de imagens dos monumentos do panorama de Lisboa"
      media={[
        { url: ImgSeg, type: "image" },
        { url: HBIM, type: "image" },
        { url: HBIM_vid, type: "video" },
      ]}
      description={[
        "Aplicação feita em Unity para reconhecimento de imagens de monumentos do panorama de Lisboa no Museu Nacional do Azulejo, para mostrar a informação dos azulejos que estiveram nesses monumentos.",
        "A aplicação utilizado o AR Foundation (package do unity) para fazer o reconhecimento de imagens. O projeto tem uma biblioteca de imagens do panorama, que quando são reconhecidas instanciam elementos de UI para o utilizador interagir e ver a informação sobre o monumento reconhecido.",
        "O projeto contém 3 scenes: \nImageTracking - Tirada da documentação do AR Foundation, tem um exemplo prático de como funciona o image tracking,\nMNAz - Scene principal onde está feito o reconhecimento de imagens do panorama de Lisboa,\nSampleScene - Scene de teste"
      ]}
      links={[
        { 
          label: "Aplicação AR (Projeto e Documentação)", 
          url: "https://unlpt-my.sharepoint.com/shared?id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FAplica%C3%A7%C3%B5es%20AR%20e%20VR%20para%20o%20Museu%20do%20Azulejo%2FAR%20APP%20DT&listurl=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", 
          type: "external" 
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default ARMNAz;