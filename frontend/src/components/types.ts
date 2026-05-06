export enum SelectedPage {
  Home = "home",
  Model = "model",
  OurProject = "ourproject",
  ModelDemo = "modelDemo",
  Santa_Clara = "santaClara",
  Azulejo = "vr_ar_azulejo",
  Gruta_Escoural = "gruta_navegação",
  HBIM_pesquisa = "hbim_pesquisa",
  HBIM_segmentacao = "hbim_segmentacao",
  Milreu_APP = "app_milreu"
}

export interface BoardType {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
