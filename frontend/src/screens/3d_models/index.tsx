import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";

const Models3D = () => {
  return (
    <ProjectDetail 
      title="Digitalização dos Monumentos e HBIM"
      subtitle="Modelos 3D e Documentação de Património"
      media={[
      ]}
      description={[
        "Este projeto apresenta modelos 3D gerados através de levantamentos rigorosos com drones, sensores Leica e fotogrametria. Estas tecnologias permitem converter a realidade física de monumentos nacionais em malhas geométricas de alta precisão.",
        
        "A pipeline foi aplicada em seis sítios-piloto: Mosteiro dos Jerónimos (Igreja, Claustro e Exterior), Mosteiro de Alcobaça, Museu Nacional do Azulejo, Ruínas Romanas de Milreu, Gruta do Escoural e o Mosteiro de Santa Clara-a-Velha.",
        
        "Um dos destaques é também o HBIM do Mosteiro de Santa Clara-a-Velha. Este modelo vai além da geometria, integrando um conjunto de metadados e detalhes históricos, funcionando como uma base de conhecimento digital para a conservação e estudo do edifício."
      ]}
      links={[
        { 
          label: "Mosteiro dos Jerónimos (Modelos)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Mosteiro de Alcobaça (Modelos)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Museu Nacional do Azulejo (Modelos)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Ruínas Romanas de Milreu (Modelos)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Gruta do Escoural (Modelo Completo)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Mosteiro de Santa Clara-a-Velha (Modelo Completo)", 
          url: "", 
          type: "web" 
        },
        { 
          label: "Mosteiro de Santa Clara-a-Velha (HBIM)", 
          url: "", 
          type: "web" 
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } } 
    />
  );
};

export default Models3D;