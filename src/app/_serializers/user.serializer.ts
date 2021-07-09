/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { UserDto } from '../_models/models';

export class UserSerializer implements Serializer {
  fromJson(json: any): UserDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(user: UserDto): any {
    serializeDates(user);
    return user;
  }
}
