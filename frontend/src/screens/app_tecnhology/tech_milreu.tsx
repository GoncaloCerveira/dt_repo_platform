import { SelectedPage } from "@/components/types";
import MIL1 from "@/assets/Milreu/Milreu04.jpeg";
import MIL2 from "@/assets/Milreu/Milreu05.jpeg";
import MIL3 from "@/assets/Milreu/Milreu06.jpeg";
import MIL4 from "@/assets/Milreu/Milreu07.jpeg";
import MIL5 from "@/assets/Milreu/Milreu08.jpeg";
import MIL6 from "@/assets/Milreu/Milreu09.jpeg";
import MIL7 from "@/assets/Milreu/Milreu3d.png";
import MIL1_vid from "@/assets/Milreu/Milreu.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

const MilreuTech = () => {
  return (
    <ProjectDetailPublic 
      title="Rescontrução Ruínas Romanas de Milreu"
      subtitle="Experiências Imersivas"
      media={[
        { url: MIL1, type: "image" },
        { url: MIL2, type: "image" },
        { url: MIL3, type: "image" },
        { url: MIL4, type: "image" },
        { url: MIL5, type: "image" },
        { url: MIL6, type: "image" },
        { url: MIL7, type: "image" },
        { url: MIL1_vid, type: "video" },
      ]}
      description={[
        "A reconstrução de Milreu parte da recolha documental de referências históricas e arqueológicas para o levantamento do espaço. O projeto pretende a construção de vários espaços das Ruínas Romanas de Milreu (RRM), tanto no exterior como no interior. Isto, com o objetivo de aprimorar a experiência dos visitantes proporcionando uma experiência que permita uma melhor exploração do espaço, maior envolvência do público e, também, uma mediação museológica que permita valorizar ainda mais o seu valor histórico, artístico e cultural.", 
        "Para o efeito, realizam-se as reconstruções tridimensionais através do Blender, uma aplicação open source, que permite a criação dos modelos 3D, atribuição de texturas e criação de animações. O programa facilita, também, a importação de modelos tridimensionais de objetos que foram digitalizados no projeto Património 360º e que integraram as RRM, bem como, a exportação de imagens renderizadas para infografias e criação de materiais audiovisuais.",
        "Para além das imagens disponíveis, é possível consultar o modelo tridimensional no Blender. Deverá ser instalada a versão mais recente do programa e abrir o documento em anexo."
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default MilreuTech;