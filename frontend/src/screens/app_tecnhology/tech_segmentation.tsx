import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import ImgSeg from "@/assets/segmentation.png";
import HBIM from "@/assets/hbim.jpg";
import HBIM_vid from "@/assets/hbim.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const SegmentationTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.segmentation.title");
  const subtitle = t("technologyPages.segmentation.subtitle");
  const rawDescription = t("technologyPages.segmentation.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: ImgSeg, type: "image" },
        { url: HBIM, type: "image" },
        { url: HBIM_vid, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default SegmentationTech;