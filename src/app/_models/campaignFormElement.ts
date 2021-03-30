export interface CampaignFormElement {
  type?: string;
  id?: string;
  caption?: string;
  styles?: Array<string>;
  dependingOn?: string;
  dependingOnValues?: Array<string>;
  important?: boolean;
}
