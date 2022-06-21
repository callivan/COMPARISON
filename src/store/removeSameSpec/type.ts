import { PhoneDataType } from "../../server/types";

export const REMOVE_SAME_SPECS = "REMOVE_SAME_SPECS";
export const RETURN_ALL_SPECS = "RETURN_ALL_SPECS";

export type RemoveSameSpecsActionType = {
  type: typeof REMOVE_SAME_SPECS;
};
export type ReturnAllSpecsActionType = {
  type: typeof RETURN_ALL_SPECS;
  returnState: Array<PhoneDataType>;
};
export type DiffActionsType = RemoveSameSpecsActionType | ReturnAllSpecsActionType;
