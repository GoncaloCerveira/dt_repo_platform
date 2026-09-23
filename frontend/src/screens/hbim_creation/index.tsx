import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import HBIM01 from "@/assets/locais_opt/hbim_creation.png";
import HBIM02 from "@/assets/locais_opt/hbim_creation2.png";
import HBIM03 from "@/assets/locais_opt/hbim_creation5.png";
import HBIM04 from "@/assets/locais_opt/hbim_creation3.png";
import HBIM05 from "@/assets/locais_opt/hbim_creation4.png";
import HBIM06 from "@/assets/locais_opt/hbim_creation6.png";

const HBIM = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.hbim.title")}
      subtitle={t("projects.hbim.subtitle")}
      media={[
        { url: HBIM01, type: "image" },
        { url: HBIM02, type: "image" },
        { url: HBIM03, type: "image" },
        { url: HBIM04, type: "image" },
        { url: HBIM05, type: "image" },
        { url: HBIM06, type: "image" },
      ]}
      description={
        t("projects.hbim.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        {
          label: t("projects.hbim.jeronimosViewerLabel"),
          url: "https://hbim.coordenadas.eu/?project=jeronimos",
          type: "web"
        },
        {
          label: t("projects.hbim.mscvViewerLabel"),
          url: "https://hbim.coordenadas.eu/?project=mscv",
          type: "web"
        },
        {
          label: t("projects.hbim.ifcDocsLabel"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCW_ig7UOhsQ454OWk-0uEAAf6Bz_88Wsg9NoKgr3PqjDE?e=rQQ9o8",
          type: "external"
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default HBIM;