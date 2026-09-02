import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import FW1 from "@/assets/evora/caixas+sensores/sensor.jpeg";
import FW2 from "@/assets/evora/caixas+sensores/animation_sensor.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const FirmwareTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.firmware.title");
  const subtitle = t("technologyPages.firmware.subtitle");
  const rawDescription = t("technologyPages.firmware.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: FW1, type: "image" },
        { url: FW2, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default FirmwareTech;