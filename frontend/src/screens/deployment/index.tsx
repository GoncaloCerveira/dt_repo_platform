import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import DATA01_1 from "@/assets/evora/dep1.png";
import DATA01_2 from "@/assets/evora/dep_2.png";
import DATA01_3 from "@/assets/evora/vid_sensor.mp4";

const Deployment = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail
      title={t("projects.deployment.title")}
      subtitle={t("projects.deployment.subtitle")}
      media={[
        { url: DATA01_1, type: "image" },
        { url: DATA01_2, type: "image" },
        { url: DATA01_3, type: "video" },
      ]}
      description={
        t("projects.deployment.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        {
          label: t("projects.deployment.githubRepoLabel"),
          url: "https://github.com/nmc-fct/DT4SST-CH.PT/tree/main/deployment/data01-main",
          type: "web",
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default Deployment;