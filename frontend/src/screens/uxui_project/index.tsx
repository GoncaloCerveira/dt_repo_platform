import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import UI01 from "@/assets/ui_ux_projects/elementosGraficos.png";
import UI02 from "@/assets/ui_ux_projects/prototipo.png";
import UI03 from "@/assets/ui_ux_projects/user-flow.png";

const VisitorFlow = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.visitorFlow.title")}
      subtitle={t("projects.visitorFlow.subtitle")}
      media={[
        { url: UI01, type: "image" },
        { url: UI02, type: "image" },
        { url: UI03, type: "image" },
      ]}
      description={
        t("projects.visitorFlow.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.visitorFlow.docsLinkLabel"), 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC664mC9qJbTacGcUzEM2XDAbrKBvZ7bj5GcRDbLs8Dyc8?e=lDFQ1C", 
          type: "external" 
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default VisitorFlow;