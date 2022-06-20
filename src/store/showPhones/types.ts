export const ADD_SHOW_PHONES = "ADD_SHOW_PHONES";
export const CHANGE_SHOW_PHONES = "CHANGE_SHOW_PHONES";

export type AddShowPhonesActionType = {
  type: typeof ADD_SHOW_PHONES;
  count: number;
};
export type ChangeShowPhonesActionType = {
  type: typeof CHANGE_SHOW_PHONES;
  from: number;
  to: number;
};
export type ShowPhonesActionsType =
  | AddShowPhonesActionType
  | ChangeShowPhonesActionType;
