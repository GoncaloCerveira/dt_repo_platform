import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import GRUTA1 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 02.jpg";
import GRUTA2 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 03.jpg";
import GRUTA3 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07 - 04.jpg";
import GRUTA4 from "@/assets/escoural/GE - Gruta do Escoural - Preview 2026.05.07.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const EscouralTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.escoural.title");
  const subtitle = t("technologyPages.escoural.subtitle");
  const rawDescription = t("technologyPages.escoural.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: GRUTA1, type: "image" },
        { url: GRUTA2, type: "image" },
        { url: GRUTA3, type: "image" },
        { url: GRUTA4, type: "video" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default EscouralTech;