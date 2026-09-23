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
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AdyPCpbs5cKtr4PPE3bsI8Y?e=nTobeQ",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL01_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAHH7TkwiWYQJ0oAwXp-N62AdyPCpbs5cKtr4PPE3bsI8Y?e=nTobeQ",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL10_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQC_CrA-pTrDRa8uFJXeP6dwAeRDJ2uMGPcpGse2kQ-6oZU?e=aLKKJ5",
            },
          ],
        },
        {
          label: t("projects.milreu.links.atrio"),
          url: MIL02_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAX4lHxx_NPgw8nzV8_rYd4w?e=zQ2q5d",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL02_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCZvR39UKS3S51mqwi2T5CUAX4lHxx_NPgw8nzV8_rYd4w?e=zQ2q5d",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL04_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQAm5xO04zGdQKxddH2Y5FS7AWf_BMrknB3GP98caDgrkWs?e=0UdXiw",
            },
          ],
        },
        {
          label: t("projects.milreu.links.termas"),
          url: MIL03_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42ARQDGC2Jy9qLhOBGKcWomU4?e=07udin",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL03_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBs5u_DEV-pQ6XZmnsq3v42ARQDGC2Jy9qLhOBGKcWomU4?e=07udin",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL05_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQBZkWrLzvVFRY0dXPA8xPdcAfgiLjv3EKVasoLbdL6a5i8?e=QG3fZu",
            },
          ],
        },
        {
          label: t("projects.milreu.links.culto"),
          url: MIL06_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1ARVI-m4qpxXDDtM2F59XJyQ?e=EvBJmn",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL06_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQACZIol8B8nSp8T_UOiL4-1ARVI-m4qpxXDDtM2F59XJyQ?e=EvBJmn",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL08_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQClx47qfyTkTI-0qbR97BiQAR9ccxayDppuHv6SaE6ap6Y?e=ghXYaF",
            },
          ],
        },
        {
          label: t("projects.milreu.links.triclinio"),
          url: MIL07_model,
          fullModelUrl:
            "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778AXOhYANZ-xnpOKVzqJNfmBY?e=BqzaAx",
          type: "3d-model",
          versions: [
            {
              label: t("projects.milreu.versions.normal"),
              url: MIL07_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDmQaAuSvevRIeuSZqvv778AXOhYANZ-xnpOKVzqJNfmBY?e=BqzaAx",
            },
            {
              label: t("projects.milreu.versions.evidence"),
              url: MIL09_model,
              fullModelUrl:
                "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQDqpyDcibusQIiHQ8n8TUr9AWsocnTY933XrX5KHbtwn4k?e=XcnYo9",
            },
          ],
        },
        {
          label: t("projects.milreu.links.contentAccess"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCEUnsQKHf2QbvBlmCKJWqiAXeZ1uYowZvywUrr2IJbmHc?e=mHNgz0",
          type: "web",
        },
        {
          label: t("projects.milreu.links.arApp"),
          url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBeHjJ83ZwBQLaSaOnF5xMaAc9dUuFduarVBOmG9PhpYeg?e=vdsCrY",
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