import PilotDetailPage from ".";
import MA from "@/assets/pilot_models/ma.jpg";

const AlcobacaPublic = () => {
  return (
    <PilotDetailPage
      title="Real Mosteiro de Santa Maria de Alcobaça"
      image= {{ src: MA }}
      description="O Mosteiro de Alcobaça, também conhecido como Real Mosteiro de Santa Maria de Alcobaça, é um mosteiro situado na cidade de Alcobaça, na região Oeste portuguesa. É a primeira obra plenamente gótica erguida em solo português, tendo sido começada a sua construção em 1178 pelos monges da Ordem de Cister."
      tag="Piloto 03"
      results={[
        "Levantamento com LiDAR terrestre de alta densidade (Leica RTC 360), fotogrametria aérea e terrestre, e múltiplos pontos de digitalização distribuídos",
        "Modelação HBIM, abrangendo o desenvolvimento do gémeo digital, a integração de metadados históricos e a identificação detalhada de elementos arquitetónicos",
        "O projeto piloto centra-se na otimização da gestão arquitetónica e manutenção preventiva, utilizando a monitorização ambiental e dados IoT para garantir a conservação do património"
      ]} 
      setSelectedPage={() => {}} 
    />
  );
};

export default AlcobacaPublic;