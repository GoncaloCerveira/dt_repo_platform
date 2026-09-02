import { useTranslation } from "react-i18next";
import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import MIL1 from "@/assets/Milreu/Milreu04.jpeg";
import MIL2 from "@/assets/Milreu/Milreu05.jpeg";
import MIL3 from "@/assets/Milreu/Milreu06.jpeg";
import MIL4 from "@/assets/Milreu/Milreu07.jpeg";
import MIL5 from "@/assets/Milreu/Milreu08.jpeg";
import MIL6 from "@/assets/Milreu/Milreu09.jpeg";
import MIL7 from "@/assets/Milreu/Milreu3d.png";
import MIL1_vid from "@/assets/Milreu/Milreu.mp4";

// Peristilo
import MIL01_model from "@/assets/Milreu/optimized/Peristilo_final_optimized.glb";
import MIL10_model from "@/assets/Milreu/optimized/Peristilo_Bake_evidence_optimized.glb";

// Atrio
import MIL02_model from "@/assets/Milreu/optimized/Atrio_bake_seccao_optimized.glb";
import MIL04_model from "@/assets/Milreu/optimized/AtrioEvidenc_test_optimized.glb";

// Termas
import MIL03_model from "@/assets/Milreu/optimized/Termas_baked_final_reduced_optimized.glb";
import MIL05_model from "@/assets/Milreu/optimized/Termas_AR_EV_optimized.glb";

// Edificio de Culto
import MIL06_model from "@/assets/Milreu/optimized/Edifício_de_culto_optimized.glb";
import MIL08_model from "@/assets/Milreu/optimized/Edifício_de_culto_evidence_optimized.glb";

// Triclinio
import MIL07_model from "@/assets/Milreu/optimized/Triclinio_baked_optimized.glb";
import MIL09_model from "@/assets/Milreu/optimized/Triclinio_EV_optimized.glb";

const Milreu = () => {
  const { t } = useTranslation();

  return (
    <ProjectDetail
      title={t("projects.milreu.title")}
      subtitle={t("projects.milreu.subtitle")}
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
      description={
        t("projects.milreu.description", {
          returnObjects: true,
        }) as string[]
      }
      links={[
        {
          label: t("projects.milreu.links.peristilo"),
          url: MIL01_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AYJBvswDGRztVGHPxb5sepI?e=5L7Ly2",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL01_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AYJBvswDGRztVGHPxb5sepI?e=5L7Ly2",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL10_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQC_CrA-pTrDRa8uFJXeP6dwAS4Ce54WMV9VWZ3CbmesIYs?e=vg8IPH",
            },
          ],
        },
        {
          label: t("projects.milreu.links.atrio"),
          url: MIL02_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAVR9DHDHZojp1HoBNbmoPg4?e=WhsPrO",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL02_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAVR9DHDHZojp1HoBNbmoPg4?e=WhsPrO",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL04_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAm5xO04zGdQKxddH2Y5FS7ATfdK_zGmWD3OBB0ygEjRYQ?e=ZmlAVm",
            },
          ],
        },
        {
          label: t("projects.milreu.links.termas"),
          url: MIL03_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42AQjakzkPfu9LJeP3i-GABLc?e=B4oODo",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL03_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42AQjakzkPfu9LJeP3i-GABLc?e=B4oODo",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL05_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBZkWrLzvVFRY0dXPA8xPdcAXG3OVstAMeeS863Q9j1unI?e=J0tUKn",
            },
          ],
        },
        {
          label: t("projects.milreu.links.culto"),
          url: MIL06_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1AeIxD2sC71XpHgjQU2Ja6VY?e=Stn8UO",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL06_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1AeIxD2sC71XpHgjQU2Ja6VY?e=Stn8UO",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL08_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQClx47qfyTkTI-0qbR97BiQAak5bx4z4RsdN03aUE_E4us?e=7Kh4S7",
            },
          ],
        },
        {
          label: t("projects.milreu.links.triclinio"),
          url: MIL07_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778Aa7VtU9ZYkjVjJ1MBodfWUE?e=c6tgMW",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL07_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778Aa7VtU9ZYkjVjJ1MBodfWUE?e=c6tgMW",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL09_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDqpyDcibusQIiHQ8n8TUr9AXVNrjF45H1NOsa4GqGv8dA?e=onTzAH",
            },
          ],
        },
        {
          label: t("projects.milreu.links.contentAccess"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCEUnsQKHf2QbvBlmCKJWqiAXNgiKI0nLZhgg0o2zhFS5E?e=3yJ0PX",
          type: "web",
        },
        {
          label: t("projects.milreu.links.arApp"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDDnlLhx4MOQJvWJGRQxwqUAVm9h9umyjWhzq6SZ28oThQ?e=KCCtuu",
          type: "external",
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default Milreu;