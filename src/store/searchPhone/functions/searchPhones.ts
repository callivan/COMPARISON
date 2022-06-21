import { PhoneDataType } from "../../../server/types";

//Функция принимает значение из input в блоке "Select" и на основании этого
//создает регулярное выражение для фильтрации массива с данными о телефонах
export function searchPhones(
  phoneNotShow: Array<PhoneDataType>,
  value: string
) {
  const arr = [...phoneNotShow];
  const result = arr.filter((phone) =>
    new RegExp(value.trim(), "gi").test(phone.model)
  );

  return result;
}
