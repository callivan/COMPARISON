import { ActionCreator } from "redux";
import {
  AddShowPhonesActionType,
  ADD_SHOW_PHONES,
  ChangeShowPhonesActionType,
  CHANGE_SHOW_PHONES,
} from "./types";

export const AddShowPhonesAction: ActionCreator<AddShowPhonesActionType> = (
  count: number
) => ({ type: ADD_SHOW_PHONES, count });
export const ChangeShowPhonesAction: ActionCreator<
  ChangeShowPhonesActionType
> = (from: number, to: number) => ({
  type: CHANGE_SHOW_PHONES,
  from,
  to,
});
