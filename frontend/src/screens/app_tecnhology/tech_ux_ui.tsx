import { useTranslation } from "react-i18next";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";
import { SelectedPage } from "@/components/types";
import UI01 from "@/assets/ui_ux_projects/elementosGraficos.png";
import UI02 from "@/assets/ui_ux_projects/prototipo.png";
import UI03 from "@/assets/ui_ux_projects/user-flow.png";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const UxUiTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.uxUi.title");
  const subtitle = t("technologyPages.uxUi.subtitle");
  const rawDescription = t("technologyPages.uxUi.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: UI01, type: "image" },
        { url: UI02, type: "image" },
        { url: UI03, type: "image" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default UxUiTech;