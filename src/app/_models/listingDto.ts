export interface ListingDto {
  uuid: string;
  regionUuid: string;
  name: string;
  districtUuid: string;
  districtName: string;
  enabled?: boolean;
  endDate?: Date;
}
