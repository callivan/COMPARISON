import { PhoneDataType } from "../../../server/types";

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
