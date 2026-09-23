import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  image: string;
  mainFolder: ResourceState;
  resources?: {
    dados: ResourceState;
    modelos3D: ResourceState;
    demos: ResourceState;
  };
  customSubfolders?: {
    titleKey: string;
    resource: ResourceState;
  }[];
};

type FilterType = "DADOS" | "MODELOS" | "DEMOS";

/* ================= DADOS ================= */

const locationsList: LocationData[] = [
  { 
    id: "agnostico-museu-nacional-arqueologia",  
    image: AMNA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtAWt5Ki2cQa1gwiuQOzK8AbwmM7RGVbWeOsYKxu87Lz4" },
    resources: {
      dados: { available: false, url: "#" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCWGHGOPlGsTY1wtiK4dEaCATeFSGAQjnbm5hwVii2hcgc?e=8JNUpz" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "convento-de-cristo",  
    image: CC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDWD_8joViSQIhbL_G1uCe7AdwPstUAKYmTgOuiwaX3c40" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAEPhJr92lgQ54MWqogjK6EAbeOlAngSMtjlL_nTl6UED0?e=4kafFc" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCpBV5XikOzRb1eOCaQe9UxAckPA4Rc3LnbdAm8MC0TeUY?e=SO8r17" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "casa-corpo-santo",  
    image: CCS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD5tYNgCj7_TrJuXTc1EvLrAWJXMzhWLWDHWOnaHFSRfc4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB4xfxJjrykQY-1g3nbRok-AU5JhmrZQaA5Kt868mtjfTQ?e=X6eHBo" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDk_Ur4mtiJRroIFzfrtiHeAQmpxKq0eiIEsyzvuRhM5V8?e=Af0b4W" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "castelo-elvas",  
    image: CE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCRVYSKgko2T7UUB1NodfYPAceENp71mCxAxPpjPPa1O-E" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCcb4Nbd0L_S4m1Mk9-l16QAavxAcCkknnWrxqQ2tbj5wY?e=Kdc4rs" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD7ezS4RscQS4BXwtu7TdHQAaIEq9DvU5WvhPPBkT0Jvns?e=tfeWzp" },
      demos: { available: false, url: "#" }
    }
  },
  { 
    id: "casa-museu-anastacio-goncalves",  
    image: CMAG, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCLvEquqjiURYaiP2QrwH8LAbyV-mWyMHyMMzFVhyryHz4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB9sjZtCB8JRpErMgIyIidpAeVbReU4RPtiBacw3rHIKUM?e=JkW34Z" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAree9TGEQJSI8kqhIAN620AWGc4mopNQRb4epKqiFUVH0?e=5AgpiZ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "castelo-viana-alentejo",  
    image: CVA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAPcpVo945RRYMsjP90EwjeAeCnP5uuYkvA7MBhysy_u2M" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAS6Q3AEXh-R6hwvp7jAhSLAe29tw02wZwHZcXodGxNbsY?e=uahJuB" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCGlqrlnxyARaCVjN2aSrUpAZQHXGsIc-1d5Pyw4f5f4r4?e=pkc8QQ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "convento-de-sao-bento-de-castris",  
    image: CBC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD2RsdhPMDtS5r77igREXrHAbFjsAooFiYSyg8sV0FgfAg" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDGbre9IZvMRrb2I5dAEMxCAbx_zxWjPcGfaVLBdzjtDUQ?e=8jeqAN" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC1oWFdtIPuQL4io5M65IQkAXIF6oUtp37Vx2FY3cbYlps?e=vbwxVg" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "gruta-do-escoural",  
    image: GE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDcuV2GXCulQbrGEYuZ64OUAXz95UT88JF6k6NaIBWvTXM" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDKcX8EXAm8RYx7uiXmp4SgAesAEJyEeiy9ZeYHy89bECs?e=NuM2rL" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB3nXQ32-sSTIWLJYIN9HlVAYOoHsl8VdBM4l-V6l11PFk?e=0Sx5kc" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-de-alcobaca",  
    image: MA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBwQhCgZHsFQpPmV4FdpYBTAXtlnQgXRzulSkCLuaExSh8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAHjxGjczKOS5kQM2KsxiJdAR65YXLwKS4wzPHVEsIt9eU?e=CRWLp6" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAp-F6eppVPRZwTnnSAZlmzAZ8l3QDWTE6TL6N1eKrgUX0?e=BqpLdq" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-de-arqueologia-e-etnografia-do-distrito-de-setubal",  
    image: MAEDS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBm4wAeoo-pQ7EfBZIVNfGMARXYO7KJUFNB6569unciiEw" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgApktsYl1uLSZAWAyjdBLBGAfsnIXSViKboyvC2fjVbGbs?e=Aim2Qx" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCk-tBwfJkmSInlz6pKlRaGAWAO_nMaJgjwcHALFs9H7d0?e=CqV78k" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-arte-popular",  
    image: MAP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDh4A8PtAzmSJbeOoRYXqBBAQ5Jt9zdKo_QqW2QQRbnrk0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD9TPzGhtK5RZEYwZggVfe4AdSkmM8gEqXJTbnoI40UUCE?e=ffnmTp" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCA8uPZWGxeR5s0JlmmvNEbAfFGBh2KFZNXeZDTun3HzXA?e=oicjlR" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-grao-vasco",  
    image: MNGV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBDbmG0yV6EQYKrjNSy8EeMATKmKGta9O-jCXzLrj37-Z4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCyga_KlD9XS4q0zkuLNyrsAUmhQtIuQZ9PAundOR5U_1o?e=xcZlvM" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDbaQzyxc_7Tp7dL_jLhWX3AekEu-0VVchVNaDErtdTzls?e=REbxa0" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-dos-jeronimos",  
    image: MJ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD3_pQ7dl1-Sq0qu7pPhEKHAd0LgPERB8OwGkA0tJbV5B4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTmINm5Gu5S7dq_6Qq3MnkAWeL3LRtuz8MsxGTxSONv_c?e=fjptJ5" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBTrrlycyuVRLpPWt77Y_6TAaxRPfWUQccgEf0gD1rO0jg?e=SHmYFM" },
      demos: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgADp7sAFpJESZMWWZuUOib-AYltJ7D6wxrDKAp2e96s_Bo?e=CwCnjL" }
    }
  },
  { 
    id: "museu-nacional-arte-antiga",  
    image: MNAA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD9JzOL0b2oR55XibRdSza_AeYJTh_FPCfyUKyHVbtIV5M" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA44mX3ForBSLjZy5b1KIPPAZRJuXISNNmgWmhVZbNPe0I?e=8TBG1O" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAPT9mNwbR6RaOHErzPOKrjAQ9zEp_ZduWh1FLhRyFSA3I?e=g46l6G" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-azulejo",  
    image: MNAZ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBIyuarAm2nTK_dAZFDZCFyARkJK_faKRl0wqapEB_Wiyg" },
    customSubfolders: [
      { titleKey: "mnazModels3d", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBd-nR-t_J4T7JaaHpOJmnfAZ1cUu-2fdWwAtQ6mT7aepE?e=BOUAHg" } },
      { titleKey: "mnazData", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBG2ZIiy_SySYF7yeP_XwWGASBXb6mxieWtbFAhufU83Zc?e=g1j7eO" } },
      { titleKey: "salaSantosSimoes", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDn53F_r7LAQrZZ2DFwc9T0Ab2dQ-YhTeae4mE6Xsg13bA?e=qYzIei" } },
      { titleKey: "panoramaLisboa", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDy9XX6CEgVT7BvIYfRy_eOAWJTqSPb0NBaZ10IxQgeAL4?e=ggapDg" } },
      { titleKey: "palacioGalveias", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCklvdbNr9eQLLIeGTKcYGYAdK3ztXdOLwjsULqwNDtxvk?e=cIubQb" } },
      { titleKey: "igrejaSaoLourenco", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgApBS4oRYawRbIWAlGCY19jATfwX4hCpXRf_fmC45aoQDs?e=SGxTKI" } },
      { titleKey: "jardimAmoreiras", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC8LouRxEBaRq6kzWrSHWb1AZ3jlmqAOOn0oFBXOJH2v9k?e=5UjOhR" } }
    ]
  },
  { 
    id: "museu-nacional-conimbriga",  
    image: MNC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6an2fM_QpQbjf2WJKtPsZAYWA64Q_xhmLdie8Hdn9bQw" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC_z13drKRzQb_3mAzwjcTGAT6zXpcav7I1GAkFt8zElhM?e=ljXx9h" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAtupx0xa9VSphp-g5SA4bPAQpzOUjR6R6T3qXX08cYWiM?e=V0P94d" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-dos-coches",  
    image: MNCo, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBpWb9xAPeLQ6dkepgESDxWARZA6zgDDsoN3FRQDzwEshc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDSF4r_-qjIRbF2JKy6tpiPAe2fuLefOx3nCEvZznkiYBc?e=hMjAt4" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBlURC1H8UDQqvIgUM8X63UAdK70GUaFCBO98MYQ1KVLyo?e=KtfUdf" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-etnologia",  
    image: MNE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAXbZZTefrRTrkmUKyIeG0WAQ1x_z6K06k7fD4ipC67Mf0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCAJa0CCokyQpHUw_MKTHOnARo1VHuYJeZXEixgsLn4xaI?e=Vetfsh" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCXbpDcA2TuSIjDOOEVgV_rAVQaJa8fMGVecmONO_aKtek?e=hJP2Ic" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-etnologia-conimbriga",  
    image: MNE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCYyEqr_n5nSawosTs81NdlAeAOQwW19_UeTuIzQcgxwR8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDjTsC78-EZSKNJQ_7U1OVoAdlR86N-5D4Ekcb7CogX3hE?e=XAg2eh" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBByHqvb-8OTaQNNQEZLb81AQ1Jva6vuw2NJx6ucYFMu64?e=03l1bk" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-frei-manuel-cenaculo",  
    image: MNFM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA9ptuyXwhpTLkL6mmBvCpfAX04301-AxDqhxPmyfmBGzI" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCJj9lnN6P8Sr_0rR2KJHQyAUzMmajyElrJfZqcGI2x0Xc?e=lfTNVA" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-resistencia-liberdade",  
    image: MNRL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBZ0o6ARER9S4tUNN22ycyoAeB78T2ujytkhwjGe2Wu_4U" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDxFfGNHzEiS7K5JtS2a3p1AUZbjUEQBD5CBK7dv6RJruA?e=mYiFCz" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA3EtdL8EkpT6w18JFqzSSBAWICOj7sxDiAcrW5damc8s4?e=B8suVL" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-traje",  
    image: MNdT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgALKWBN8y3ITbPWVtzltCwmATXa3-BBoOCfgyHun3zMoxQ" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDJoPvNNAidTatto3t3F4zrASDhrt_cPSOvugpRpTvlKvE?e=qxTwqS" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB1fK7oFPfjT4wJ9R5v4fx9AX06pt56prkDdGIPMhFL7qw?e=V6EZKZ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-teatro-danca",  
    image: MNTD, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA1b_67iQtxSqSijiUS9cE6AU6NuCR_dzZG_qnm4gJvE70" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBjnAS-lHD3SoB2JGpMvbUhAQ69l6AgntgLF6bNIEAZT-k?e=DSEInM" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-clara-velha",  
    image: MSCV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB7-bvth_wiQ5DlPhG7eQ5SAahTU0iQsFF3-9rXa59fJGQ" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTlx0JPLQeTa9ktMtoK2CEAWi3m0Wc2bdsOFYvtwFFDQU?e=GSApMH" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAyAdLMXoX6T7ZrIZZdqc4zAV084_JJ8U2SnC-G6kVRIfc?e=2dxXYX" },
      demos: { available: false, url: "" }
    },
    customSubfolders: [
      { titleKey: "hbimMscv", resource: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBUjqqYh10pR6blJsJBt3joAWxQvd8Hfe_0wpIRFccgAIY?e=Xja6vR" } },
    ]
  },
  { 
    id: "panteao-nacional",  
    image: PN, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAFN6WW7FgSSofS7FXe_v-1AZPPz4Syz6e06-GU58SDcgM" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAxaJIELLO8TLY8JYbaBLx9Ab0s1zFjy08bTYIggT7V1uY?e=QwaCcn" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAOKkV8c-2dTJJxfVWCokOUAV_R__5l9RDs8_xYXRcuSwE?e=3lVhbO" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ruinas-casa-rua-burgos",  
    image: RCRB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA8SLrrkGwGR6KdZhaioInWAZArUbwY6Sx2p_VHxd-ISG4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBCW_dhmBbjTbbURKZc24kQAbf2kwslaD_b1L4En6rnBYA?e=KOy6jC" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAENVm_jvA1SZowNgTPOxpmARQEOhagOv8KKIQ-g5EImrw?e=KL1IJ0" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ruinas-romanas-milreu",  
    image: RRM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCKRoxI0Ft3SKuyJl23VoSlARgy8YEZ1FPkTbkecwgvPoE" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCQaf8Bhkp-T4Ofx9WFM-vkAcpn10G7C_YeKR_5Za_hIwo?e=Ge7Xtv" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDOUkiOaWBJR6RRcSGXtf7HAW_megvZ_3Gb1hFK5GbQJ_A?e=kguj82" },
      demos: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBkg7KsfSGsS46fojISCEyDAU37lwsnABy52HSDhP_6ZRM?e=ZEUfYo" }
    }
  },
  { 
    id: "sitio-arqueologico-sao-cucufate",  
    image: SASC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAY0VfdBO9eSYI3gC7Jr0abAZjQZA7xj3-9UjBbr_4XXFo" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDTO6czBAaATr5FuPl5Bw7uAWFVzMfJApwxTWqLByML2Hs?e=KxekVR" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCk0RlOpxdBTZqMNI9i2v-5AXaunDQyVnmIC0FdHsuLJcg?e=NlmkHJ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-torre-palma",  
    image: VRRP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBnH_lbdIeeRogcYXZ87yDfAdNZKCr5RiLMbuVmCGUqnZ8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgASp6gtSzP1SZ91rW7mgoxlAbzdAUfC1Ktdno_E0_0Ted8?e=gkQ3ae" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBYcn3Uk7P8T4M-hbUzIWBEAUN6f0fZdDN9EuoxiJSlsMM?e=MR0ghs" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-braga",  
    image: SB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDcNT1W2ZekSYmRBovdoHd9Abb8WahM3fVkJDvQPLB0Sr4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDeF3anmk0LT682pJwFmogrAd1SrYHxVpdrEXuDibgqHR8" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCUOywDHwjtTqgHJoUi96GzAVFmdRucg9AiSRxc2_iceck?e=u492Jf" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-evora",  
    image: SE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAG_qyuEJe2RZKLe5BHf3zOAasuUPva2PSW1r5qs1biyMg" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAsgD2GkgtDQYKG_s4ZYB8gAWv0aAH0t85zKoa3lS8TsR8?e=OO7fqR" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAAVNXUPHEVRbpHZEGuK0n6AYZKr4oaH-lzBD4N9z1oSYU?e=YEhUmk" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-lisboa",  
    image: SL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCwJH3t1m4TRIXkIvOt3WPlAfhgNd85Wkto6FBtJbiNHy8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCzOmTYKsiqQ75MitrV3C6nAbDB9_ojye_squj-7Tzwj9k?e=D6sa4v" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCIb5YiWzjKSYOBt4-tIayGASapveyb4kh7B-tKpQDpJGU?e=6FWlod" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-portalegre",  
    image: SP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCcwwrb0gGWQ6HCAWmF2yXVAdM-NKeJxXbkEzdwvFunVzs" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCIfrU1eqyDQ5-RNh2ATeb4AQsBrcu9BsQP8iBn9ZWI9tQ?e=5nKp0u" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDS7qCMNTfpTpCh5S8ZB-v3Aa47VN-MgdF6-s-JU_-b35I?e=49DO13" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "torre-castelo-evoramonte",  
    image: TPCE, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD3hpEtLL36QbaLktwp1le-AXnU6xoX1Q1XcxWWmCHpEVc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCSleeSWVS-TLKDrzhN0Hb_AYjQWe7RFP4PTugFcRw3nIA?e=JfMIuB" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBNmZHo9OhESKAunzv4jSjoAYSbTFwPKER2EMnPvFMdPZg?e=ar07Yo" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "concatedral_miranda_douro",  
    image: CMD, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBuDG3478fvR6COyRpZWzz0AQFhy9Pj2TmerdoknKkwCds" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCsLxBeEotdSZpR471pHajUAXMAJfeYUG2xwxI94MD-LKo?e=BXjKr4" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCxfK-ttTXXQ7mm3_SzGH3hAZkrLBjw_-g19bx4IToEORE?e=LcwGT2" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "citania-santa-luzia",  
    image: CSL, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDUpJL8X921S6C7BRpqEyvrAcb_qUUqRPYagDBwZs0HhK8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAcXu3WFeIxR7EMu5IHdKqsAVLYVxk_jN974eTlBLnWsqk?e=8Qcd2n" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCCfOtTuaUxQZwPhQsuLzTdAeAGX93vBUfgGfY5txWdU7w?e=EFtIXM" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "convento-sao-salvador-vilar-frades",  
    image: CSSVF, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDZHf0NanhXQ4LiATcbZnGFASsVlnR2387mtSF8RYRmL68" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDFVpjn6KHmT5Aoev5Z0O5lAYfwISKlEhlxSPQudnuAW18?e=ciH5bn" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDapCNrSsOhTLzKxnv_NJRMAa5-TycIHrwJB5HH4xHnXas?e=mEtjwl" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "estacao-arquologica-tongobriga",  
    image: EAT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDClJK8uoZgR7-yPP-zOeLjAaJXoLsVyzBb8eBOwDMpSI0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCgR2Vz7kNUQpGRh97Z2vJzASyOdNNyIaMGfdxcUjP1bU4?e=vu8dDE" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAZBG0dS7-GRZhbQCLMa8RzAUF2wf_uMFXAgAKc1OuBa6k?e=v9xVej" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "ermida-nossa-senhora-guadalupe",  
    image: ENSG, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCsD8-XqJQAQ7f5gzVTz1nDAcjB7SFtnxCm-OPG-QJkIyc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDb0ehEce8zTpY3Um-Faeb0ASYFMvwNRqc9mi2dg1HaFvg?e=l6ClyA" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAyDg8ZmaGWS5tb99QqUttaAcWCw8iRMnX0Ip2jPpCg8II?e=Bk1NXM" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "fortaleza-sagres",  
    image: FS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB3nWxfAYA6TY68cbbd_PAOAfVyTL0eMPWin8nlzeusxss" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDVLGPxamV2Q64qdK2swjtcAZvK1NYPILbkKxppOn6MqKs?e=szFVUA" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCmkrV8vYuXSZsashzQfTAkAVK4UOoBv9P-OLEJMMPgSIU?e=wPjh09" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-abade-bacal",  
    image: MAB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCpoySpyqCARZDhXM680f4nAVC4BgyafmNvQqvAgx0TBVg" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBK44nhU6dYS6qrM6pfQMLZAdzVGuOwv-mI86JvpkvnMLQ?e=rUkYpS" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAaFHuXhPTFSYVYSsfmNDnfAfYWRy--x-8ADNx8bmC-ryY?e=fvR40q" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-soares-reis",  
    image: MNSR, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD1rJ41ktGnQbWxov3787qNAfasJT8s22MA0tmC0nomreU" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAv7hBY6IigQbzaUCP19uveAWfOYrwpzttwYZuhvFUswTQ?e=LY8GQu" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA-caxQ2WMcQ4YGnckmFG_gAVwUhNtOQrfziJ-8vPx1mY0?e=tDjudi" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-sao-joao-tarouca",  
    image: MSJT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgALILZhRD7xRIBOIox7-GzAAfFVfDDkwYKWbppq2bZcZLc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA2UcOWICVXQ4fmrnkArxJWASSg2WCMA95ivQ-xMh2L5Pc?e=6KGAaU" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-batalha",  
    image: MB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB0fbIo52PkQqJgUqWlpVZDAZAzXPwh6qYPHAvoHCewME8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6s_z5NQZjTqvDYgEN_ri4AcfK8lWW3UYRjnQ9QjcmQhk?e=rFqjRc" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCjnHwQLtcURLb3jHQztX0JATiBQ5CPYy4ZZwu2zAbrMfs?e=wYysUp" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-setubal-convento-jesus",  
    image: MSCJ, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDmqfWxTyycSp5H9L9UL9eqAdmx8z1iUQB-dZ0huo3ImXA" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAhzzmsapsJSYgT-2LcSTiCATw_C-I9wcZ3cCi05BQ3KqI?e=eFxv4g" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBNC_SROa5cRK551nXZyXIqAZefqXfLT91uUEEt77iP1I8?e=jrFBQG" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-maria-salzedas",  
    image: MSMS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCL2LyAfUArQJGTR2GG4jbjAXaMUzT1g2OLkshglwJYWZ8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCqwdhg7XCjRJ-w5Ckw6mw9AWEjB9HxSxCmlod2TM_wxQs?e=J6UGmo" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-santa-maria-pombeiro",  
    image: MSMP, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBAItpq2T3OQbSgLH62aGfRAToo4N0TOoZ1OxQbP_yBG4c" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDrslKDvEo-TprAjWyqHpYtAYbRdqhM8IMA4Kz1Wa7SOrM?e=dprhdD" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDs7V7vuyNwT7SNroVW80jWATVje2hdWc6lnoFWvvcx8-0?e=idKN39" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "palacio-nacional-mafra",  
    image: PNM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCznob8IFP3QpfWs4EivzCHASYitxWm87rTmZR8nVzdofg" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBH8z5aGob0QpI-ipt4veMHASmW6UeFwXCUeObHPCu5YOc?e=09gQfW" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgACvlgzQNDNSoG3AMi3ly2bAUc9ZTNSoxv0lz0TCYO40Nw?e=N2fJ73" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-castro-cola",  
    image: CCola, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAxqufnUna5Qo0oANHxI458AUTjDoHe5ipfYP4LqNSshwc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBsZbtT3LUeS5mgMvj59B-uAfe3KIQ8Ytbe3YYLArW8oS0?e=2Ue5iF" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDwinc3-5VaSo2j3spl5uNiAeCrFp5KeSuEp-ngBELTcrU?e=sORlVt" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "sitio-arqueologico-mirobriga",  
    image: SAM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAS3mUPZAGYR4nxsRVbkNnkASFR7BK_Nv_ae8iwXjVuSgI" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDZyprmZgspQ5us3gC49ugbAVSzyMWvQJCHE0fhMtSwZ6o?e=djUpJk" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgArEZGUiH_yQIw3YriN8-ZbAbrC4z0fUVLsIs0tat1OTDQ?e=svxhpx" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-lamego",  
    image: SLam, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDdeEtuHeZSS6yPWoWctsSwARVJLoX6-dCGLua_-GdSzgE" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBguf18ZAjBSKIukWUz3JYrAcKPcZsviSnkkg6EdPb39iE?e=zNoUpd" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDkL0zch-ReSLAJggO9a0GIAXOFeIHKl8A0OgZt5VwKtbA?e=CWGefu" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-nova-coimbra",  
    image: SNC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBcaWoqMlXGRpBcBJDPrgmPAerVCJ5sHjRHf1vwuM3qfYE" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBEkcnQnnAHRKf2ebEkP8_7AaZQ1C4Sd5el9OiKdcTke5U?e=hGt85s" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "santuario-panoias",  
    image: SPan, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDDfj5oafZSSqAWOri8u-9hAV379S7JOiYlfMhW56AiT4g" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCyARXAdLfWS5ykiHAvOnLnAdHCK3UslU2IELEbUVaBAW8?e=NgmAua" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCXVv6R_3pmSKaI-RVnZUFIAWOwqn7S597V5peO2Bkb6HI?e=FK43A4" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-porto",  
    image: SPor, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDmaUD9QvHUT7G704l3ApvYAWtEE79QF-jrlApWqPuE0Aw" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDmaUD9QvHUT7G704l3ApvYAWtEE79QF-jrlApWqPuE0Aw" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBkxEvQ-ve8Qad8aw25bnQvATKYbzLqP6K8XDDaaKo6lC0?e=mGh0mX" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-viseu",  
    image: SV, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA2ZUEid_f0TayOdxoLoJi8AZte5tvJd0CAbfA2fHw1Pk4" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtLZs29p4yQLifiUntjvfqARN8Jr41LP7XqgY_oA43gcc?e=CqwwkE" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBe9f_32MwoQY3uBnHUPqe5AX4w790wWCYqec7o7ancnEE?e=p8N6oq" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-biscainhos",  
    image: MBis, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCCRrv3qrRBQrSHqyUG3tx8AX8iqHdlqG347Z2ljmPQCHc" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDjsdm4-mSURa6tOlsZBx6vAUW57sXtaHSUSYf2IQ1Wpms?e=1LPvQo" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCOXJN4Q3ruQI7i6ezjLjs3Aen3Zg6YQ_z6Cr88mRA7QH0?e=KlQAiB" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-jose-malhoa",  
    image: MJM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCa5awRe1YzQIo42-nhWAVDAbgVlz4ctaM127NkzzmXRbI" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDuuLNAuFEzSY2VONd3p3F1AWuVL4pn2-B5D_XQd5JdwWU?e=I5zyLt" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBZnxZu95UiS5DTYDBNdWi7ASxdpZ6fjXLd_FulOY2P36s?e=OFDOX6" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-coches-picadeiro-real",  
    image: MNCp, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgD6JuSAT08pQq3rJYQUWFnxASH4EyjmvvE4dvJeTpiObHA" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgA0rwPc-UtDT6fgV2bhLwguAWn1HwZ1Ru734J9ni69UfDc?e=6UkslC" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCiaxYp6LwnTLwUmp1aqgjyATGL3BhiMnq8CXPxioal9S4?e=84zg1V" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-musica",  
    image: MNM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBc4iWRQ3KDRY_zcAX9ekNXAcpM4DhoM0WmDIfeT88E9v8" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAR8qlhc2QEQIo3caTuZdNCATxuGKBV3VwsL3dTDolusL4?e=Ve50L8" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAAEahvlmkTToEJVEzevLA1AZnpuEPtjEjWxyZnKDleXmg?e=egVK2o" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "centro-nacional-arqueologia-nautica-subaquatica",  
    image: CNANS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB5effMrHsGSp-bg5UG5YQsARUjhSRqCPiCvBToJsIvRiA" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBnQif6f7GDTY0NzXvYkWw7AYVYAhQd1681wHGV_XIkvxM?e=PKWXc6" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAabH_LpVOwS6RHfVdyVX78AQNx08_yEDdDZF3TW3zQPvA?e=sVwl09" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "domus-municipalis",  
    image: DM, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgClC9tj5zlRSITZewUfzBQ4Acibm9aWjV_8Yvll5S01JRw" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAgVtiG-UA5R6ED9z0_ics-AaTcQS1gCNQ-ROx6YrWawAg?e=7w3RXB" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBiyeW2S3pxQp_g1gdoqeSpAWWUPOF_9_NpKGBEh5h9uic?e=HOEHB9" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-arqueologia-d-diogo-sousa",  
    image: MADDS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDCRN4i_xfjTLn02K_m3-1OAQ_IaH0ALAAsReOPieq-uAk" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAX2qYH-Qq-Sr5N9uj9rUixAbIdvdQ5GCzBinmoL8WPuUk?e=B0Rwe1" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAcv5Ikt9CmT7uZZmBUZVTBAYJ6YBfnEI7s4MLqbkcQRhI?e=AfLFDv" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-alberto-sampaio",  
    image: MAS, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCOZ9yfqq2xRaHFxUvik6IdASZHRzLmITIHI51H4nXvdOs" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBU83zAHSJ6T7RNk4cJkIz5AZdrcCHKBdnbAGhJzF9SMuA?e=WK46kz" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBclwcnpxtCRLmcjnxpyRcrAcovDrDhEXrmJntmEOm9v9I?e=awkge1" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-arte-contemporanea",  
    image: MNAC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDoK98OnncaSrvzuNK408ywARbfab4gh3D71z8h22Lf9mQ" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBHdeCX0Eh1QrsLeG8XJ9l0AQR2Tps_xq-PW3oxxOmuavs?e=PaHPWb" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgBh7UsHTEOGS69hzwZFi2ISAbV33K7u8_XDA3pZ1pamldA?e=cczOAQ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "museu-nacional-machado-castro",  
    image: MNMC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCQAjNhElMXQKXix9ioYHCpAcbx8s45En2ctjo8JjnFfr0" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCC05K8ZCRaRZF5AeE5gfl_Aa8kCPeYZfJzI0Q_VGBqHl4?e=7MsAss" },
      modelos3D: { available: false, url: "" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "palacio-nacional-ajuda",  
    image: PNA, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC6luAC45_iTJDUgJUdwkd-AeGtIMxaYAk2cHabMcYinLU" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDEwxJq2lM0QoBncY0cNG98ATP4D7wgIbO7IgYs-iPmU3c?e=VwyHIQ" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDEwxJq2lM0QoBncY0cNG98ATP4D7wgIbO7IgYs-iPmU3c?e=VwyHIQ" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "torre-belem",  
    image: TB, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgDoOe_SbBN4QLXTaZ8pRSAwAeEyDtmnxtNV9-FUf1ZKdjQ" },
    resources: {
      dados: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCwA9bB2pHRQ4oclketOLmVAb0q9e-ogmk7QqnwkEqdB6M?e=tGiSbE" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCtqi7MW7MuRYRp7tfPggKrASWnF2LoPxkjqGxQmlp6E7I?e=urDyV5" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "mosteiro-sao-martinho-tibaes",  
    image: MSMT, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgCrdMaBuRQ4RIsse8Uq24QxAY_IpBaVt0fC9S3IFG48qco" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgB2vDzqsAxbQbgrcy7N5lHCAb-m8OtlFmW5FZCGruw9vVY?e=cmUWpj" },
      demos: { available: false, url: "" }
    }
  },
  { 
    id: "se-velha-coimbra",  
    image: SVC, 
    mainFolder: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgC77zKf6DDsQYp-Iu5p4Ay1ATtXzAsiG4qdxtX6LrRZvTc" },
    resources: {
      dados: { available: false, url: "" },
      modelos3D: { available: true, url: "https://unlpt-my.sharepoint.com/:f:/g/personal/mgv_fct_unl_pt/IgAviAeeXBr0R625zSlncT2rAaBTMB-Ib5pFWkbgSPuvNd8?e=c5hbfG" },
      demos: { available: false, url: "" }
    }
  },
];

/* ================= COMPONENTE PRINCIPAL ================= */

const ModelCatalog = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
  
  const navigate = useNavigate();

  // Nome traduzido de cada local (i18n.ts -> modelGallery.names)
  const getName = (id: string) => t(`modelGallery.names.${id}`);

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
    .sort((a, b) => getName(a.id).localeCompare(getName(b.id)))
    .filter((location) => {
      const matchesSearch = !debouncedSearch || normalizeString(getName(location.id)).includes(normalizeString(debouncedSearch));
      
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
              <p className="text-xs text-gray-400">{t("modelGallery.folderEmpty")}</p>
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
              <CheckCircleIcon className="h-3 w-3" /> {t("modelGallery.filesAvailable")}
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
                {t("modelGallery.subheading")}
              </p>
            </div>
            <HText>{t("modelGallery.title")}</HText>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
              {t("modelGallery.introPrefix")} <strong>{t("modelGallery.filterData")}</strong>, <strong>{t("modelGallery.filterModels")}</strong> {t("modelGallery.introConnector")} <strong>{t("modelGallery.resourceDemos")}</strong> {t("modelGallery.introSuffix")}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/repository")}
            className="flex items-center w-fit gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-xs uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            {t("modelGallery.backButton")}
          </motion.button>
        </div>

        {/* BARRA DE FILTROS UPGRADED (MULTI-SELECÇÃO) */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2 hidden sm:block">{t("modelGallery.filterLabel")}</span>
            
            <button 
              onClick={clearAllFilters} 
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.length === 0 
                  ? "bg-gray-900 text-white shadow-md" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {t("modelGallery.filterAll")}
            </button>

            <button 
              onClick={() => handleFilterToggle("DADOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("DADOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <CircleStackIcon className="h-4 w-4" /> {t("modelGallery.filterData")}
            </button>

            <button 
              onClick={() => handleFilterToggle("MODELOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("MODELOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <CubeIcon className="h-4 w-4" /> {t("modelGallery.filterModels")}
            </button>

            <button 
              onClick={() => handleFilterToggle("DEMOS")} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilters.includes("DEMOS") 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <VideoCameraIcon className="h-4 w-4" /> {t("modelGallery.filterDemos")}
            </button>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t("modelGallery.searchPlaceholder")}
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
                      alt={getName(location.id)} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Badge flutuante adaptado para contar subpastas dinâmicas ou estáticas */}
                    <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <FolderSolidIcon className="h-3 w-3" />
                      {location.customSubfolders 
                        ? t("modelGallery.spacesBadge", { total: location.customSubfolders.filter(f => f.resource.available).length })
                        : `${[location.resources?.dados.available, location.resources?.modelos3D.available, location.resources?.demos.available].filter(Boolean).length}/3`
                      }
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-2">
                      {getName(location.id)}
                    </h3>
                    
                    <div className="mt-auto flex flex-col gap-2 border-t border-gray-100 pt-3">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t("modelGallery.resourcesLabel")}</p>
                      <div className="flex gap-2">
                        {location.customSubfolders ? (
                          <span className="text-[10px] px-2 py-1 bg-amber-50 text-amber-700 rounded-md font-bold uppercase">
                            {t("modelGallery.multipleAreas")}
                          </span>
                        ) : (
                          location.resources && (
                            <>
                              <div title={t("modelGallery.tooltipData")} className={`p-1.5 rounded-md ${location.resources.dados.available ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-300'}`}>
                                <CircleStackIcon className="h-4 w-4" />
                              </div>
                              <div title={t("modelGallery.tooltipModels")} className={`p-1.5 rounded-md ${location.resources.modelos3D.available ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-50 text-gray-300'}`}>
                                <CubeIcon className="h-4 w-4" />
                              </div>
                              <div title={t("modelGallery.tooltipDemos")} className={`p-1.5 rounded-md ${location.resources.demos.available ? 'bg-purple-50 text-purple-500' : 'bg-gray-50 text-gray-300'}`}>
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
            <h3 className="text-xl font-bold text-gray-900">{t("modelGallery.emptyTitle")}</h3>
            <p className="text-sm text-gray-500 mt-2">
              {t("modelGallery.emptyText")}
            </p>
            <button 
              onClick={() => { setSearchTerm(""); clearAllFilters(); }}
              className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-bold transition-colors"
            >
              {t("modelGallery.clearFilters")}
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
                  alt={getName(selectedLocation.id)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 flex flex-col justify-end p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-1">
                    {t("modelGallery.modalSubheading")}
                  </p>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {getName(selectedLocation.id)}
                  </h2>
                </div>
              </div>

              <div className="p-6 bg-[#FAF9F4] flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
                
                {/* BOTÃO DA PASTA PRINCIPAL (Aparece para todos os modelos) */}
                {selectedLocation.mainFolder && selectedLocation.mainFolder.available && (
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t("modelGallery.mainDirectoryLabel")}</p>
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
                          <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">{t("modelGallery.openMainFolder")}</h4>
                          <p className="text-xs text-primary-600 group-hover:text-primary-100 transition-colors">{t("modelGallery.openMainFolderHint")}</p>
                        </div>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                )}

                {/* CONTEÚDO DINÂMICO: EXCEÇÃO MNAZ vs PASTAS PADRÃO */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {selectedLocation.customSubfolders ? t("modelGallery.subLocationsLabel") : t("modelGallery.resourceSubfoldersLabel")}
                  </p>

                  {selectedLocation.customSubfolders ? (
                    /* RENDERIZAÇÃO DA EXCEÇÃO (MNAZ - Locais internos do museu) */
                    <div className="flex flex-col gap-3">
                      {selectedLocation.customSubfolders.map((sub, idx) => (
                        <ResourceButton 
                          key={idx}
                          title={t(`modelGallery.subfolders.${sub.titleKey}`)} 
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
                          title={t("modelGallery.resourceData")} 
                          icon={<CircleStackIcon className="h-6 w-6" />} 
                          resource={selectedLocation.resources.dados} 
                        />
                        <ResourceButton 
                          title={t("modelGallery.resourceModels")} 
                          icon={<CubeIcon className="h-6 w-6" />} 
                          resource={selectedLocation.resources.modelos3D} 
                        />
                        <ResourceButton 
                          title={t("modelGallery.resourceDemos")} 
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
