import { useTranslation } from "react-i18next";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";
import { SelectedPage } from "@/components/types";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const VisitorFlowTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.visitorFlow.title");
  const subtitle = t("technologyPages.visitorFlow.subtitle");
  const rawDescription = t("technologyPages.visitorFlow.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default VisitorFlowTech;