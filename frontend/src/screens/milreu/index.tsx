import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import MIL1 from "@/assets/Milreu/Milreu04.jpeg";
import MIL2 from "@/assets/Milreu/Milreu05.jpeg";
import MIL3 from "@/assets/Milreu/Milreu06.jpeg";
import MIL4 from "@/assets/Milreu/Milreu07.jpeg";
import MIL5 from "@/assets/Milreu/Milreu08.jpeg";
import MIL6 from "@/assets/Milreu/Milreu09.jpeg";
import MIL7 from "@/assets/Milreu/Milreu3d.png";
import MIL1_vid from "@/assets/Milreu/Milreu.mp4";

// Peristilo
import MIL01_model from "@/assets/Milreu/optimized/Peristilo_final_optimized.glb";
import MIL10_model from "@/assets/Milreu/optimized/Peristilo_Bake_evidence_optimized.glb";

// Atrio
import MIL02_model from "@/assets/Milreu/optimized/Atrio_bake_seccao_optimized.glb";
import MIL04_model from "@/assets/Milreu/optimized/AtrioEvidenc_test_optimized.glb";

// Termas
import MIL03_model from "@/assets/Milreu/optimized/Termas_baked_final_reduced_optimized.glb";
import MIL05_model from "@/assets/Milreu/optimized/Termas_AR_EV_optimized.glb";

// Edificio de Culto
import MIL06_model from "@/assets/Milreu/optimized/Edifício_de_culto_optimized.glb";
import MIL08_model from "@/assets/Milreu/optimized/Edifício_de_culto_evidence_optimized.glb";

// Triclinio
import MIL07_model from "@/assets/Milreu/optimized/Triclinio_baked_optimized.glb";
import MIL09_model from "@/assets/Milreu/optimized/Triclinio_EV_optimized.glb";

const Milreu = () => {
  return (
    <ProjectDetail
      title="Reconstrução Ruínas Romanas de Milreu"
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
        "Para além das imagens disponíveis, é possível consultar o modelo tridimensional no Blender. Deverá ser instalada a versão mais recente do programa e abrir o documento em anexo.",
      ]}
      links={[
        {
          label: "Ver Modelo 3D (Peristilo)",
          url: MIL01_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AYJBvswDGRztVGHPxb5sepI?e=5L7Ly2",
          type: "3d-model",
          versions: [
            {
              label: "Normal",
              url: MIL01_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AYJBvswDGRztVGHPxb5sepI?e=5L7Ly2",
            },
            {
              label: "Evidência Histórico-Arqueológica",
              url: MIL10_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQC_CrA-pTrDRa8uFJXeP6dwAS4Ce54WMV9VWZ3CbmesIYs?e=vg8IPH", 
            },
          ],
        },
        {
          label: "Ver Modelo 3D (Átrio)",
          url: MIL02_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAVR9DHDHZojp1HoBNbmoPg4?e=WhsPrO",
          type: "3d-model",
          versions: [
            {
              label: "Normal",
              url: MIL02_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAVR9DHDHZojp1HoBNbmoPg4?e=WhsPrO",
            },
            {
              label: "Evidência Histórico-Arqueológica",
              url: MIL04_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAm5xO04zGdQKxddH2Y5FS7ATfdK_zGmWD3OBB0ygEjRYQ?e=ZmlAVm",
            },
          ],
        },
        {
          label: "Ver Modelo 3D (Termas)",
          url: MIL03_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42AQjakzkPfu9LJeP3i-GABLc?e=B4oODo",
          type: "3d-model",
          versions: [
            {
              label: "Normal",
              url: MIL03_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42AQjakzkPfu9LJeP3i-GABLc?e=B4oODo",
            },
            {
              label: "Evidência Histórico-Arqueológica",
              url: MIL05_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBZkWrLzvVFRY0dXPA8xPdcAXG3OVstAMeeS863Q9j1unI?e=J0tUKn", 
            },
          ],
        },
        {
          label: "Ver Modelo 3D (Edifício de Culto)",
          url: MIL06_model,
          fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1AeIxD2sC71XpHgjQU2Ja6VY?e=Stn8UO", 
          type: "3d-model",
          versions: [
            {
              label: "Normal",
              url: MIL06_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1AeIxD2sC71XpHgjQU2Ja6VY?e=Stn8UO", 
            },
            {
              label: "Evidência Histórico-Arqueológica",
              url: MIL08_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQClx47qfyTkTI-0qbR97BiQAak5bx4z4RsdN03aUE_E4us?e=7Kh4S7", 
            },
          ],
        },
        {
          label: "Ver Modelo 3D (Triclínio)",
          url: MIL07_model,
          fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778Aa7VtU9ZYkjVjJ1MBodfWUE?e=c6tgMW", 
          type: "3d-model",
          versions: [
            {
              label: "Normal",
              url: MIL07_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778Aa7VtU9ZYkjVjJ1MBodfWUE?e=c6tgMW", 
            },
            {
              label: "Evidência Histórico-Arqueológica",
              url: MIL09_model,
              fullModelUrl: "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDqpyDcibusQIiHQ8n8TUr9AXVNrjF45H1NOsa4GqGv8dA?e=onTzAH",
            },
          ],
        },
        {
          label: "Acesso ao modelo de reconstrução (.blend)",
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCEUnsQKHf2QbvBlmCKJWqiAb0CI7RZCz5j05tqQ2z9hXA?e=rx0IUg",
          type: "web",
        },
        {
          label: "Aplicação de realidade aumentada das Ruínas Romanas de Milreu",
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDDnlLhx4MOQJvWJGRQxwqUAVm9h9umyjWhzq6SZ28oThQ?e=KCCtuu",
          type: "external",
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default Milreu;