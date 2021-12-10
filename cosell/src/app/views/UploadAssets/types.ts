/* eslint-disable linebreak-style */
export type State = {
  errorMsg: string;
};

export interface uploadAssetPayload {
  assetName: string;
  assetType: string;
  assetFileType: string;
  assetFile: string;
  tags: string[];
}
