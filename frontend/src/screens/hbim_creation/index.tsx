import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import HBIM01 from "@/assets/locais_opt/hbim_creation.png";
import HBIM02 from "@/assets/locais_opt/hbim_creation2.png";
import HBIM03 from "@/assets/locais_opt/hbim_creation5.png";
import HBIM04 from "@/assets/locais_opt/hbim_creation3.png";
import HBIM05 from "@/assets/locais_opt/hbim_creation4.png";
import HBIM06 from "@/assets/locais_opt/hbim_creation6.png";

const HBIM = () => {
  return (
    <ProjectDetail 
      title="Desenvolvimento de HBIMs"
      subtitle="Processamento e Demonstração de Dados: Jerónimos e Santa Clara-a-Velha"
      media={[
        { url: HBIM01, type: "image" },
        { url: HBIM02, type: "image" },
        { url: HBIM03, type: "image" },
        { url: HBIM04, type: "image" },
        { url: HBIM05, type: "image" },
        { url: HBIM06, type: "image" },
      ]}
      description={[
        "No âmbito deste projeto, foi desenvolvida uma metodologia de modelação HBIM (Historic Building Information Modeling) e documentação de patologias focada nos casos de estudo do Mosteiro dos Jerónimos e do Mosteiro de Santa Clara-a-Velha. O processo assenta na utilização de nuvens de pontos tridimensionais georreferenciadas como referência métrica fundamental, permitindo a construção e deformação de elementos-tipo paramétricos (paredes, vigas, pilares) até uma aproximação rigorosa das superfícies reais dos edifícios.",
        "Para o Mosteiro de Santa Clara-a-Velha, converteu-se o extenso arquivo vetorial DWG (1998-2008) diretamente em elementos IFC tridimensionais via scripts Python (ifcopenshell), preservando a classificação por camadas e criando um registo semântico de danos e intervenções. Já no Mosteiro dos Jerónimos, processaram-se levantamentos gráficos raster de 1999 através da extração e classificação automática de tramas de patologia por filtros de textura e projeção de raios sobre o modelo 3D, gerando anotações semânticas normalizadas segundo as taxonomias HeritageCare e Damage Ontology.",
        "Todos os modelos IFC e os seus metadados (incluindo mais de 150 documentos históricos e relatórios) estão integrados num grafo de conhecimento e numa plataforma de visualização web aberta. O sistema democratiza o acesso ao registo patrimonial através de qualquer navegador, permitindo consultas espaciais, interrogações SPARQL e novos fluxos de trabalho de conservação — desde a anotação de danos in situ via mobile até à exportação de tópicos BCF para gestão de obras."
      ]}
      links={[
        {
          label: "Visualizador HBIM — Mosteiro dos Jerónimos",
          url: "https://hbim.coordenadas.eu/?project=jeronimos",
          type: "web"
        },
        {
          label: "Visualizador HBIM — Mosteiro de Santa Clara-a-Velha",
          url: "https://hbim.coordenadas.eu/?project=mscv",
          type: "web"
        },
        {
          label: "Estruturas IFC e documentação (OneDrive)",
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCW_ig7UOhsQ454OWk-0uEAAbxyyEYQ6LdvOeCZllebBJA?e=L6Fa3H",
          type: "external"
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default HBIM;