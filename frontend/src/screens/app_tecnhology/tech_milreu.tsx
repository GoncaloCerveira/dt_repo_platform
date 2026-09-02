import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import MIL1 from "@/assets/Milreu/Milreu04.jpeg";
import MIL2 from "@/assets/Milreu/Milreu05.jpeg";
import MIL3 from "@/assets/Milreu/Milreu06.jpeg";
import MIL4 from "@/assets/Milreu/Milreu07.jpeg";
import MIL5 from "@/assets/Milreu/Milreu08.jpeg";
import MIL6 from "@/assets/Milreu/Milreu09.jpeg";
import MIL7 from "@/assets/Milreu/Milreu3d.png";
import MIL1_vid from "@/assets/Milreu/Milreu.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const MilreuTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.milreu.title");
  const subtitle = t("technologyPages.milreu.subtitle");
  const rawDescription = t("technologyPages.milreu.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: MIL1, type: "image" },
        { url: MIL2, type: "image" },
        { url: MIL3, type: "image" },
        { url: MIL4, type: "image" },
        { url: MIL5, type: "image" },
        { url: MIL6, type: "image" },
        { url: MIL7, type: "image" },
        { url: MIL1_vid, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default MilreuTech;