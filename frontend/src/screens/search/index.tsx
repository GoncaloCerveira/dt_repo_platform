import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSearchChat1 from "@/assets/search_chat_1.png";
import ImgSearchChat2 from "@/assets/search_chat_2.png";

const Search = () => {
  return (
    <ProjectDetail 
      title="Pesquisa para HBIMs"
      subtitle="Extração de Informação HBIM e Consulta Conversacional"
      media={[
        { url: ImgSearchChat1, type: "image" },
        { url: ImgSearchChat2, type: "image" },
      ]}
      description={[
        "Este projeto é uma ferramenta para consultar e explorar modelos digitais de edifícios através de uma interface conversacional. Em vez de obrigar o utilizador a navegar manualmente por ficheiros BIM/HBIM complexos, a aplicação permite fazer perguntas em linguagem natural sobre os elementos do modelo, como paredes, escadas, materiais, pisos, classificações ou quantidades.",
        "A solução transforma a informação técnica do modelo num formato pesquisável e depois disponibiliza-a através de um assistente. O utilizador pode, por exemplo, pedir listas de elementos, fazer perguntas sobre características específicas, obter contagens por tipo de elemento ou material, e pedir mais detalhes sobre um resultado encontrado.",
        "No geral, o projeto procura tornar a informação BIM mais acessível, rápida de consultar e útil para análise. É especialmente relevante para contextos de arquitetura, engenharia, património construído e gestão de edifícios, onde existe muita informação técnica associada aos modelos, mas nem sempre é fácil encontrá-la ou interpretá-la diretamente."
      ]}
      links={[
        { 
          label: "Repositório Principal (Pipeline e Documentação)", 
          url: "https://github.com/tjfernandes/DT4SST-CH.BIM_extraction_and_search", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default Search;