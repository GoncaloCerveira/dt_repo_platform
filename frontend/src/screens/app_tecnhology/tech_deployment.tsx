import { SelectedPage } from "@/components/types";
import DATA01_1 from "@/assets/evora/dep1.png";
import DATA01_2 from "@/assets/evora/dep_2.png";
import DATA01_3 from "@/assets/evora/vid_sensor.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

const DeploymentTech = () => {
  return (
    <ProjectDetailPublic
      title="Plataforma de Monitorização Ambiental para preservação Cultural"
      subtitle="Plataforma de Monitorização IoT"
      media={[
        { url: DATA01_1, type: "image" },
        { url: DATA01_2, type: "image" },
        { url: DATA01_3, type: "video" },
      ]}
      description={[
        "O projecto encontra-se a desenvolver uma plataforma cloud para a monitorização ambiental de espaços patrimoniais e culturais, permitindo a recolha, armazenamento e análise contínua de dados provenientes de gateways IoT e sensores distribuídos pelo espaço monitorizado.",

        "A plataforma integra dashboards em tempo real, visualização de séries temporais, mapas interativos, configuração remota de dispositivos e sistemas automáticos de alertas ambientais. O sistema suporta comunicação via MQTT e HTTPS, garantindo redundância e fiabilidade na transmissão dos dados.",

        "Para além da monitorização ambiental, o projeto incorpora ferramentas de inteligência artificial para deteção de anomalias, análise preditiva e apoio ao diagnóstico de conservação preventiva. A infraestrutura foi desenvolvida com Firebase, Google Cloud Run, Firestore e Vertex AI, permitindo elevada escalabilidade e integração com dispositivos IoT de baixo consumo energético."
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default DeploymentTech;