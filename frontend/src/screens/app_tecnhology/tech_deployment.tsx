import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import DATA01_1 from "@/assets/evora/dep1.png";
import DATA01_2 from "@/assets/evora/dep_2.png";
import DATA01_3 from "@/assets/evora/vid_sensor.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const DeploymentTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.deployment.title");
  const subtitle = t("technologyPages.deployment.subtitle");
  const rawDescription = t("technologyPages.deployment.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: DATA01_1, type: "image" },
        { url: DATA01_2, type: "image" },
        { url: DATA01_3, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default DeploymentTech;