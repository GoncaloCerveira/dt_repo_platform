import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";

const Segmentation = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.segmentation.title")}
      subtitle={t("projects.segmentation.subtitle")}
      media={[
        { url: ImgSeg, type: "image" },
        { url: HBIM, type: "image" },
        { url: HBIM_vid, type: "video" },
      ]}
      description={
        t("projects.segmentation.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.segmentation.githubRepoLabel"), 
          url: "https://github.com/GoncaloCerveira/Pipeline-of-the-project-DT4SST-CH.PT", 
          type: "web" 
        },
        { 
          label: t("projects.segmentation.resultsLabel"), 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDpx7kL6GJ0TZkiiPa4d-m_AXjQ72AT3Aba-WPKbfRRrSY?e=Lrorxw", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default Segmentation;