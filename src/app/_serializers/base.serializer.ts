import { Resource } from '../_models/resource';

export interface BaseSerializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
