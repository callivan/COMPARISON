import { ActionCreator } from "redux";
import { PhoneDataType } from "../../server/types";
import {
  RemoveSameSpecsActionType,
  REMOVE_SAME_SPECS,
  ReturnAllSpecsActionType,
  RETURN_ALL_SPECS,
} from "./type";

export const RemoveSameSpecsAction: ActionCreator<RemoveSameSpecsActionType> = () => ({
  type: REMOVE_SAME_SPECS,
});
export const ReturnAllSpecsAction: ActionCreator<ReturnAllSpecsActionType> = (
  returnState: Array<PhoneDataType>
) => ({
  type: RETURN_ALL_SPECS,
  returnState,
});
