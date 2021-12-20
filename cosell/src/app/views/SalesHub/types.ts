/* eslint-disable linebreak-style */
export type State = {
  errorMsg: string;
  solutionNarrativeInfo: salesHubSolutionNarrativeInfo[];
  selectedSalesHubId: string;
  salesHubInfo: SalesHubInfo[];
};
export interface salesHubPayload {
  headerText: string;
  subHeaderText: string;
  headerImg: string | File;
  fontColor: string;
  fontFamily: string;
  solutionNarrativeId: string[];
}

export interface salesHubSolutionNarrativeInfo {
  description: string;
  image: string;
  imageName: string;
  mediumImage: string;
  name: string;
  solutionNarrativeId: number;
  tags: string[];
  thumbnailImage: string;
  isSelected?: boolean;
}
export interface SalesHubInfo {
  headerText: string;
  subHeaderText: string;
  headerImg: string | File;
  fontColor: string;
  fontFamily: string;
  salesHubId: number;
}

export interface solutionNarrativeData {
  asset_count: number;
  description: string;
  image: string;
  image_name: string;
  is_selected: false;
  medium_image: string;
  name: string;
  solution_narrative_id: number;
  tags: string[];
  thumbnail_image: string | File;
}
