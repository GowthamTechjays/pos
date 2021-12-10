export type State = {
  errorMsg: string;
  assetInfo: SolutionNarrativeAssetInfo[];
  thumbnailUploadedTime: number;
  selectedSolutionNarrativeIds: number[];
  solutionNarrativeInfo: SolutionNarrativeInfo[];
};

export interface solutionNarrativePayload {
  name: string;
  description: string;
  thumbnailImage: string | File;
  tags: string[];
  assetIds: string[];
}

export interface SolutionNarrativeAssetInfo {
  access_type: string;
  access_type_id: number;
  asset_id: number;
  asset_name: string;
  file: string;
  file_name: string;
  file_type: string;
  file_type_id: 2;
  id: number;
  is_selected: boolean;
  name: string;
  tags: [string];
}

export interface Alert {
  showAlert: boolean;
  severity: string;
  message: string;
}

export interface SolutionNarrativeInfo {
  description: string;
  image: string;
  image_name: string;
  medium_image: string;
  name: string;
  solution_narrative_id: number;
  tags: string[];
  thumbnail_image: string;
  is_selected?: boolean;
}
