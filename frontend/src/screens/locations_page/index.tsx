import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XMarkIcon, 
  GlobeAltIcon, 
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon, 
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import HText from "@/components/HText";

import CCS from "@/assets/locais_opt/Casa_Corpo_Santo_2021_1.webp";
import CMAG from "@/assets/locais_opt/museu_anastacio.webp";
import CE from "@/assets/locais_opt/Castelo-elvas.jpg";
import CG from "@/assets/locais_opt/CG.webp";
import CVA from "@/assets/locais_opt/CVA.jpeg";
import CAL from "@/assets/locais_opt/citaniasantaluzia.jpg";
import CC from "@/assets/locais_opt/CC.jpeg";
import CJ from "@/assets/locais_opt/Convento_Jesus_Claustro.webp";
import CSVF from "@/assets/locais_opt/CSVF.jpg";
import CBC from "@/assets/locais_opt/Imagem-do-Mosteiro-de-S-Bento-de-Castris.webp";
import EAFT from "@/assets/locais_opt/EAFT.jpeg";
import FS from "@/assets/locais_opt/Fortaleza_de_Sagres_Joao_Pedro_Costa.jpg";
import ISM from "@/assets/locais_opt/ISM.webp";
import MSMP from "@/assets/locais_opt/mosteiro-de-pombeiro-interior-felgueiras.width-1920.jpg";
import MJ from "@/assets/pilot_models/mj.jpeg";
import MSMT from "@/assets/locais_opt/MT.jpeg";
import MAP from "@/assets/locais_opt/MAP.jpg";
import MAS from "@/assets/locais_opt/Fachada_do_Museu_de_Alberto_Sampaio.webp";
import MADDS from "@/assets/locais_opt/MADDS.webp";
import MAEDS from "@/assets/locais_opt/MAEDS.jpg";
import MB from "@/assets/locais_opt/AOF_Museu_dos_Biscainhos.png";
import MJM from "@/assets/locais_opt/MJM.webp";
import MNAA from "@/assets/locais_opt/MNAA.webp";
import MNC from "@/assets/locais_opt/MNC.jpeg";
import MNAZ from "@/assets/pilot_models/mnaz.jpg";
import MNTD from "@/assets/locais_opt/MNTD.webp";
import MNdT from "@/assets/locais_opt/MNdT.jpeg";
import MNdC from "@/assets/locais_opt/MNdC.webp";
import MNE from "@/assets/locais_opt/MNE.webp";
import MNFM from "@/assets/locais_opt/MNFM.webp";
import MNMC from "@/assets/locais_opt/MNMC.jpeg";
import PD from "@/assets/locais_opt/PP_Ana_Albuquerque_f79080f7d5.jpg";
import SB from "@/assets/locais_opt/SB.webp";
import SE from "@/assets/locais_opt/SE.webp";
import SN from "@/assets/locais_opt/sé-nova.jpg";
import SV from "@/assets/locais_opt/hero-se-velha.jpg";
import CCola from "@/assets/locais_opt/CCola.jpg";
import SAM from "@/assets/locais_opt/SAM.webp";
import SASC from "@/assets/locais_opt/SASC.webp";
import VRRP from "@/assets/locais_opt/villa_romana_de_torre_de_palma.jpg";
import TPCE from "@/assets/locais_opt/torre_paco_castelo-evoramonte.jpg";
import SP from "@/assets/locais_opt/SP.jpg";
import MA from "@/assets/pilot_models/ma.jpg";
import MSCV from "@/assets/pilot_models/mosteiro-santa-clara-a-velha.jpg";
import RRM from "@/assets/pilot_models/rrm.jpg";
import GE from "@/assets/pilot_models/gruta_do_escoural.jpg";
import RCRB from "@/assets/locais_opt/ruinas_casa_rua_burgos.jpg";
import { useNavigate } from "react-router-dom";

export type LocationData = {
  id: string;
  name: string;
  image: string;
  description: string;
  website: string;
};

