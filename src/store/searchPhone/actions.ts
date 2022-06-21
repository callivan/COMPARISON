import { ActionCreator } from "redux";
import { SearchPhoneActionType, SEARCH_PHONE } from "./types";

export const SearchPhoneAction: ActionCreator<SearchPhoneActionType> = (
  value: string
) => ({ type: SEARCH_PHONE, value });
