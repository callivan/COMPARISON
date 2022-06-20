import { ActionCreator } from "redux";
import { NotShowPhonesActionType, NOT_SHOW_PHONES } from "./types";

export const NotShowPhonesAction: ActionCreator<NotShowPhonesActionType> = () => ({
  type: NOT_SHOW_PHONES,
});
