import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";

const VisitorFlow = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.visitorFlow2.title")}
      subtitle={t("projects.visitorFlow2.subtitle")}
      media={[]}
      description={
        t("projects.visitorFlow2.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.visitorFlow2.docsLinkLabel"), 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBrcHqF5MY1RKSKjSjdpeSCAXGg1TLa0X7KLEgmRTHhhE0?e=O4jj5P", 
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