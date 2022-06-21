import { PhoneDataType } from "../../../server/types";

export function filterPhonesBySpecs(phones: Array<PhoneDataType>) {
  const phonesArr = [...phones];
  const phoneKeys = Object.keys(phonesArr[0]) as unknown as Array<
    keyof PhoneDataType
    >;
  
  //Массив с объектами типа "{key: boolean}", где "key" - это один из ключей полученных из обьекта характеристик телефона.
  //Если значение ключа "true", то характеристику необходимо удалить из списка при поставленной галочке в checkbox "Показать различия".
  const findSameSpec = phoneKeys.reduce<{
    [key in keyof PhoneDataType]?: boolean;
  }>((acc, key) => {
    acc[key] = phonesArr.every((phone) => phone[key] === phonesArr[0][key]);
    return acc;
  }, {});
  
  const removeSameSpec = phonesArr.map((phone) => {
    const newPhoneSpecs = {} as {
      [key in keyof PhoneDataType]?: string | number | boolean;
    };

    phoneKeys.forEach((key) => {
      if (!findSameSpec[key]) {
        newPhoneSpecs[key] = phone[key];
      }
    });

    return newPhoneSpecs;
  });

  return removeSameSpec as Array<PhoneDataType>;
}
