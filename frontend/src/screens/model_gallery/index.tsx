import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  ArrowRightIcon,
  FolderOpenIcon,
  CubeIcon,
  VideoCameraIcon,
  CircleStackIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { FolderIcon as FolderSolidIcon } from "@heroicons/react/24/solid";
import HText from "@/components/HText";

// Import Images
import AMNA from "@/assets/locais_opt/amna.jpeg";
import CCS from "@/assets/locais_opt/Casa_Corpo_Santo_2021_1.webp";
import CMAG from "@/assets/locais_opt/museu_anastacio.webp";
import CE from "@/assets/locais_opt/Castelo-elvas.jpg";
import CG from "@/assets/locais_opt/CG.webp";
import CVA from "@/assets/locais_opt/CVA.jpeg";
import CSL from "@/assets/locais_opt/citaniasantaluzia.jpg";
import CC from "@/assets/locais_opt/CC.jpeg";
import CSSVF from "@/assets/locais_opt/CSVF.jpg";
import CBC from "@/assets/locais_opt/Imagem-do-Mosteiro-de-S-Bento-de-Castris.webp";
import EAT from "@/assets/locais_opt/EAFT.jpeg";
import FS from "@/assets/locais_opt/Fortaleza_de_Sagres_Joao_Pedro_Costa.jpg";
import ISM from "@/assets/locais_opt/ISM.webp";
import MSMP from "@/assets/locais_opt/mosteiro-de-pombeiro-interior-felgueiras.width-1920.jpg";
import MJ from "@/assets/pilot_models/mj.jpeg";
import MSMT from "@/assets/locais_opt/MT.jpeg";
import MAP from "@/assets/locais_opt/MAP.jpg";
import MAS from "@/assets/locais_opt/Fachada_do_Museu_de_Alberto_Sampaio.webp";
import MADDS from "@/assets/locais_opt/MADDS.webp";
import MAEDS from "@/assets/locais_opt/MAEDS.jpg";
import MBis from "@/assets/locais_opt/AOF_Museu_dos_Biscainhos.png";
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
import SN from "@/assets/locais_opt/sé-nova.jpg";
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
import MNGV from "@/assets/locais_opt/mngv.jpeg";
import MNRL from "@/assets/locais_opt/mnrl.jpg";
import PN from "@/assets/locais_opt/pn.jpeg";
import SL from "@/assets/locais_opt/sl.jpg";
import MNCp from "@/assets/locais_opt/mnco.jpeg";
import MNCo from "@/assets/locais_opt/mnco2.jpeg";
import CMD from "@/assets/locais_opt/cmd.png";
import ENSG from "@/assets/locais_opt/ermida.png";
import MAB from "@/assets/locais_opt/MAB.jpg";
import MNSR from "@/assets/locais_opt/mnsr.jpg";
import MSJT from "@/assets/locais_opt/msjt.jpg";
import MB from "@/assets/locais_opt/mb.jpeg";
import MSCJ from "@/assets/locais_opt/Convento_Jesus_Claustro.webp";
import MSMS from "@/assets/locais_opt/msms.jpg";
import PNM from "@/assets/locais_opt/pnm.jpg";
import SLam from "@/assets/locais_opt/slam.jpg";
import SNC from "@/assets/locais_opt/snc.jpg";
import SPan from "@/assets/locais_opt/span.jpg";
import SPor from "@/assets/locais_opt/spor.jpg";
import MNM from "@/assets/locais_opt/mnm.jpg";
import CNANS from "@/assets/locais_opt/cnans.png";
import DM from "@/assets/locais_opt/dm.jpg";
import MNAC from "@/assets/locais_opt/mnac.jpeg";
import PNA from "@/assets/locais_opt/pna.jpeg";
import TB from "@/assets/locais_opt/tb.jpg";
import SVC from "@/assets/locais_opt/svc.jpg";


/* ================= TYPES ================= */

type ResourceState = {
  available: boolean;
  url: string;
};

export type LocationData = {
  id: string;
  name: string;
  image: string;
  mainFolder: ResourceState;
  resources?: {
    dados: ResourceState;
    modelos3D: ResourceState;
    demos: ResourceState;
  };
  customSubfolders?: {
    title: string;
    resource: ResourceState;
  }[];
};

type FilterType = "DADOS" | "MODELOS" | "DEMOS";

/* ================= DADOS ================= */

