import { Reducer } from "@reduxjs/toolkit";
import { filterPhonesBySpecs } from "./removeSameSpec/functions/filter";
import {
  DiffActionsType,
  REMOVE_SAME_SPECS,
  RETURN_ALL_SPECS,
} from "./removeSameSpec/type";
import {
  GetPhonesActionsType,
  PHONES_ERROR,
  PHONES_SUCCSESS,
} from "./getPhones/types";
import {
  NotShowPhonesActionType,
  NOT_SHOW_PHONES,
} from "./notShowPhones/types";
import { InitialStateType } from "./rootTypes";
import {
  ADD_SHOW_PHONES,
  CHANGE_SHOW_PHONES,
  ShowPhonesActionsType,
} from "./showPhones/types";
import { changeShowPhones } from "./showPhones/functions/changeShowPhones";
import { addShowPhones } from "./showPhones/functions/addShowPhones";
import { notShowPhones } from "./notShowPhones/functions/notShowPhones";
import { SearchPhoneActionType, SEARCH_PHONE } from "./searchPhone/types";
import { searchPhones } from "./searchPhone/functions/searchPhones";

const initialState: InitialStateType = {
  phones: [],
  showPhones: [],
  notShowPhones: [],
  error: "",
};

export const rootReducer: Reducer<
  InitialStateType,
  | GetPhonesActionsType
  | ShowPhonesActionsType
  | NotShowPhonesActionType
  | DiffActionsType
  | SearchPhoneActionType
> = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_SUCCSESS:
      return { ...state, phones: action.phones };
    case PHONES_ERROR:
      return { ...state, error: action.error };
    case ADD_SHOW_PHONES:
      return {
        ...state,
        showPhones: addShowPhones([...state.phones], action.count),
      };
    case CHANGE_SHOW_PHONES:
      return {
        ...state,
        showPhones: changeShowPhones(
          [...state.phones],
          [...state.showPhones],
          action.from,
          action.to
        ),
      };
    case NOT_SHOW_PHONES:
      return {
        ...state,
        notShowPhones: notShowPhones([...state.phones], [...state.showPhones]),
      };
    case REMOVE_SAME_SPECS:
      return {
        ...state,
        showPhones: filterPhonesBySpecs([...state.showPhones]),
      };
    case RETURN_ALL_SPECS: {
      return { ...state, showPhones: action.returnState };
    }
    case SEARCH_PHONE:
      if (!action.value.trim()) {
        return {
          ...state,
          notShowPhones: notShowPhones(
            [...state.phones],
            [...state.showPhones]
          ),
        };
      }

      return {
        ...state,
        notShowPhones: searchPhones(
          [...state.notShowPhones],
          action.value.trim()
        ),
      };
    default:
      return state;
  }
};
