import { PhoneDataType } from "../server/types";

export type InitialStateType = {
  phones: Array<PhoneDataType>;
  showPhones: Array<PhoneDataType>;
  notShowPhones: Array<PhoneDataType>;
  error: string;
};
