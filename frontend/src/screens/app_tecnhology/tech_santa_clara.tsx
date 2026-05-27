import { SelectedPage } from "@/components/types";
import SimSantaClara1 from "@/assets/sim_santa_clara_1.png";
import SimSantaClara2 from "@/assets/sim_santa_clara_2.png";
import VideoSantaClara from "@/assets/sim_santa_clara_video.mp4";
import ProjectDetailPublic from "@/components/ProjectTemplatePublic";

const SantaClaraTech = () => {
  return (
    <ProjectDetailPublic 
      title="Mosteiro de Santa Clara-a-Velha"
      subtitle="Simulação de cheias"
      media={[
        { url: SimSantaClara1, type: "image" },
        { url: SimSantaClara2, type: "image" },
        { url: VideoSantaClara, type: "video" }
      ]}
      description={[
        "Simulação Unity para visualizar, explorar e demonstrar como diferentes cheias históricas inundaram o Mosteiro de Santa Clara-a-Velha. Permite ver o nível da água para anos específicos e comparar eventos ao longo do tempo.",
        "A simulação mostra uma cena 3D com a superfície de água que sobe e baixa de acordo com o ano; painel de controlo com botões para escolher anos, descrição do evento e um slider para ajustar o nível de água dentro do intervalo daquele ano.",
        "É possível escolher um ano clicando no botão do ano no menu ou premindo teclas numéricas (1..9 e 0 para o 10.º). O slider ajusta  o nível de água e a cena atualiza em tempo real.",
      ]}
      setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function implemented.");
      } }    />
  );
};

export default SantaClaraTech;