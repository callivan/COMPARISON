import { PhoneDataType } from "../../../server/types";

export function changeShowPhones(
  phonesAll: Array<PhoneDataType>,
  phonesShow: Array<PhoneDataType>,
  from: number,
  to: number
) {
  const newPhone = phonesAll.find((phone) => phone.id === to);
  const newShowPhones = phonesShow.filter((phone) => phone.id !== from);

  if (!newPhone) return phonesShow;

  newShowPhones.push(newPhone);
  return newShowPhones;
}
