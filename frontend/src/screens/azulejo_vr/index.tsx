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
          label: "Repositório Principal (Pipeline e Documentação)", 
          url: "https://github.com/GoncaloCerveira/Pipeline-of-the-project-DT4SST-CH.PT", 
          type: "web" 
        },
        { 
          label: "Scripts de Teste e Projeções", 
          url: "https://github.com/GoncaloCerveira/DT4SST-CH.Projections", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default VRMNAz;