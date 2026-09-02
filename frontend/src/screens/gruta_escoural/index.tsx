import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import GRUTA1 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 02.jpg";
import GRUTA2 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 03.jpg";
import GRUTA3 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 04.jpg";
import GRUTA4 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07.mp4";

const Escoural = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.escoural.title")}
      subtitle={t("projects.escoural.subtitle")}
      media={[
        { url: GRUTA1, type: "image" },
        { url: GRUTA2, type: "image" },
        { url: GRUTA3, type: "image" },
        { url: GRUTA4, type: "video" },
      ]}
      description={
        t("projects.escoural.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.escoural.modelAppLinkLabel"), 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD7KqeBYiQ0TKihm3lxHXBUAY-GBmXx4LGYwcEuMeRsgfA?e=ar78es", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default Escoural;