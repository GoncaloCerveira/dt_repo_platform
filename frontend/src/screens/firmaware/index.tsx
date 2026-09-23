import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import FW1 from "@/assets/evora/caixas+sensores/sensor.jpeg";
import FW2 from "@/assets/evora/caixas+sensores/animation_sensor.mp4";

const Firmware = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail
      title={t("projects.firmware.title")}
      subtitle={t("projects.firmware.subtitle")}
      media={[
        { url: FW1, type: "image" },
        { url: FW2, type: "video" },
      ]}
      description={
        t("projects.firmware.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        {
          label: t("projects.firmware.mainRepoLabel"),
          url: "https://github.com/nmc-fct/DT4SST-CH.PT/tree/main/firmware/Sources/bin_files",
          type: "web",
        },
        {
          label: t("projects.firmware.devSharepointLabel"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA6lrxKrQesR4FLLw7lnaSuAXK3UqOr7d-3-3YDi-YW3Wg?e=Lriepv",
          type: "external",
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default Firmware;