const locationsList: LocationData[] = [
  { id: "casa-corpo-santo", name: "Casa do Corpo Santo", image: CCS, description: "A Casa do Corpo Santo é um edifício onde esteve instalada a Confraria do Corpo Santo, cuja origem remonta ao século XIV, com compromisso de 1340. Em 1714, data gravada sobre o lintel do portão do pátio, a confraria instalou-se neste edifício, composto por algumas salas cedidas do Palácio da Família Cabedo, encostado à muralha do século XIV e implantado numa área com ocupação antiga da cidade de Setúbal, concretamente o Largo da Igreja de Santa Maria, sobranceiro ao morro de Santa Maria.", website: "https://museus.mun-setubal.pt/10351/casadocorposanto" },
  { id: "casa-museu-anastacio-goncalves", name: "Casa Museu Dr. Anastácio Gonçalves", image: CMAG, description: "A Casa-Museu Dr. Anastácio Gonçalves é um espaço museológico da cidade de Lisboa onde se expõe o acervo reunido pelo médico e colecionador António Anastácio Gonçalves. O conjunto, com cerca de 3 mil obras, compõe-se de três grandes núcleos: pintura portuguesa dos séculos XIX e XX, porcelana chinesa e mobiliário português e estrangeiro. Existem ainda importantes núcleos de ourivesaria civil e sacra, pintura europeia, escultura portuguesa, cerâmica europeia, têxteis, numismática, medalhística, vidros e relógios de bolso de fabrico suíço e francês.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/casa-museu-dr-anastacio-goncalves" },
  { id: "castelo-elvas", name: "Castelo de Elvas", image: CE, description: "Situado no ponto mais elevado da cidade, o Castelo de Elvas é uma obra de fortificação islâmica, reconstruída nos séculos XIII e XIV, tomando só no séc. XVI o aspeto atual. Acolhia o alcaide de Elvas e foi palco de importantes acontecimentos da história do país como tratados de paz, trocas de princesas e banquetes de casamentos reais. Vários elvenses amantes da história e do património quiseram promover o seu restauro, a sua visibilidade e entabularam um processo que faria do Castelo de Elvas, em 1906, o primeiro Monumento Nacional português.", website: "https://cm-elvas.pt/descobrir/patrimonio/militar/castelo/" },
  { id: "castelo-guimaraes", name: "Castelo de Guimarães", image: CG, description: "Paradigma das origens da nacionalidade e da própria figura de D. Afonso Henriques, o Castelo de Guimarães é um dos monumentos mais representativos do imaginário medieval português. A sua construção inicial remonta ao tempo de Mumadona Dias, que o mandou edificar em meados do século X, com o objetivo de defender o Mosteiro de Santa Maria de Guimarães dos ataques de muçulmanos e normandos. Esse primitivo castelo, encaixado entre os afloramentos graníticos, deve ter sido erguido em madeira e dele poucos vestígios nos restam.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/castelo-de-guimaraes" },
  { id: "castelo-viana-alentejo", name: "Castelo de Viana do Alentejo", image: CVA, description: "Ao doar carta de foral a Viana do Alentejo em 1313 D. Dinis mandou edificar a \"cerca de muro em que seia a villa de quatrocentas braças\" na qual teriam que ser rasgadas três portas, doando para a obra mil libras (PAIS, 2004, p. 134). A estrutura do castelo é constituída por cinco panos de muralhas, rematados nos vértices por torreões cilíndricos cobertos por coruchéus. O coruchéu que remata a torre de menagem é mais alto que os restantes, albergando uma sineira com aberturas em todas as faces.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/castelo-de-viana-do-alentejo/" },
  { id: "citania-santa-luzia", name: "Citânia de Santa Luzia", image: CAL, description: "A Citânia impõe-se estrategicamente na paisagem pela sua localização destacada. A área do povoado corresponde a cerca de um terço do que seria a sua verdadeira dimensão. Está delimitado por três linhas de muralha, complementadas por torreões e dois fossos. A distribuição das estruturas permite aferir momentos distintos de ocupação, podendo enquadrar a reestruturação do espaço entre o séc. I a.C. e o séc. I d.C.", website: "https://www.culturaportugal.gov.pt/pt/conhecer/local/_drcnorte/citania-de-santa-luzia/" },
  { id: "convento-cristo", name: "Convento de Cristo", image: CC, description: "Convento de Cristo é o nome pelo qual é geralmente conhecido o conjunto monumental constituído pelo Castelo Templário de Tomar, o renascentista Convento da Ordem de Cristo, a cerca conventual, hoje conhecida por Mata dos Sete Montes, a Ermida da Imaculada Conceição e o aqueduto conventual, também conhecido por Aqueduto dos Pegões. Inscrito na Lista de Património Mundial da UNESCO em 1983, integra alguns dos mais expressivos testemunhos da história da arquitetura portuguesa. Os sete séculos da sua construção percorrem os momentos mais significativos da História de Portugal.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/convento-de-cristo" },
  { id: "convento-jesus", name: "Convento de Jesus", image: CJ, description: "Museu inaugurado a 5 de fevereiro de 1961, na época enquanto “Museu da Cidade”, o equipamento foi gerido até 1977 pelo engenheiro João Botelho Moniz Borba, que inicialmente, na figura de provedor da Misericórdia, propusera às entidades estatais a conversão para museu do antigo convento de Jesus, que funcionara como Hospital do Espírito Santo desde 1893.", website: "https://museus.mun-setubal.pt/10348/conventodejesus" },
  { id: "convento-s-salvador-vilar-frades", name: "Convento de S. Salvador de Vilar de Frades", image: CSVF, description: "Do primeiro mosteiro beneditino fundado no séc. XI restam parcos elementos românicos. Em 1425 é fundada e aqui sedeada uma congregação de cónegos seculares (Lóios). O conjunto foi renovado entre o séc. XVI e XIX, sendo de assinalar, no corpo da igreja, notáveis abóbadas nervuradas manuelinas e, no mesmo estilo, o belo portal principal. Do período barroco é o retábulo-mor da igreja e valiosos azulejos do século XVIII.", website: "https://www.mosteirosanorte.gov.pt/convento-de-vilar-de-frades/" },
  { id: "convento-sao-bento-castris", name: "Convento de São Bento de Cástris", image: CBC, description: "Erigido sobre uma singela ermida dedicada a S. Bento, construída em 1169, o Convento cisterciense de São Bento de Castris, uma das mais antigas casas religiosas femininas em Portugal, remonta ao século XIV, tendo a igreja sido consagrada no ano de 1328.", website: "https://www.cm-evora.pt/locais/convento-de-s-bento-de-castris/" },
  { id: "estacao-arqueologica-freixo", name: "Estação Arqueológica do Freixo - Tongóbriga", image: EAFT, description: "Durante muito tempo se pensou que Tongobriga deveria ser uma fundação da época do Imperador Augusto (27 a.C. – 14 d.C.). Como tal, teria sido criada nos últimos anos antes do início da era cristã. Com efeito, são muito escassos e pouco visíveis os vestígios anteriores. Porém, na sequência dos trabalhos ultimamente desenvolvidos, sabemos hoje que existem indícios de uma ocupação sedentária na base da encosta Sul do povoado desde, pelo menos, a Idade do Bronze, cerca do séc. XV a.C.. ", website: "https://www.tongobriga.gov.pt/" },
  { id: "igreja-sao-miguel-castelo", name: "Igreja de São Miguel do Castelo", image: ISM, description: "Uma corrente historiográfica nacionalista perpetuou a lenda de que foi nesta Igreja que teve lugar o batismo de D. Afonso Henriques. Esta mesma lenda, ao exaltar a sua ancestralidade, recuava também a datação do templo que atualmente subsiste. Por esta via, a tardo-românica Igreja de São Miguel teria feito parte do primitivo complexo palatino de D. Mumadona Dias, na viragem do século IX para o X, e teria permanecido como principal templo da Guimarães condal, ao tempo de D. Henrique e de D. Teresa.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/igreja-de-sao-miguel-do-castelo" },
  { id: "mosteiro-sta-maria-pombeiro", name: "Mosteiro de Sta. Maria de Pombeiro", image: MSMP, description: "Santa Maria de Pombeiro foi um dos mais importantes mosteiros beneditinos do Entre-Douro-e-Minho, tendo sido fundado por D. Gomes Echiegues e sua mulher Gontroda, em 1102. A Igreja [séculos XII-XIII] é composta por três naves, divididas por arcos-diafragma e com cobertura em madeira pintada, nas naves laterais. A planta original da capela-mor, reconstruída no século XVIII, era semicircular à boa maneira românica, assim como os absidíolos [capelas secundárias] ainda existentes.", website: "https://www.rotadoromanico.com/pt/monumentos/mosteiro-de-santa-maria-de-pombeiro/" },
  { id: "mosteiro-jeronimos", name: "Mosteiro dos Jerónimos", image: MJ, description: "Obra-prima da arquitetura portuguesa, o Real Mosteiro de Santa Maria de Belém, designado comumente por Mosteiro dos Jerónimos, por ter sido destinado à Ordem de São Jerónimo, está classificado como Monumento Nacional desde 1907 e foi inscrito na Lista do Património Mundial da UNESCO em 1983. A igreja, com serviço religioso e horário para visitas patrimoniais, e o claustro, secularizado no século XIX, formam o conjunto patrimonial mais visitado do país.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo" },
  { id: "mosteiro-sao-martinho-tibaes", name: "Mosteiro São Martinho de Tibães", image: MSMT, description: "Nos inícios do segundo milénio, passados que foram a romanização e a ocupação suevo-visigótica, os monges beneditinos provenientes de Cluny, amparados pelos reis de Leão e Castela e pelo incentivo papal, foram fundando mosteiros por entre Douro e Minho, substituindo os velhos cenóbios e impondo a liturgia romana. É neste quadro que se integra, entre 1070 e 1077, a criação do primitivo Mosteiro de Tibães, dedicado a São Martinho de Tours que, nascido na Panónia (Hungria) talvez em 317, foi prolífico fundador de mosteiros e bispo de Tours.", website: "https://www.mosteirodetibaes.gov.pt/" },
  { id: "museu-arte-popular", name: "Museu Arte Popular", image: MAP, description: "Inaugurado em 1948, o Museu de Arte Popular nasceu da reformulação do antigo pavilhão da Secção da Vida Popular criado para a Exposição do Mundo Português de 1940, com projeto da autoria dos arquitetos António Reis Camelo e João Simões. ", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arte-popular" },
  { id: "museu-alberto-sampaio", name: "Museu de Alberto Sampaio", image: MAS, description: "Inaugurado em 1931, o Museu de Alberto Sampaio situa-se em pleno centro histórico de Guimarães, declarado Património Mundial em 2001, no local onde no século X a condessa Mumadona Dias mandou construir um mosteiro. No século XII, o mosteiro deu lugar a uma Colegiada, sob a invocação de Santa Maria e, mais tarde, de Nossa Senhora da Oliveira.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-alberto-sampaio" },
  { id: "museu-arqueologia-diogo-sousa", name: "Museu de Arqueologia D. Diogo de Sousa", image: MADDS, description: "O Museu de Arqueologia D. Diogo de Sousa tem desenvolvido a sua atividade no âmbito da preservação, valorização e mediação do património arqueológico local e regional. Abriu ao público a 29 de junho de 2007 em instalações construídas de raiz, implantadas na zona arqueológica mais significativa da cidade romana de Bracara Augusta. O Museu constitui-se como ponto de partida do roteiro de visita aos sítios arqueológicos musealizados, que se dispõem na sua proximidade.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-arqueologia-d-diogo-de-sousa" },
  { id: "museu-arqueologia-etnografia-setubal", name: "Museu de Arqueologia e Etnografia do Distrito de Setúbal", image: MAEDS, description: "O Museu de Arqueologia e Etnografia do Distrito de Setúbal está instalado, desde a sua fundação, em 1974, em edifício setecentista e, em edifício contíguo, do século XIX onde funciona o seu Centro de Estudos Arqueológicos.", website: "https://maeds.amrs.pt/" },
  { id: "museu-biscainhos", name: "Museu dos Biscainhos", image: MB, description: "O Palácio dos Biscainhos é um notável exemplar da arquitetura residencial portuguesa, localizando-se na cidade de Braga, e no seu processo evolutivo abrange os séculos XVII e XVIII, estendendo-se ao século XIX, com expressivas intervenções ao nível dos Interiores Ornamentais destacando-se a Azulejaria, a Pintura e a Escultura.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-dos-biscainhos" },
  { id: "museu-jose-malhoa", name: "Museu José Malhoa", image: MJM, description: "Primeiro edifício a ser projetado para fins museológicos em Portugal, o Museu José Malhoa apresenta coleções de pintura, escultura e cerâmica dos séculos XIX e XX. A instituição também exibe o maior núcleo reunido de obras de José Malhoa, artista caldense que, através das suas obras naturalistas, leva os visitantes do Museu a um encontro com figuras populares (e singulares) de Portugal.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-jose-malhoa" },
  { id: "museu-nacional-arte-antiga", name: "Museu Nacional de Arte Antiga", image: MNAA, description: "Criado em 1884, habitando há quase 140 anos o Palácio Alvor e cumprindo mais de um século da atual designação, o Museu Nacional de Arte Antiga alberga a mais relevante coleção pública portuguesa, entre pintura, escultura, ourivesaria e artes decorativas europeias, de África e do Oriente.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-arte-antiga" },
  { id: "museu-nacional-azulejo", name: "Museu Nacional do Azulejo", image: MNAZ, description: "Criado em 1965, tornou-se Museu Nacional do Azulejo em 1980 e está instalado no antigo Convento da Madre de Deus. Dá a conhecer a história do azulejo em Portugal, protegendo e promovendo uma expressão artística diferenciadora da cultura portuguesa no mundo. ", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-azulejo" },
  { id: "museu-nacional-teatro-danca", name: "Museu Nacional do Teatro e da Dança", image: MNTD, description: "O Museu Nacional do Teatro e da Dança reúne o mais extenso acervo relativo às artes do espetáculo em Portugal,  e tem como missão incentivar e difundir o conhecimento sobre estas artes a partir da sua coleção de mais de 300.000 peças, incluindo figurinos e trajes de cena, desenhos e maquetas de cenários, adereços, cartazes e programas, discos e partituras, bem como fotografias, pinturas, esculturas e caricaturas. ", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-teatro-e-da-danca" },
  { id: "museu-nacional-traje", name: "Museu Nacional do Traje", image: MNdT, description: "O Museu Nacional do Traje reúne uma coleção de indumentária e acessórios desde o século XVIII até à atualidade, representando diversos períodos históricos, estilos ou tendências. Está instalado no Palácio Angeja-Palmela, numa antiga quinta de recreio de Lisboa, e tem em anexo o Parque Botânico do Monteiro-Mor, criado no século XVIII, com projeto do italiano Domenico Vandelli.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-do-traje" },
  { id: "museu-nacional-coches", name: "Museu Nacional dos Coches", image: MNdC, description: "Inaugurado em 2015, o novo Museu Nacional dos Coches foi projetado pelo arquiteto brasileiro Paulo Mendes da Rocha, prémio Pritzker em 2006, em parceria com o arquiteto português Ricardo Bak Gordon. Mais do que um museu, o projeto funciona como uma infraestrutura urbana, que oferece espaço público à cidade de Lisboa.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-dos-coches" },
  { id: "museu-nacional-etnologia", name: "Museu Nacional Etnologia", image: MNE, description: "O edifício onde o Museu se encontra atualmente foi inaugurado em 1976, com desenho do arquiteto António Saragga Seabra. Em 2000, o arquiteto Eduardo Trigo de Sousa dá forma ao projeto de ampliação do edifício, criando-se um espaço de biblioteca/mediateca, duas áreas de reserva e o jardim envolvente. As novas reservas, agora visitáveis – Galerias da Vida Rural e Galerias da Amazónia – foram inauguradas em 2000 e em 2006, respetivamente.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-de-etnologia" },
  { id: "museu-nacional-frei-manuel-cenaculo", name: "Museu Nacional Frei Manuel do Cenáculo", image: MNFM, description: "Ocupa um espaço privilegiado no centro de Évora, cidade Património Mundial, tendo na sua génese a coleção de Frei Manuel do Cenáculo (1724-1814), influente intelectual do período pombalino, colecionador de arte e um dos pioneiros da arqueologia em Portugal.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-frei-manuel-do-cenaculo-e-igreja-de-nossa-senhora-das-merces" },
  { id: "paco-duques-braganca", name: "Paço dos Duques de Bragança", image: PD, description: "O Paço dos Duques de Bragança, situado na cidade de Guimarães, é um magnífico exemplar da arquitetura senhorial quatrocentista e berço da Casa de Bragança. Está classificado como Monumento Nacional desde 1910 e engloba na sua estrutura uma ala destinada a residência oficial da Presidência da República.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/paco-dos-duques" },
  { id: "ruinas-casa-rua-burgos", name: "Ruínas da Casa na Rua de Burgos", image: RCRB, description: "Casa abastada gótica, quinhentista, setecentista, oitocentista e do século 20, com influência arquitetónica de vários períodos históricos, destacando-se a permanência das intervenções setecentistas como definidoras do espaço, conservando apenas do período coetâneo da sua construção um portal gótico.", website: "http://www.monumentos.gov.pt/site/app_pagesuser/SIPA.aspx?id=10987" },
  { id: "se-braga", name: "Sé de Braga", image: SB, description: "As colecções do Tesouro-Museu da Sé de Braga testemunham, no seu conjunto, mais de XV séculos da história da Arte e da vida da Igreja em Braga. Detém um valioso acervo constituído pelas colecções de Ourivesaria, Escultura, Pintura, Têxtil, Mobiliário, Cerâmica, assim como, todo um conjunto de objectos ligados ao culto católico.", website: "https://www.se-braga.pt/" },
  { id: "se-evora", name: "Sé de Évora", image: SE, description: "O terraço da Catedral é o ponto mais alto da cidade. Daí se avista toda a cidade, seja a cidade histórica dentro das muralhas, com todo o seu património, seja a cidade nova constituída por vários bairros em toda a volta. Uma visita obrigatória para se conhecer bem a cidade de Évora.", website: "https://www.evoracathedral.com/" },
  { id: "se-portalegre", name: "Sé de Portalegre", image: SP, description: "O bispado de Portalegre foi criado em 1550 por bula do Papa Júlio III, sendo esta uma das três novas dioceses criadas no reinado de D. João III. O primeiro prelado a ser nomeado para o cargo de bispo da nova diocese foi D. Julião de Alva, confessor da rainha D. Catarina.", website: "https://imovel.patrimoniocultural.gov.pt/detalhes.php?code=70707" },
  { id: "sitio-arqueologico-castro-cola", name: "Sítio Arqueológico de Castro de Cola", image: CCola, description: "O Castro da Cola está classificado como Monumento Nacional desde 1910 e trata-se de um povoado fortificado com ocupação humana comprovada desde a Idade do Bronze até à Baixa Idade Média. É muito provável que corresponda à povoação de Marachique, mencionada em fontes islâmicas e referida em documentação medieval cristã até ao século XIII, e que, no século XIV, terá sido abandonada.", website: "https://roteirosarqueologicosdoalentejo.uevora.pt/castro-da-cola/" },
  { id: "sitio-arqueologico-mirobriga", name: "Sítio Arqueológico de Miróbriga", image: SAM, description: "Miróbriga foi habitada desde, pelo menos, a Idade do Ferro até ao século IV d.C. Estas ruínas encontram-se implantadas numa zona privilegiada de visibilidade que permitia controlar territorialmente toda uma região, profícua em recursos agrícolas, marítimos e mineiros, pelo que este sítio arqueológico terá desempenhado um papel comercial de relativo destaque.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-mirobriga/" },
  { id: "sitio-arqueologico-sao-cucufate", name: "Sítio Arqueológico de São Cucufate", image: SASC, description: "Datada do Século I d.C. esta villa romana foi centro de exploração agrícola, onde poderá ter residido o proprietário. Com algumas descontinuidades, transformações e adaptações, a ocupação deste mesmo espaço prolongou-se até aos finais do século XVIII e, em área contígua, a poente, instalou-se, em época contemporânea, a horta de S. Cucufate e a sua pequena casa.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/sitio-arqueologico-de-sao-cucufate/" },
  { id: "sitio-arqueologico-torre-palma", name: "Sítio Arqueológico de Torre de Palma", image: VRRP, description: "Torre de Palma é um espaço organizado e pensado para a vivência rural. Bem estruturada para a exploração agrícola, era também local de recolhimento e de lazer do proprietário. A villa, propriamente dita, emergiu ainda durante o século I d.C. e foi ocupada até ao século V.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/villa-romana-de-torre-de-palma/" },
  { id: "torre-castelo-evoramonte", name: "Torre do Castelo de Evoramonte", image: TPCE, description: "A Torre/Paço do Castelo de Evoramonte é uma imponente construção de alvenaria revestida de cimento, de planta centrada com quatro bastiões ou torres ultra semicirculares nos ângulos. A sua localização, numa oportuna elevação em ampla planície, propiciou, desde cedo, o estabelecimento de um ponto estratégico e fortificado que, segundo a tradição, terá sido de fundação árabe.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/_drcalentejo/torrepaco-do-castelo-de-evoramonte/" },
  { id: "se-nova-coimbra", name: "Sé Nova de Coimbra", image: SN, description: "Estabelecido em 1542 pela Companhia de Jesus, foi o primeiro Colégio da Ordem em Portugal e o maior que existiu na cidade, também conhecido por Colégio das Onze Mil Virgens.", website: "https://www.cm-coimbra.pt/areas/visitar/conhecer-coimbra/monumentos/se-nova-colegio-de-jesus" },
  { id: "se-velha-coimbra", name: "Sé Velha de Coimbra", image: SV, description: "Coimbra (Aeminium, na época romana) é sede episcopal desde o século V, sucedendo à vizinha Conímbriga. Apesar da sua longa história, não há notícia da catedral até à construção da Sé de Santa Maria de Coimbra, que teve início em 1164 por iniciativa do bispo D. Miguel Salomão. Esta foi consagrada em 1184, embora o resto do edifício ainda não estivesse terminado e, em 1185, ali foi coroado o segundo rei de Portugal, D. Sancho I. É a única catedral portuguesa românica, da época da Reconquista, que sobreviveu relativamente intacta até aos nossos dias.", website: "https://arciprestadocoimbraurbana.pt/visitar/se-velha-de-coimbra/ " },
  { id: "museu-machado-castro", name: "Museu Nacional Machado de Castro", image: MNMC, description: "O Museu Nacional de Machado de Castro é um dos mais importantes museus de Portugal. Foi assim denominado em homenagem ao destacado escultor conimbricense Machado de Castro (1731-1822). Abriu ao público em 1913, tendo António Augusto Gonçalves como primeiro diretor (1913-28). Em 1965, o Estado incluiu-o na lista dos Museus Nacionais, reconhecendo a sua excecional qualidade.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-machado-de-castro " },
  { id: "museu-conimbriga", name: "Museu Nacional de Conimbriga", image: MNC, description: "Inaugurado em 1962 como Museu Monográfico de Conímbriga, foi classificado como Museu Nacional em 2017. O espaço museológico corresponde grosso modo à área da cidade antiga de Conímbriga (apenas parcialmente musealizada), integrando as ruínas, quer a parte escavada, quer a reserva arqueológica, o Museu e alguns espaços circundantes.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-nacional-de-conimbriga " },
  { id: "fortaleza-sagres", name: "Fortaleza de Sagres", image: FS, description: "A imponente Fortaleza de Sagres é o prolongamento humano do rochedo natural e foi durante séculos a principal praça de guerra de um sistema defensivo marítimo geoestratégico. Em 1443, a política da expansão portuguesa nos séculos XV e XVI levou o Infante D. Henrique a obter autorização junto do seu irmão, o regente D. Pedro, para a criação da Vila do Infante no promontório de Sagres.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/fortaleza-de-sagres " },
  { id: "mosteiro-santa-clara-velha", name: "Mosteiro de Santa Clara-a-Velha", image: MSCV, description: "O apelo da forma de vida proposta por Santa Clara levou Dona Mor Dias a fundar uma casa de Clarissas perto do convento franciscano, na margem esquerda do rio Mondego. Em13 de abril de 1283, obteve licença para construir um mosteiro dedicado a Santa Clara e a Santa Isabel da Hungria, mas o património com que dotou o convento foi disputado pelos cónegos do mosteiro de Santa Cruz de Coimbra, originando um longo conflito que culminou na extinção do mosteiro de Dona Mor em 1311.", website: "https://www.patrimoniocultural.gov.pt/mosteiro-de-santa-clara-a-velha/" },
  { id: "real-mosteiro-santa-maria-alcobaca", name: "Real Mosteiro de Santa Maria de Alcobaça", image: MA, description: "A fundação da Abadia de Santa Maria de Alcobaça e respetiva Carta de Couto datam de 8 de abril de 1153. Os domínios da Ordem de Cister ficam assim consagrados. Os do Reino de Portugal, com a conquista das cidades de Santarém e de Lisboa, em 1147, avançaram para sul em direção à Linha do Tejo. Este facto obrigava a um povoamento rápido e eficaz para que a expansão cristã continuasse para sul.", website: "https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-de-alcobaca" },
  { id: "ruinas-romanas-milreu", name: "Ruínas Romanas de Milreu", image: RRM, description: "Localizada a poente da aldeia histórica de Estoi, a 8km de Faro, a Villa Romana de Milreu revela uma ocupação continuada desde o século I e até ao século XI. O conhecimento da sua história revela-nos que terá sido habitada por famílias de elevado estatuto social e político, às quais eram proporcionadas as necessidades não só de um quotidiano rural, como também de grande vivência lúdica.", website: "https://www.monumentosdoalgarve.pt/pt/monumentos-do-algarve/ruinas-romanas-de-milreu" },
  { id: "gruta-escoural", name: "Gruta do Escoural", image: GE, description: "A Gruta do Escoural é uma cavidade natural, descoberta acidentalmente a 17 de abril de 1963, durante uns trabalhos de exploração de uma pedreira que operava no local, sendo composta por várias salas e galerias, distribuídas por três diferentes níveis. A 25 de outubro de 1963 foi classificada como Monumento Nacional.", website: "https://culturaportugal.gov.pt/pt/conhecer/local/pc-locais/gruta-do-escoural/" }
];

const LocationsCatalog = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();

  // Debounce Effect for performance
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fuzzy Search string normalization
  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Filter and sort logic
  const filteredLocations = [...locationsList]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((location) => {
      if (!debouncedSearch) return true;
      const searchNormalized = normalizeString(debouncedSearch);
      const nameNormalized = normalizeString(location.name);
      const descNormalized = normalizeString(location.description);

      return (
        nameNormalized.includes(searchNormalized) || 
        descNormalized.includes(searchNormalized)
      );
    });

  return (
    <section id="all-locations" className="mx-auto bg-gray-20 min-h-screen py-20">
      <div className="mx-auto w-5/6">
        
        {/* HEADER & CONTROLS */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 text-left">
          
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-primary-500" />
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                Territórios Inteligentes
              </p>
            </div>
            <HText>TODOS OS GÉMEOS DIGITAIS</HText>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Explore a nossa rede completa de património. Clique em qualquer um dos locais abaixo para descobrir mais informações, detalhes históricos e visitar o website oficial.
            </p>
          </motion.div>

          {/* Right Action Block */}
          <motion.div 
            className="flex flex-row items-center gap-4 w-full lg:w-auto justify-start lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search input field */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar por nome ou detalhe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Counter Badge */}
            <div className="whitespace-nowrap bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-700 font-medium text-sm sm:text-base">
              <span className="text-xl font-bold text-primary-500 mr-1.5">
                {filteredLocations.length}
              </span>
              Locais Encontrados
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-sm uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group shrink-0 ml-auto"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              Voltar
            </motion.button>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredLocations.map((location) => (
                <motion.div
                  layout 
                  key={location.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLocation(location)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex-grow flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-2 leading-snug">
                      {location.name}
                    </h3>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity min-w-[20px] ml-2" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* EMPTY STATE */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-20 text-center"
          >
            <MagnifyingGlassIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Nenhum local encontrado</h3>
            <p className="text-gray-500 mt-2">Não encontrámos resultados para "{searchTerm}". Tente usar outros termos.</p>
          </motion.div>
        )}
      </div>

      {/* DETAIL POPUP */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-8 bg-primary-500" />
                  <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                    Detalhes do Local
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedLocation.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {selectedLocation.description || "Descrição detalhada não disponível para este local no momento."}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a
                    href={selectedLocation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    Visitar Website Oficial
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LocationsCatalog;