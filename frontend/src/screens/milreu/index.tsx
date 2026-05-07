import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import MIL1 from "@/assets/Milreu/Milreu01.png";
import MIL2 from "@/assets/Milreu/Milreu02.png";
import MIL3 from "@/assets/Milreu/Milreu03.png";
import MIL4 from "@/assets/Milreu/Milreu3d.png";
import MIL1_vid from "@/assets/Milreu/Milreu.mp4";

const Milreu = () => {
  return (
    <ProjectDetail 
      title="Rescontrução Ruínas Romanas de Milreu"
      subtitle="Experiências Imersivas"
      media={[
        { url: MIL1, type: "image" },
        { url: MIL2, type: "image" },
        { url: MIL3, type: "image" },
        { url: MIL4, type: "image" },
        { url: MIL1_vid, type: "video" },
      ]}
      description={[
        "A reconstrução de Milreu parte da recolha documental de referências históricas e arqueológicas para o levantamento do espaço. O projeto pretende a construção de vários espaços das Ruínas Romanas de Milreu (RRM), tanto no exterior como no interior. Isto, com o objetivo de aprimorar a experiência dos visitantes proporcionando uma experiência que permita uma melhor exploração do espaço, maior envolvência do público e, também, uma mediação museológica que permita valorizar ainda mais o seu valor histórico, artístico e cultural.", 
        "Para o efeito, realizam-se as reconstruções tridimensionais através do Blender, uma aplicação open source, que permite a criação dos modelos 3D, atribuição de texturas e criação de animações. O programa facilita, também, a importação de modelos tridimensionais de objetos que foram digitalizados no projeto Património 360º e que integraram as RRM, bem como, a exportação de imagens renderizadas para infografias e criação de materiais audiovisuais.",
        "Para além das imagens disponíveis, é possível consultar o modelo tridimensional no Blender. Deverá ser instalada a versão mais recente do programa e abrir o documento em anexo."
      ]}
      links={[
        { 
          label: "Acesso ao modelo (.blend)", 
          url: "https://unlpt-my.sharepoint.com/shared?listurl=https%3A%2F%2Funlpt%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments&id=%2Fpersonal%2Fmgv%5Ffct%5Funl%5Fpt%2FDocuments%2FHedge%2FHedge%5FDrive%5FMGV%2FDT%2FCodeAndSpecifications%2FMilreu&viewid=eee1161c%2D99de%2D42d0%2D85c1%2D774f3c3d8ab7", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default Milreu;