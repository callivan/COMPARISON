import { PhoneDataType } from "../../../server/types";

//Функция добляет телефон в массив с телефонами,
//которые отображаются на странице со сравнением характеристик.
export function addShowPhones(phones: Array<PhoneDataType>, count: number) {
  return phones.filter((_, index) => index < count);
}
