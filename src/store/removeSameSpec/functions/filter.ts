import { PhoneDataType } from "../../../server/types";

export function filterPhonesBySpecs(phones: Array<PhoneDataType>) {
  const phonesArr = [...phones];
  const phoneKeys = Object.keys(phonesArr[0]) as unknown as Array<
    keyof PhoneDataType
  >;
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
