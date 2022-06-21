import { PhoneDataType } from "../../server/types";

export const PHONES_SUCCSESS = "PHONES_SUCCESS";
export const PHONES_REQUEST = "PHONES_REQUEST";
export const PHONES_ERROR = "PHONES_ERROR";

export type GetPhonesSuccessActionType = {
  type: typeof PHONES_SUCCSESS;
  phones: Array<PhoneDataType>;
};
export type GetPhonesRequestActionType = {
  type: typeof PHONES_REQUEST;
};
export type GetPhonesErrorActionType = {
  type: typeof PHONES_ERROR;
  error: string;
};
export type GetPhonesActionsType =
  | GetPhonesSuccessActionType
  | GetPhonesRequestActionType
  | GetPhonesErrorActionType;