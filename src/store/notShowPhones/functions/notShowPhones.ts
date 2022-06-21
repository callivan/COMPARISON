import { PhoneDataType } from "../../../server/types";

//Функция возвращает телефоны, который не показываются на странице сравнения характеристик.

export function notShowPhones(
  phones: Array<PhoneDataType>,
  showPhones: Array<PhoneDataType>
) {
  const phonesAll = [...phones];
  const phonesShow = [...showPhones];
  return phonesAll.filter((phone) => !phonesShow.includes(phone));
}
