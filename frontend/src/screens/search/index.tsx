import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSearchChat1 from "@/assets/search_chat_1.png";
import ImgSearchChat2 from "@/assets/search_chat_2.png";

const Search = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.search.title")}
      subtitle={t("projects.search.subtitle")}
      media={[
        { url: ImgSearchChat1, type: "image" },
        { url: ImgSearchChat2, type: "image" },
      ]}
      description={
        t("projects.search.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.search.githubRepoLabel"), 
          url: "https://github.com/tjfernandes/DT4SST-CH.BIM_extraction_and_search", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default Search;