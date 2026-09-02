import { useTranslation } from "react-i18next";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";
import { SelectedPage } from "@/components/types";
import HBIM01 from "@/assets/locais_opt/hbim_creation.png";
import HBIM02 from "@/assets/locais_opt/hbim_creation2.png";
import HBIM03 from "@/assets/locais_opt/hbim_creation5.png";
import HBIM04 from "@/assets/locais_opt/hbim_creation3.png";
import HBIM05 from "@/assets/locais_opt/hbim_creation4.png";
import HBIM06 from "@/assets/locais_opt/hbim_creation6.png";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const HBIMTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.hbim.title");
  const subtitle = t("technologyPages.hbim.subtitle");
  const rawDescription = t("technologyPages.hbim.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: HBIM01, type: "image" },
        { url: HBIM02, type: "image" },
        { url: HBIM03, type: "image" },
        { url: HBIM04, type: "image" },
        { url: HBIM05, type: "image" },
        { url: HBIM06, type: "image" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default HBIMTech;