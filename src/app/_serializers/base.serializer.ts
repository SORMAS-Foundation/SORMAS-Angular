import { Resource } from '../_models/resource';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
