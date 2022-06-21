import { PhoneDataType } from "../../../server/types";

//Функция производит замену телефона в массиве с телефонами, которые отображаются на странице с характеристиками
//при клике на телефон в блоке "Select"
export function changeShowPhones(
  phonesAll: Array<PhoneDataType>,
  phonesShow: Array<PhoneDataType>,
  from: number,
  to: number
) {
  const newPhone = phonesAll.find((phone) => phone.id === to);
  const index = phonesShow.findIndex((phone) => phone.id === from);
  const newShowPhones = phonesShow.filter((phone) => phone.id !== from);

  if (!newPhone || index === -1) return phonesShow;

  newShowPhones.splice(index, 0, newPhone);

  return newShowPhones;
}
