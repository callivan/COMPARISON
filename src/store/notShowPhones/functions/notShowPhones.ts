import { PhoneDataType } from "../../../server/types";

export function notShowPhones(
  phones: Array<PhoneDataType>,
  showPhones: Array<PhoneDataType>
) {
  const phonesArr = [...phones];
  const showPhonesArr = [...showPhones];
  return phonesArr.filter((phone) => !showPhonesArr.includes(phone));
}