const locationsList: LocationData[] = [
  { 
    id: "agnostico-museu-nacional-arqueologia", 
    name: "Museu Nacional de Arqueologia", 
    image: AMNA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtAWt5Ki2cQa1gwiuQOzK8AYzjl6OSJVM2QJ5sFcko0Ps" },
    resources: {
      dados: { available: false, url: "#" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCWGHGOPlGsTY1wtiK4dEaCAeiOh8RjG55bL6aY8t6V6Kc?e=NyGMdT" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "convento-de-cristo", 
    name: "Convento de Cristo", 
    image: CC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDWD_8joViSQIhbL_G1uCe7ATyd6g1gkalrs2QI7e1Qjho?e=pYNich" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAEPhJr92lgQ54MWqogjK6EAeb8fVGjjrirkyWNNuL0j8Q?e=FgcDPr" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCpBV5XikOzRb1eOCaQe9UxAfL6f358Ft9EdXTBIkg8Fag?e=h8Ug1v" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "casa-corpo-santo", 
    name: "Casa do Corpo Santo", 
    image: CCS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD5tYNgCj7_TrJuXTc1EvLrAVst6ZJybF5bkJhTyuDDORs?e=bOCUyw" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB4xfxJjrykQY-1g3nbRok-AUwqLth6-Aw_t_nWUnPkRRo?e=Pa9SaU" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDk_Ur4mtiJRroIFzfrtiHeAR3gcyVuhgBIWn8hdVWtlU4?e=z2WMbc" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "castelo-elvas", 
    name: "Castelo de Elvas", 
    image: CE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCRVYSKgko2T7UUB1NodfYPAYrBQpTF0XZmU57VujBIZiY?e=ECKGaC" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCcb4Nbd0L_S4m1Mk9-l16QAXdtgQU3o_gRmoVjqaE8Cn4?e=m2wGfm" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD7ezS4RscQS4BXwtu7TdHQAU73Pw4RsMLhJNjONwgcgPI?e=opPks0" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "casa-museu-anastacio-goncalves", 
    name: "Casa Museu Dr. Anastácio Gonçalves", 
    image: CMAG, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCLvEquqjiURYaiP2QrwH8LAR38BOPFOeST39yzQv-4Jnw?e=OLwZc6" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB9sjZtCB8JRpErMgIyIidpAQcaMUnSClyAq42XIcodMCw?e=AAfkQP" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAree9TGEQJSI8kqhIAN620AUapBJoYxfRs8yseC2tkPI4" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "castelo-viana-alentejo", 
    name: "Castelo de Viana do Alentejo", 
    image: CVA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAPcpVo945RRYMsjP90EwjeARifmIRcsCg1UOhNmZ-gNgs?e=Uy1Tvc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAS6Q3AEXh-R6hwvp7jAhSLAUBJBFRwwzlmrtGxgb4T0-o?e=hDUpLp" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCGlqrlnxyARaCVjN2aSrUpAf6mq0lxiL-gIbsLchNmDAI?e=udb4Ky" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "convento-de-sao-bento-de-castris", 
    name: "Convento de São Bento de Cástris", 
    image: CBC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD2RsdhPMDtS5r77igREXrHAWRUNf0NBMERh0d3MI1BeWI?e=Yy86hl" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDGbre9IZvMRrb2I5dAEMxCAdus2AzYR0XRoK8_Mh7fYb0?e=gcSFJ5" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC1oWFdtIPuQL4io5M65IQkAb5aZtZez-2faOAKYM6HT9w?e=cHNQ1I" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "gruta-do-escoural", 
    name: "Gruta do Escoural", 
    image: GE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDcuV2GXCulQbrGEYuZ64OUAU7fPZIn8c4NIhPBICmNX_E?e=eSJmEh" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDKcX8EXAm8RYx7uiXmp4SgAYk9vHwuT_3oSbjaYtL1LmY?e=WRiq5x" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB3nXQ32-sSTIWLJYIN9HlVAZWRunljt6i1FKCsfC8fRiE?e=e41wIV" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-de-alcobaca", 
    name: "Mosteiro de Alcobaça", 
    image: MA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBwQhCgZHsFQpPmV4FdpYBTAUbm4znQUB_T2r5v9v-0e0g?e=Pnktgh" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAHjxGjczKOS5kQM2KsxiJdAR2g1MA1GCnD1Duf3WKoVto?e=eubzKD" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAp-F6eppVPRZwTnnSAZlmzAX6PpIOscGPPnE7MYjDF1hY?e=0emDLh" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-de-arqueologia-e-etnografia-do-distrito-de-setubal", 
    name: "Museu de Arqueologia e Etnografia do Distrito de Setúbal", 
    image: MAEDS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBm4wAeoo-pQ7EfBZIVNfGMAQ_2Pr-cK0GIDaddnpMZ5vA?e=r9qxK0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgApktsYl1uLSZAWAyjdBLBGAdhIsej-att90r-fsXqsdrE?e=NfYPwn" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCk-tBwfJkmSInlz6pKlRaGAT1na8MxX8VDpkvkb_gfCBI?e=vbGdjd" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-arte-popular", 
    name: "Museu Arte Popular", 
    image: MAP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDh4A8PtAzmSJbeOoRYXqBBAfI-jHCtnQDL_gGPO0vuA1g?e=0hGhZR" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD9TPzGhtK5RZEYwZggVfe4ASyzNRgKAHdnZ1FYpTbGGRg?e=gXa7T4" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCA8uPZWGxeR5s0JlmmvNEbAfPV5jN9omDPzC1ev6Y_SMc?e=KPn1ek" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-grao-vasco", 
    name: "Museu Nacional Grão Vasco", 
    image: MNGV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBDbmG0yV6EQYKrjNSy8EeMAfpnBDKlgXo8uhTLVZLdQ3g?e=4y2fCN" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCyga_KlD9XS4q0zkuLNyrsAXPYK6oeffb0xdGM8EA1hMQ?e=yCt2EU" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDbaQzyxc_7Tp7dL_jLhWX3AQKp75E03rdKliBiq7NiFXs" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-dos-jeronimos", 
    name: "Mosteiro dos Jerónimos", 
    image: MJ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD3_pQ7dl1-Sq0qu7pPhEKHAavAil_vpgpDqutGR7rUh2M?e=UeQb6s" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTmINm5Gu5S7dq_6Qq3MnkAbo8ijG1Liru9OFYTVnRd6w?e=MmuTg0" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBTrrlycyuVRLpPWt77Y_6TAYFeLm5XxokKdAAMMZO-WWA?e=DhlOts" },
      demos: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgADp7sAFpJESZMWWZuUOib-ATRQMqJ6nt42rhFCjx74FR8?e=ZzrWV8" }
    }
  },
  { 
    id: "museu-nacional-arte-antiga", 
    name: "Museu Nacional de Arte Antiga", 
    image: MNAA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD9JzOL0b2oR55XibRdSza_AcEIwFpLf6sSO43GjDmnFmw?e=TnQlKX" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA44mX3ForBSLjZy5b1KIPPAVLWGoX0RrKDmXutT0Z4fq4?e=IsmSBE" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAPT9mNwbR6RaOHErzPOKrjAQdAk37Ip3vyQkPvLb2u8Tk?e=4Mf611" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-azulejo", 
    name: "Museu Nacional do Azulejo", 
    image: MNAZ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBIyuarAm2nTK_dAZFDZCFyAUYdBwIh02BPfOSHtaaWy7A?e=Sv9AAO" },
    customSubfolders: [
      { title: "MNAZ Completo Modelos 3D", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBd-nR-t_J4T7JaaHpOJmnfAYc2Y5FAyrOqGV5efGqhDTE?e=G8MSzh" } },
      { title: "MNAZ Completo Dados", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBG2ZIiy_SySYF7yeP_XwWGASXiWWNNNDnVN3svgijtCOo?e=ChecJc" } },
      { title: "Sala Santos Simões", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDn53F_r7LAQrZZ2DFwc9T0Ae4IvLV-imdjG3Y-qS7Z2Z0?e=1f3jD0" } },
      { title: "Panorama de Lisboa", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDy9XX6CEgVT7BvIYfRy_eOAdqNsB9KebkA2HHW1zb8dRU?e=ep7TI9" } },
      { title: "Palácio das Galveias", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCklvdbNr9eQLLIeGTKcYGYAYu_5TayLIHsBwt0zkTA2PM?e=Sm8r3B" } },
      { title: "Igreja de São Lourenço", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgApBS4oRYawRbIWAlGCY19jAZ13y5PGTn66C-Qj0CFSMJg?e=J7Hgzb" } },
      { title: "Jardim das Amoreiras", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC8LouRxEBaRq6kzWrSHWb1AV7Lo63N55ETvUcBeiTLjHM?e=SEoDG4" } }
    ]
  },
  { 
    id: "museu-nacional-conimbriga", 
    name: "Museu Nacional de Conimbriga", 
    image: MNC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6an2fM_QpQbjf2WJKtPsZAb0pkYqf2hCuHiAOfy2MkPY?e=NNDULq" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC_z13drKRzQb_3mAzwjcTGASXEd90Vj3eQ3RWadS89gRA?e=nifjRD" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAtupx0xa9VSphp-g5SA4bPAbqjFpc1i9w_PfjXtzXb3Pk?e=7unbGd" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-dos-coches", 
    name: "Museu Nacional dos Coches", 
    image: MNCo, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBpWb9xAPeLQ6dkepgESDxWAUSjFEx0cdCqlceeYSsafkQ?e=9jtNKd" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDSF4r_-qjIRbF2JKy6tpiPAXYI-H4i55t7QL1eQNsuwpI?e=a5YTI5" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBlURC1H8UDQqvIgUM8X63UAUvk4qpNaa_e-EbqZqKgiN8?e=uWPybf" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-etnologia", 
    name: "Museu Nacional de Etnologia", 
    image: MNE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAXbZZTefrRTrkmUKyIeG0WAR7lG7kfRlHahp74IS_uHis?e=ujatgR" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCAJa0CCokyQpHUw_MKTHOnAT_eyMLZRdH272SaSfmxoEc?e=uDu5d1" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCXbpDcA2TuSIjDOOEVgV_rAf3PMiqm0NXrJTA6GWyq3OQ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-etnologia-conimbriga", 
    name: "Museu Nacional de Etnologia de Conimbriga", 
    image: CVA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCYyEqr_n5nSawosTs81NdlAesmHoG9IljTamnnXiFYIck?e=bW21gj" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDjTsC78-EZSKNJQ_7U1OVoAf1ocC98JzZ-7s3Q4gr9vtc?e=jsrJZW" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBByHqvb-8OTaQNNQEZLb81AeIVt6bdOFweyY8ABbQranI?e=YtUN0m" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-frei-manuel-cenaculo", 
    name: "Museu Nacional Frei Manuel do Cenáculo", 
    image: MNFM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA9ptuyXwhpTLkL6mmBvCpfARNXRNPUn0LmMxWDf9C88Pc?e=Ikzuev" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCJj9lnN6P8Sr_0rR2KJHQyAZoomNpOYHwPOhTCkKhdk9M?e=oRMnRm" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-resistencia-liberdade", 
    name: "Museu Nacional Resistência e Liberdade", 
    image: MNRL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBZ0o6ARER9S4tUNN22ycyoAcIpBBwMIBhCxRlaNExwZY4?e=6jJYFD" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDxFfGNHzEiS7K5JtS2a3p1AQBNY2vivGAxJwJ4QHyS500?e=j422QP" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA3EtdL8EkpT6w18JFqzSSBAY6J27bn7NDAqXUi0DKpT8s?e=lGLABG" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-traje", 
    name: "Museu Nacional do Traje", 
    image: MNdT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgALKWBN8y3ITbPWVtzltCwmAejlv5l1aHh09CYQxHxiEiw?e=idqNX9" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDJoPvNNAidTatto3t3F4zrAaia-F1Tb5V6LHbdn7wOENc?e=zHn83r" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB1fK7oFPfjT4wJ9R5v4fx9AS_kcP-5ImUQbVqNX93btyI?e=kuTQEG" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-teatro-danca", 
    name: "Museu Nacional do Teatro e da Dança", 
    image: MNTD, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA1b_67iQtxSqSijiUS9cE6AeBp4TGdzkjC7LaRdvVGJ8Q?e=8ptJ9h" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBjnAS-lHD3SoB2JGpMvbUhAa4CXFJYmcinSKLYSpjip4c?e=HyFWZ1" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-clara-velha", 
    name: "Mosteiro de Santa Clara-a-Velha", 
    image: MSCV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB7-bvth_wiQ5DlPhG7eQ5SAVw18DRPyku9t2Fkl6IM0RM?e=ebRyMi" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTlx0JPLQeTa9ktMtoK2CEAcgjpjG53g8_bxDnM8jmfYo?e=OQalbD" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAyAdLMXoX6T7ZrIZZdqc4zAY_zknRcCju4RwjguraOC3A?e=FHppoN" },
      demos: { available: false, url: "" }
    },
    customSubfolders: [
      { title: "HBIM MSCV", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBUjqqYh10pR6blJsJBt3joAZUXZaO9zMO93PmRhKOFS3I?e=YHwHcr" } },
    ]
  },
  { 
    id: "panteao-nacional", 
    name: "Panteão Nacional", 
    image: PN, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAFN6WW7FgSSofS7FXe_v-1AVQ9YaG6A_XRaOos3FPZV0I?e=xIHjVv" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAxaJIELLO8TLY8JYbaBLx9AZkXZyoZQexWfbppcQg6bjQ?e=piahE9" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAOKkV8c-2dTJJxfVWCokOUAVnA1ZSJQI6cQEAQnFeWZ0g?e=XFoTkK" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ruinas-casa-rua-burgos", 
    name: "Ruínas da Casa na Rua de Burgos", 
    image: RCRB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA8SLrrkGwGR6KdZhaioInWAey_NOcjQyzE4iMDW_-j1L8?e=mvNeFH" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBCW_dhmBbjTbbURKZc24kQAV5YMEk1K2MYhUc1KbnrBSM?e=1aN67X" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAENVm_jvA1SZowNgTPOxpmAWQT44oEFN_x-sCDlqRQJrE?e=Redup4" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ruinas-romanas-milreu", 
    name: "Ruínas Romanas de Milreu", 
    image: RRM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCKRoxI0Ft3SKuyJl23VoSlAeyzKhqSrDYTXdaEyoJ2WL0?e=Rw7deU" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCQaf8Bhkp-T4Ofx9WFM-vkAXa_8qaty-WsaNjZxm7tIfc?e=SObohZ" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDOUkiOaWBJR6RRcSGXtf7HAd3lmtwDfaWnd38Ipp1vnW4?e=YzdM6C" },
      demos: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBkg7KsfSGsS46fojISCEyDAb2BQr3kMgIhirJuWOIA3ao?e=YDWYF4" }
    }
  },
  { 
    id: "sitio-arqueologico-sao-cucufate", 
    name: "Sítio Arqueológico de São Cucufate", 
    image: SASC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAY0VfdBO9eSYI3gC7Jr0abAadkUSUcCpvz_g0NLW344yY?e=bPW5d6" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTO6czBAaATr5FuPl5Bw7uAYQ290W1uid6dupRUWjNrbg?e=QkAUB0" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCk0RlOpxdBTZqMNI9i2v-5AQK0wtHdVD1kKCeptn_P210?e=KgDUTT" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-torre-palma", 
    name: "Sítio Arqueológico de Torre de Palma", 
    image: VRRP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBnH_lbdIeeRogcYXZ87yDfAbOlkiM84EiiJg2J3rbTB4s?e=8nU1mL" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgASp6gtSzP1SZ91rW7mgoxlAWGpCP7OllA5OrjUZblGls0?e=EO9mgA" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBYcn3Uk7P8T4M-hbUzIWBEASGDaC4xdebGEx1L5r-bEyk?e=IdKBsS" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-braga", 
    name: "Sé de Braga", 
    image: SB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDcNT1W2ZekSYmRBovdoHd9AXZBDmbED8vUYMh8OahiM_g?e=y5csw0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDeF3anmk0LT682pJwFmogrATw5hnHXo9qh5RZ8QVrMv7g?e=muEgAh" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCUOywDHwjtTqgHJoUi96GzAZQpWNW20E-pJSfiFRALZdk?e=J4TA87" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-evora", 
    name: "Sé de Évora", 
    image: SE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAG_qyuEJe2RZKLe5BHf3zOARidmVsD9UUkiMGMrpDQJrs?e=GNPqfC" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAsgD2GkgtDQYKG_s4ZYB8gATqlr4a-J9zFhBTiuxXolPI?e=OoFINf" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAAVNXUPHEVRbpHZEGuK0n6AXSOiLhfS2pbN_8P5f_ANmg?e=jEZPXg" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-lisboa", 
    name: "Sé de Lisboa", 
    image: SL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCwJH3t1m4TRIXkIvOt3WPlAdlw0weV58vp8iCF1H-g7A0?e=4gWNuG" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCzOmTYKsiqQ75MitrV3C6nAdFgkyG2GizjzLYJh1N6E8o?e=vMhxz7" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCIb5YiWzjKSYOBt4-tIayGAQUO7-BQMzkDV7f9LAjb1dY?e=zAcd8l" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-portalegre", 
    name: "Sé de Portalegre", 
    image: SP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCcwwrb0gGWQ6HCAWmF2yXVAcZdhzYwB12RDwLlTPSNgqA?e=ZigOUP" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCIfrU1eqyDQ5-RNh2ATeb4AUtFrgL9-6AwkwlByFDE1eM?e=kbpFwW" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDS7qCMNTfpTpCh5S8ZB-v3ASW4yjqhPEBq_4u9CPZ7wGM?e=tCyh4a" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "torre-castelo-evoramonte", 
    name: "Torre do Castelo de Evoramonte", 
    image: TPCE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD3hpEtLL36QbaLktwp1le-AV8G0JxeoFJ4JjbdieffoK8?e=5fIWpK" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCSleeSWVS-TLKDrzhN0Hb_AU5fA6CroP1aPhxonFitMT0?e=6aRtCc" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBNmZHo9OhESKAunzv4jSjoAUOx1X_WW6d_s2QKA-B8YyQ?e=8ZD4Jd" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "concatedral_miranda_douro", 
    name: "Concatedral de Miranda do Douro", 
    image: CMD, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBuDG3478fvR6COyRpZWzz0AQApV5uR9-Foq6H1PbceM7I?e=abEnCQ" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCsLxBeEotdSZpR471pHajUAaFYinZF1r7kZ8M-XdMsGZA?e=VJtbpU" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCxfK-ttTXXQ7mm3_SzGH3hAQRd395Iq2MeD4D8sCxXgBc?e=2h330R" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "citania-santa-luzia", 
    name: "Citânia de Santa Luzia", 
    image: CSL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDUpJL8X921S6C7BRpqEyvrAdDCjK2Bw03TyRhli_nQNuM?e=aKbkCE" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAcXu3WFeIxR7EMu5IHdKqsAX2iafVVkuY5ENCOPW0YQjk?e=40sHfk" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCCfOtTuaUxQZwPhQsuLzTdATIkqU4SEf7LD2vUIumYT2U?e=R8LeMr" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "convento-sao-salvador-vilar-frades", 
    name: "Convento de S. Salvador de Vilar de Frades", 
    image: CSSVF, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDZHf0NanhXQ4LiATcbZnGFAQ8p7cS5ocRIQc2A7hnmdME?e=NV8n18" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDFVpjn6KHmT5Aoev5Z0O5lASr_N1GpxI_TUbMJWONVgX0?e=Miy3BU" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDapCNrSsOhTLzKxnv_NJRMAYTfEHkIivfH45y-2C2Q0kg?e=JtBu9q" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "estacao-arquologica-tongobriga", 
    name: "Estação Arqueológica do Freixo de Tongóbriga", 
    image: EAT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDClJK8uoZgR7-yPP-zOeLjAVDC0vN5v2ca9S5IuVwkxoA?e=I5urxI" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCgR2Vz7kNUQpGRh97Z2vJzAQD3NY_2C6LD4dpBfK8kKJA?e=alxuN6" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAZBG0dS7-GRZhbQCLMa8RzAaFSlWADoaGY62fTiY8eGA0?e=GMitzS" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ermida-nossa-senhora-guadalupe", 
    name: "Ermida de Nossa Senhora de Guadalupe", 
    image: ENSG, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCsD8-XqJQAQ7f5gzVTz1nDASc0L65hyRwyzrr6-sDpGig?e=GGrDFG" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDb0ehEce8zTpY3Um-Faeb0Acwsy69_wpbKWqmTekRfrC4?e=LqztQy" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAyDg8ZmaGWS5tb99QqUttaAQ2NAU3vPU3bB8oXo9dsYpw?e=uiPhiT" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "fortaleza-sagres", 
    name: "Fortaleza de Sagres", 
    image: FS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB3nWxfAYA6TY68cbbd_PAOAayRJzpEHgQF4B6uNZg2I7k?e=JW0t1Y" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDVLGPxamV2Q64qdK2swjtcAS1n314zjKHqXHIX5rXA4aQ?e=uW3CMU" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCmkrV8vYuXSZsashzQfTAkAR5YGMumQcisOFIJHiOotew?e=ytzN3P" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-abade-bacal", 
    name: "Museu do Abade de Baçal", 
    image: MAB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCpoySpyqCARZDhXM680f4nASU5rtj5ClqMQGJAJA4dPN4?e=fYasyu" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBK44nhU6dYS6qrM6pfQMLZAa4qh8QTZhrql7YBTHIzFt8?e=vxXB1Y" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAaFHuXhPTFSYVYSsfmNDnfAY3u7vDvp1mnM58C-OXmDj0?e=M7Z33n" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-soares-reis", 
    name: "Museu Nacional Soares dos Reis", 
    image: MNSR, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD1rJ41ktGnQbWxov3787qNAZiIx4Uxb03d2q5pPUXXV9E?e=QdtYT8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAv7hBY6IigQbzaUCP19uveAcwIOCArP9g9y5-McVTnR64?e=g6mBCK" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA-caxQ2WMcQ4YGnckmFG_gAX5Mt6TmjnCXTp6PVT3c11M?e=zEBJSc" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-sao-joao-tarouca", 
    name: "Mosteiro de São João de Tarouca", 
    image: MSJT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgALILZhRD7xRIBOIox7-GzAAfNSD4so-9ltV9Cyu4eokWY?e=1vs57g" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA2UcOWICVXQ4fmrnkArxJWAWh3jvArF4-0DpT9c4N37NI?e=u38v74" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-batalha", 
    name: "Mosteiro da Batalha", 
    image: MB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB0fbIo52PkQqJgUqWlpVZDATcL6atfuCVCeRq0jBNgMhg?e=zyxwuH" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6s_z5NQZjTqvDYgEN_ri4AahWYgkP3lFMfkR6VZodo2U?e=LAv50H" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCjnHwQLtcURLb3jHQztX0JAXghqwlmzHSbsHNUSuOwTbU?e=IUrd3n" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-setubal-convento-jesus", 
    name: "Museu de Setúbal e Convento de Jesus", 
    image: MSCJ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDmqfWxTyycSp5H9L9UL9eqAfrx08qTyofjwHqGEzK8tKs?e=Ua4ZhN" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAhzzmsapsJSYgT-2LcSTiCAQRFiF37esIwUDcs5ebjy_M?e=L7TsQ7" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBNC_SROa5cRK551nXZyXIqAaPSPobBtaadWVsadJcnXgI?e=aGw5Pn" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-maria-salzedas", 
    name: "Mosteiro de Santa Maria de Salzedas", 
    image: MSMS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCL2LyAfUArQJGTR2GG4jbjAUXJz4RvzEVfDk6BJ_O3TYs?e=UFrFXG" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCqwdhg7XCjRJ-w5Ckw6mw9AR1RrIZnxIjLKh-LQI730Yc?e=HKu08C" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-maria-pombeiro", 
    name: "Mosteiro de Santa Maria de Pombeiro", 
    image: MSMP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBAItpq2T3OQbSgLH62aGfRAZvobjfQUvJYwhF2l0Wn2YY?e=ah8FzO" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDrslKDvEo-TprAjWyqHpYtAStU-4g8qM-fVZ8xgnpxjOk?e=wWVi3R" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDs7V7vuyNwT7SNroVW80jWAfBBrmGoOPJmzxd8hAbJnck?e=OFh3dn" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "palacio-nacional-mafra", 
    name: "Palácio Nacional de Mafra", 
    image: PNM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCznob8IFP3QpfWs4EivzCHAe5YHRo1wr_6wI9HLeWjEYM?e=Bfmr40" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBH8z5aGob0QpI-ipt4veMHAYzCoKkIgWCM7SsX3zHlg2U?e=pXHogB" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgACvlgzQNDNSoG3AMi3ly2bAfk-2T7z9bMRcI1jCpAhang?e=tWmW0a" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-castro-cola", 
    name: "Sítio Arqueológico do Castro Cola", 
    image: CCola, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAxqufnUna5Qo0oANHxI458AUw3XIKPM53UJ2TClerrtg8?e=gLERdq" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBsZbtT3LUeS5mgMvj59B-uAd48vAI0f_S6a8Bljl7jT4g?e=jshB2V" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDwinc3-5VaSo2j3spl5uNiAYadLfxCBntDh4vYOhg85YI?e=EhVL2G" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-mirobriga", 
    name: "Sítio Arqueológico de Miróbriga", 
    image: SAM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAS3mUPZAGYR4nxsRVbkNnkAQKXnb1kSw1Yfm-DdOXyyso?e=LbuMtG" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDZyprmZgspQ5us3gC49ugbAb8l5sJWJbfDU7D0bMZajTc?e=6ZVVdg" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgArEZGUiH_yQIw3YriN8-ZbAXs5NbMSuHv9zNXzszb-hcA?e=g3ogy8" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-lamego", 
    name: "Sé de Lamego", 
    image: SLam, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDdeEtuHeZSS6yPWoWctsSwASlMokhY70a8WJlZP_xl01A?e=prUmoG" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBguf18ZAjBSKIukWUz3JYrAUfClAZtPqeLxxZBgSmF5N0?e=gXMfNx" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDkL0zch-ReSLAJggO9a0GIAYr-NUPh1Q5oO9LdxYbouZc?e=0MzckO" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-nova-coimbra", 
    name: "Sé Nova de Coimbra", 
    image: SNC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBcaWoqMlXGRpBcBJDPrgmPAfLWO2AzIzoK53VtJgKAKYI?e=SGFgNp" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBEkcnQnnAHRKf2ebEkP8_7AU58Cv3wbJk5rdBHsbU6ze4?e=ifitnb" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "santuario-panoias", 
    name: "Santuário de Panóias", 
    image: SPan, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDDfj5oafZSSqAWOri8u-9hAYYmYMIwBYNpqRG7O_vYZYY?e=UHoxXC" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCyARXAdLfWS5ykiHAvOnLnAa0-Y1g0Uhd6ylsdK3-aXpg?e=cMGPkg" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCXVv6R_3pmSKaI-RVnZUFIAYo4sCNz78M0Zc72Ad6nc1E?e=lBceYc" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-porto", 
    name: "Sé do Porto", 
    image: SPor, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDmaUD9QvHUT7G704l3ApvYARW8X723IhJYH4-uEgPIhAI?e=b2TDcL" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBsFrPMCKQGT7YcKolBCcJAAfH2V-NVtJavwsMXFF3GFic?e=iIdlne" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBkxEvQ-ve8Qad8aw25bnQvAZLAx40Cl2heEoLRAC02My0?e=lOIw1x" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-viseu", 
    name: "Sé de Viseu", 
    image: SV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA2ZUEid_f0TayOdxoLoJi8AeelZr1IbkoJUvNzuD4gF7w?e=GPxquU" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtLZs29p4yQLifiUntjvfqAWeiEKlMvXKCrYH3CU1nGQg?e=HdzgvY" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBe9f_32MwoQY3uBnHUPqe5AY_siJ7cUzvoWqIk31UzljU?e=YxOEna" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-biscainhos", 
    name: "Museu dos Biscainhos", 
    image: MBis, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCCRrv3qrRBQrSHqyUG3tx8Ab-fjF4u9TRxVfKEfn7-MqQ?e=XMLBii" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDjsdm4-mSURa6tOlsZBx6vAaVwPY-eTkGszYzOuwLheUM?e=We3X6W" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCOXJN4Q3ruQI7i6ezjLjs3ATb_CACvkOt3fw8vbR_e5cs?e=Or03bI" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-jose-malhoa", 
    name: "Museu José Malhoa", 
    image: MJM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCa5awRe1YzQIo42-nhWAVDAf7B1vlURLr0AXXJs6G-sE0?e=no2hW1" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDuuLNAuFEzSY2VONd3p3F1ATLnZjX-zJ3bQ5CVNBCX0PM?e=EpogJJ" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBZnxZu95UiS5DTYDBNdWi7AdFjZanmjA-lJpNZTKDwRYM" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-coches-picadeiro-real", 
    name: "Museu Nacional dos Coches Picadeiro Real", 
    image: MNCp, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD6JuSAT08pQq3rJYQUWFnxATjmohl7bEROiqnNKLOnYFU?e=bkhgNR" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA0rwPc-UtDT6fgV2bhLwguAWn1HwZ1Ru734J9ni69UfDc?e=6UkslC" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCiaxYp6LwnTLwUmp1aqgjyAYNhoT30fGNYwOpfMFhFOV0?e=eqEWTC" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-musica", 
    name: "Museu Nacional da Música", 
    image: MNM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBc4iWRQ3KDRY_zcAX9ekNXAc2uG0RB40DIbuhUEBQwW4A?e=4dPYfL" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAR8qlhc2QEQIo3caTuZdNCAUZtISi35mWQmugXHLqr8HU?e=bKhifR" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAAEahvlmkTToEJVEzevLA1AbjE4_tShOaokOzcMV3JQgU?e=ud4qrm" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "centro-nacional-arqueologia-nautica-subaquatica", 
    name: "Centro Nacional de Arqueologia Náutica e Subaquática", 
    image: CNANS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB5effMrHsGSp-bg5UG5YQsAbmJYnqWgio0Y0RSVZA1CPs?e=7dpSEA" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBnQif6f7GDTY0NzXvYkWw7AYSKadH7xGRomPH7EkSEhB8?e=rSFfpb" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAabH_LpVOwS6RHfVdyVX78Aemd6HtRAafJJIEYt5QjtS0?e=mXzmzQ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "domus-municipalis", 
    name: "Domus Municipalis", 
    image: DM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgClC9tj5zlRSITZewUfzBQ4AXFEeq5_c86Xh2UV-b0aM4Y?e=j3pSkg" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAgVtiG-UA5R6ED9z0_ics-AdhPTVjGB-DujfQwLWrVNOk?e=1U8egd" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBiyeW2S3pxQp_g1gdoqeSpAZ5bE1M_7T7Rsmv7EMG2bYU?e=wCLXPL" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-arqueologia-d-diogo-sousa", 
    name: "Museu de Arqueologia D. Diogo de Sousa", 
    image: MADDS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDCRN4i_xfjTLn02K_m3-1OATRhGX5fz1YeNR88G6JPT64?e=jXnwzd" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAX2qYH-Qq-Sr5N9uj9rUixAcCDicgyoV9skgOS_vE-qCc?e=NdnEma" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAcv5Ikt9CmT7uZZmBUZVTBAVEqKKCkVqbOD0BT5pucWsA?e=iJb99T" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-alberto-sampaio", 
    name: "Museu Alberto Sampaio", 
    image: MAS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCOZ9yfqq2xRaHFxUvik6IdAcaABaLtmvofbp1CwHjaF44?e=VGG3p1" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBU83zAHSJ6T7RNk4cJkIz5ASNTTQY6xw4f8JARW6GjQ10?e=lML7Xg" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBclwcnpxtCRLmcjnxpyRcrATGQlA8JU9xAamHq0fLx3V4?e=3D2gaf" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-arte-contemporanea", 
    name: "Museu Nacional de Arte Contemporânea", 
    image: MNAC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDoK98OnncaSrvzuNK408ywAY1R3LxK7RFekIVWvhmlsRg?e=pJZdOn" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBHdeCX0Eh1QrsLeG8XJ9l0AcL7QrkzpISWaXAcEWkmNdQ?e=J6TCiC" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBh7UsHTEOGS69hzwZFi2ISAe2EKHlPe5AX8FP8U4fECB0?e=uotj9K" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-machado-castro", 
    name: "Museu Nacional Machado de Castro", 
    image: MNMC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCQAjNhElMXQKXix9ioYHCpAQ9D6W6BKk-n5DsISbRSzLY?e=rgX9lC" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCC05K8ZCRaRZF5AeE5gfl_AXWOcq-TbhYAXWxgGBHBkyI?e=Ylbsw8" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "palacio-nacional-ajuda", 
    name: "Palácio Nacional da Ajuda", 
    image: PNA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6luAC45_iTJDUgJUdwkd-AfVLliD2g2UWb_Pys_KYjXU?e=cZlrWO" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDEwxJq2lM0QoBncY0cNG98AfzYiVGkNeRToniMABcYqmo" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDhyQl8LU9YR5o9jXnybfpbAd4-NeMjqEXwNEBdwQrTyjs?e=z1s4Eo" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "torre-belem", 
    name: "Torre de Belém", 
    image: TB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDoOe_SbBN4QLXTaZ8pRSAwAWzqjSF1uLWWxn0qAMUlSNQ?e=fcQN80" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCwA9bB2pHRQ4oclketOLmVAb5c5GRVjjLDIZ5WAqWL0fM?e=3SDPWp" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtqi7MW7MuRYRp7tfPggKrAWOemnxNF_ehti2sY6B8VLw" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-sao-martinho-tibaes", 
    name: "Mosteiro de São Martinho de Tibães", 
    image: MSMT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCrdMaBuRQ4RIsse8Uq24QxAV56qWGsRsYoXvkrhx8ERL4" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB2vDzqsAxbQbgrcy7N5lHCAcl34hqbYcU6zqYL4oxwRoQ?e=wAu6By" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-velha-coimbra", 
    name: "Sé Velha de Coimbra", 
    image: SVC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC77zKf6DDsQYp-Iu5p4Ay1Ae7DDIhwzZSmgsyGvPrFDEc" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAviAeeXBr0R625zSlncT2rAVzL-oKuDTPI6t1484fDig0?e=Ib9cYv" },
      demos: { available: false, url: "" }
    }
  },
];

/* ================= COMPONENTE PRINCIPAL ================= */

const ModelCatalog = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const normalizeString = (str: string) => {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleFilterToggle = (filter: FilterType) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const filteredLocations = [...locationsList]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((location) => {
      const matchesSearch = !debouncedSearch || normalizeString(location.name).includes(normalizeString(debouncedSearch));
      
      // Multi-Filter handling (safeguarded against custom structural exceptions like MNAZ)
      const matchesMultiFilter = activeFilters.every((filter) => {
        if (!location.resources) return false; 
        if (filter === "DADOS") return location.resources.dados.available;
        if (filter === "MODELOS") return location.resources.modelos3D.available;
        if (filter === "DEMOS") return location.resources.demos.available;
        return true;
      });

      return matchesSearch && matchesMultiFilter;
    });

  /* ================= SUB-COMPONENTES ================= */
  
  const ResourceButton = ({ title, icon, resource }: { title: string, icon: JSX.Element, resource: ResourceState }) => {
    if (!resource.available) {
      return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 opacity-60 cursor-not-allowed">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-200 text-gray-400 rounded-lg">{icon}</div>
            <div className="text-left">
              <h4 className="font-bold text-gray-500">{title}</h4>
              <p className="text-xs text-gray-400">Pasta Vazia / Indisponível</p>
            </div>
          </div>
          <ExclamationCircleIcon className="h-6 w-6 text-gray-300" />
        </div>
      );
    }

    return (
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:border-primary-500 hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-50 text-primary-500 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
            {icon}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900 group-hover:text-primary-500 transition-colors">{title}</h4>
            <p className="text-xs text-emerald-500 font-medium flex items-center gap-1">
              <CheckCircleIcon className="h-3 w-3" /> Ficheiros Disponíveis
            </p>
          </div>
        </div>
        <FolderOpenIcon className="h-6 w-6 text-gray-300 group-hover:text-primary-500 transition-colors" />
      </a>
    );
  };

  return (
    <section id="all-locations" className="mx-auto bg-gray-20 min-h-screen py-20">
      <div className="mx-auto w-5/6">
        
        {/* HEADER */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 text-left border-b border-gray-200 pb-8">
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
                Acesso de Dados
              </p>
            </div>
            <HText>REPOSITÓRIO DE GÉMEOS DIGITAIS</HText>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
              Explore os resultados dos levantamentos e processamentos. Aceda diretamente às pastas de <strong>Dados</strong>, <strong>Modelos 3D</strong> e <strong>Vídeos/Demos</strong> disponíveis para cada local.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/repository")}
            className="flex items-center w-fit gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-xs uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </motion.button>
        </div>

        {/* BARRA DE FILTROS UPGRADED (MULTI-SELECÇÃO) */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2 hidden sm:block">Filtrar por:</span>
            
            <button 
              onClick={clearAllFilters} 
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.length === 0 
                  ? "bg-gray-900 text-white shadow-md" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Todos
            </button>

            <button 
              onClick={() => handleFilterToggle("DADOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("DADOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <CircleStackIcon className="h-4 w-4" /> Dados
            </button>

            <button 
              onClick={() => handleFilterToggle("MODELOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("MODELOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <CubeIcon className="h-4 w-4" /> Modelos 3D
            </button>

            <button 
              onClick={() => handleFilterToggle("DEMOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("DEMOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <VideoCameraIcon className="h-4 w-4" /> Demos
            </button>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pesquisar local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-150 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* MAIN GRID */}
        {filteredLocations.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredLocations.map((location) => (
                <motion.div
                  layout 
                  key={location.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedLocation(location)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
                >
                  <div className="h-40 w-full overflow-hidden relative">
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Badge flutuante adaptado para contar subpastas dinâmicas ou estáticas */}
                    <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <FolderSolidIcon className="h-3 w-3" />
                      {location.customSubfolders 
                        ? `${location.customSubfolders.filter(f => f.resource.available).length} Espaços`
                        : `${[location.resources?.dados.available, location.resources?.modelos3D.available, location.resources?.demos.available].filter(Boolean).length}/3`
                      }
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-2">
                      {location.name}
                    </h3>
                    
                    <div className="mt-auto flex flex-col gap-2 border-t border-gray-100 pt-3">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Recursos</p>
                      <div className="flex gap-2">
                        {location.customSubfolders ? (
                          <span className="text-[10px] px-2 py-1 bg-amber-50 text-amber-700 rounded-md font-bold uppercase">
                            Múltiplas Áreas
                          </span>
                        ) : (
                          location.resources && (
                            <>
                              <div title="Dados" className={`p-1.5 rounded-md ${location.resources.dados.available ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-300'}`}>
                                <CircleStackIcon className="h-4 w-4" />
                              </div>
                              <div title="Modelos 3D" className={`p-1.5 rounded-md ${location.resources.modelos3D.available ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-50 text-gray-300'}`}>
                                <CubeIcon className="h-4 w-4" />
                              </div>
                              <div title="Demos e Vídeos" className={`p-1.5 rounded-md ${location.resources.demos.available ? 'bg-purple-50 text-purple-500' : 'bg-gray-50 text-gray-300'}`}>
                                <VideoCameraIcon className="h-4 w-4" />
                              </div>
                            </>
                          )
                        )}
                      </div>
                    </div>
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
            className="py-20 text-center bg-white rounded-3xl border border-gray-200 border-dashed"
          >
            <FolderOpenIcon className="h-16 w-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Nenhum resultado encontrado</h3>
            <p className="text-sm text-gray-500 mt-2">
              Não existem locais que correspondam à sua combinação de filtros selecionada.
            </p>
            <button 
              onClick={() => { setSearchTerm(""); clearAllFilters(); }}
              className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-bold transition-colors"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>

      {/* MODAL DE ARQUIVOS */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#FAF9F4] rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white text-gray-800 rounded-full backdrop-blur-md transition-all shadow-sm"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              
              {/* Cabeçalho do Modal */}
              <div className="h-60 relative w-full border-b border-gray-100">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 flex flex-col justify-end p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-1">
                    Explorador de Arquivos
                  </p>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {selectedLocation.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 bg-[#FAF9F4] flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
                
                {/* BOTÃO DA PASTA PRINCIPAL (Aparece para todos os modelos) */}
                {selectedLocation.mainFolder && selectedLocation.mainFolder.available && (
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Diretoria Principal</p>
                    <a 
                      href={selectedLocation.mainFolder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl border-2 border-dashed border-primary-300 bg-primary-50/20 hover:bg-primary-500 hover:border-primary-500 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary-500 text-white rounded-lg group-hover:bg-white group-hover:text-primary-500 transition-colors">
                          <FolderSolidIcon className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">Abrir Pasta Principal</h4>
                          <p className="text-xs text-primary-600 group-hover:text-primary-100 transition-colors">Ver todos os arquivos e subdiretórios unificados</p>
                        </div>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                )}

                {/* CONTEÚDO DINÂMICO: EXCEÇÃO MNAZ vs PASTAS PADRÃO */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {selectedLocation.customSubfolders ? "Sub-localizações / Divisões" : "Subpastas de Recursos"}
                  </p>

                  {selectedLocation.customSubfolders ? (
                    /* RENDERIZAÇÃO DA EXCEÇÃO (MNAZ - Locais internos do museu) */
                    <div className="flex flex-col gap-3">
                      {selectedLocation.customSubfolders.map((sub, idx) => (
                        <ResourceButton 
                          key={idx}
                          title={sub.title} 
                          icon={<CubeIcon className="h-6 w-6" />} 
                          resource={sub.resource} 
                        />
                      ))}
                    </div>
                  ) : (
                    /* RENDERIZAÇÃO PADRÃO (DADOS, MODELOS, DEMOS) */
                    selectedLocation.resources && (
                      <div className="flex flex-col gap-3">
                        <ResourceButton 
                          title="Dados" 
                          icon={<CircleStackIcon className="h-6 w-6" />} 
                          resource={selectedLocation.resources.dados} 
                        />
                        <ResourceButton 
                          title="Modelos 3D" 
                          icon={<CubeIcon className="h-6 w-6" />} 
                          resource={selectedLocation.resources.modelos3D} 
                        />
                        <ResourceButton 
                          title="Demos & Vídeos" 
                          icon={<VideoCameraIcon className="h-6 w-6" />} 
                          resource={selectedLocation.resources.demos} 
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ModelCatalog;