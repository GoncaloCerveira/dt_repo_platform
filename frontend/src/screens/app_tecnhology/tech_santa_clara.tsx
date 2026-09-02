import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import SimSantaClara1 from "@/assets/sim_santa_clara_1.png";
import SimSantaClara2 from "@/assets/sim_santa_clara_2.png";
import VideoSantaClara from "@/assets/sim_santa_clara_video.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const SantaClaraTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.santaClara.title");
  const subtitle = t("technologyPages.santaClara.subtitle");
  const rawDescription = t("technologyPages.santaClara.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: SimSantaClara1, type: "image" },
        { url: SimSantaClara2, type: "image" },
        { url: VideoSantaClara, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default SantaClaraTech;