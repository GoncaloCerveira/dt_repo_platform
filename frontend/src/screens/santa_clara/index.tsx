import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import SimSantaClara1 from "@/assets/sim_santa_clara_1.png";
import SimSantaClara2 from "@/assets/sim_santa_clara_2.png";
import VideoSantaClara from "@/assets/sim_santa_clara_video.mp4";

const SantaClara = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail 
      title={t("projects.santaClara.title")}
      subtitle={t("projects.santaClara.subtitle")}
      media={[
        { url: SimSantaClara1, type: "image" },
        { url: SimSantaClara2, type: "image" },
        { url: VideoSantaClara, type: "video" }
      ]}
      description={
        t("projects.santaClara.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        { 
          label: t("projects.santaClara.driveLinkLabel"), 
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCz7yVk_fSLS6ihc9ugyR8ZAVyMpluk41JK4Ren8JPnc7U?e=EfNtbl", 
          type: "web" 
        }
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}    
    />
  );
};

export default SantaClara;