import ProjectDetail from "@/components/ProjectTemplate";
import { SelectedPage } from "@/components/types";
import FW1 from "@/assets/evora/caixas+sensores/sensor.jpeg";
import FW2 from "@/assets/evora/caixas+sensores/animation_sensor.mp4";

const Firmware = () => {
  return (
    <ProjectDetail
      title="Firmware para a Plataforma de Monitorização"
      subtitle="Firmware e Infraestrutura IoT"
      media={[
        { url: FW1, type: "image" },
        { url: FW2, type: "video" },
      ]}
      description={[
        "O projeto Metrozero Firmware reúne o conjunto de firmwares utilizados na infraestrutura IoT do sistema Metrozero, incluindo sensores ambientais baseados em STM32WB55 e gateways ESP32-S3 responsáveis pela recolha e sincronização dos dados ambientais.",

        "O sistema suporta atualizações OTA (Over-The-Air), comunicação BLE entre sensores e gateway, armazenamento local em cartão SD e sincronização cloud através de MQTT e HTTPS. A arquitetura foi desenvolvida para cenários de monitorização contínua em património cultural e espaços museológicos.",

        "Para além do firmware principal, o projeto inclui procedimentos completos de flashing, bootloaders, stacks BLE, configuração de memória e documentação de deployment em ambiente real. O sistema foi implementado em campanhas de monitorização nos Jerónimos, suportando múltiplos sensores em simultâneo com gestão remota e atualizações automáticas."
      ]}
      links={[
        {
          label: "Repositório Principal (Código e Documentação)",
          url: "https://github.com/nmc-fct/DT4SST-CH.PT/tree/main/firmware/Sources/bin_files",
          type: "web",
        },
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      }}
    />
  );
};

export default Firmware;