import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import ImgSearchChat1 from "@/assets/search_chat_1.png";
import ImgSearchChat2 from "@/assets/search_chat_2.png";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const SearchTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const title = t("technologyPages.search.title");
  const subtitle = t("technologyPages.search.subtitle");
  const rawDescription = t("technologyPages.search.paragraphs", { returnObjects: true });
  const description = Array.isArray(rawDescription) ? (rawDescription as string[]) : [];

  return (
    <ProjectDetailPublic
      title={title}
      subtitle={subtitle}
      media={[
        { url: ImgSearchChat1, type: "image" },
        { url: ImgSearchChat2, type: "image" },
      ]}
      description={description}
      setSelectedPage={setSelectedPage || (() => {})}
    />
  );
};

export default SearchTech;