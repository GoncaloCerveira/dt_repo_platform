import ProjectDetailPublic from "@/components/ProjectTemplatePublic";
import { SelectedPage } from "@/components/types";

const VisitorFlowTech = () => {
  return (
    <ProjectDetailPublic 
      title="Monitorização de Fluxo e Ocupação - Mosteiro dos Jerónimos"
      subtitle="IoT, Edge Computing & Privacidade"
      media={[
      ]}
      description={[
        "Este projeto foca-se na monitorização inteligente do fluxo de visitantes no Mosteiro dos Jerónimos, assente num princípio rigoroso de 'Privacy by Design'. A solução utiliza sensores Time-of-Flight (VL53L1X) e mmWave de 24 GHz para capturar métricas de ocupação sem nunca recolher imagens faciais, identidades ou identificadores de dispositivos móveis. A infraestrutura de firmware foi desenhada para microcontroladores STM32WB55, garantindo o processamento local (Edge) dos dados antes do envio de agregados anónimos.",
        "O subsistema de contagem implementa uma lógica de sensores duplos ToF com uma frequência de amostragem de 20 Hz. Para garantir a precisão, os sinais passam por um filtro de mediana e uma máquina de estados que valida a direção do movimento (In/Out) com base em diferenciais temporais (tA < tB). O algoritmo inclui períodos refratários de 1200ms e timeouts de direção para filtrar eventos espúrios, permitindo uma gestão de ocupação em tempo real com baixo consumo energético e alta fiabilidade em zonas de passagem.",
        "Para a geração de Mapas de Calor Anónimos, integrámos radares mmWave via UART que mapeiam a presença humana numa grelha de 12 células (4x3). Através de um filtro EMA (Exponential Moving Average) com alpha de 0.35, o sistema suaviza flutuações de sinal e identifica zonas de maior permanência. Os dados são agregados em janelas de 30 segundos e transmitidos via gateways ESP32-S3 através de protocolos MQTT e BLE, suportando gestão remota e atualizações OTA (Over-the-Air) para manutenção da rede de sensores."
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default VisitorFlowTech;