import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import UI01 from "@/assets/ui_ux_projects/elementosGraficos.png";
import UI02 from "@/assets/ui_ux_projects/prototipo.png";
import UI03 from "@/assets/ui_ux_projects/user-flow.png";

const VisitorFlow = () => {
  return (
    <ProjectDetail 
      title="Desenvolvimento de UX e UI para os projetos do Digital Twins"
      subtitle="Experiência e Interface do Utilizador"
      media={[
        { url: UI01, type: "image" },
        { url: UI02, type: "image" },
        { url: UI03, type: "image" },
      ]}
      description={[
        "O processo de desenvolvimento da experiência do utilizador (UX) e da interface do utilizador (UI) começou com a compreensão dos objetivos do projeto. Isto foi feito junto da equipa do Digital Twins e dos responsáveis pelos Monumentos. Após serem assinalados os principais objetivos para ambas as partes, teve se em consideração o público-alvo e as outras condicionantes do projeto.",
        "Foram então desenvolvidos diversos user-flows que tentaram responder às problemáticas indicadas e à criação de uma boa experiência para os utilizadores desde o primeiro momento.",
        "Depois destes percursos definidos começou se a dar materialização aos mesmos através de wireframes e protótipos de baixa fidelidade para se poder perceber e melhorar as soluções propostas. Estes protótipos também serviram de ponte entre a conceptualização e a implementação final. Num dos projetos foi ainda feito um estudo de utilizadores para poder dar ainda mais contexto e melhorias à proposta.",
        "Depois da experiência definida começou o processo de trazer estas soluções para a realidade. Para isto teve se em consideração as soluções e as condicionantes que daí advinham assim como o local de utilização destas aplicações. Tentou-se então criar uma materialização que fosse facilmente reconhecida, coerente, que remetesse para materiais reais e, por fim, que fizesse sentido com o contexto de cada parte do projeto. Nesta fase acrescentou-se se mais partes do projeto e foi mais uma vez necessário perceber os seus contextos.",
        "Começou-se por definir, para cada uma das aplicações, uma palete de cores e fontes a serem utilizadas. Foram então definidos e organizados todos os elementos interativos que cada aplicação necessitaria assim como o layout de cada página principal das diversas aplicações. Depois de definidos foram padronizados para manterem uma linguagem coerente dentro de cada aplicação.",
        "Por fim foram criados diversos guias de implementação para ajudar os colegas responsáveis pela implementação final a corretamente aplicarem os elementos gráficos criados."
      ]}
      links={[
        { 
          label: "Desenvolvimento, Assets e Documentação Técnica (OneDrive)", 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC664mC9qJbTacGcUzEM2XDAawOA1luYwjvwcYJAeykfvY", 
          type: "external" 
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default VisitorFlow;