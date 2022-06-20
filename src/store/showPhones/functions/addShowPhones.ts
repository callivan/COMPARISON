import { PhoneDataType } from "../../../server/types";

export function addShowPhones(phones: Array<PhoneDataType>, count: number) {
  return phones.filter((_, index) => index < count);
}
