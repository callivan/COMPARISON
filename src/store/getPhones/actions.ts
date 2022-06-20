import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { PhoneDataType } from "../../server/types";
import { InitialStateType } from "../rootTypes";
import { AddShowPhonesIdAction } from "../showPhones/actions";
import { ShowPhonesIdActionsType } from "../showPhones/types";
import {
  GetPhonesActionsType,
  GetPhonesErrorActionType,
  GetPhonesRequestActionType,
  GetPhonesSuccessActionType,
  PHONES_ERROR,
  PHONES_REQUEST,
  PHONES_SUCCSESS,
} from "./types";

export const GetPhonesRequestAction: ActionCreator<
  GetPhonesRequestActionType
> = () => ({ type: PHONES_REQUEST });
export const GetPhonesSuccessAction: ActionCreator<
  GetPhonesSuccessActionType
> = (phones: Array<PhoneDataType>) => ({
  type: PHONES_SUCCSESS,
  phones,
});
export const GetPhonesErrorAction: ActionCreator<GetPhonesErrorActionType> = (
  error: string
) => ({
  type: PHONES_ERROR,
  error,
});
export const GetPhones =
  (): ThunkAction<
    void,
    InitialStateType,
    any,
    GetPhonesActionsType | ShowPhonesIdActionsType
  > =>
  async (dispatch) => {
    try {
      dispatch(GetPhonesRequestAction());
      const request = await fetch("http://localhost:3001/phones");
      const response: Array<PhoneDataType> = await request.json();

      dispatch(GetPhonesSuccessAction(response));
    } catch (error: any) {
      dispatch(GetPhonesErrorAction(error.message));
    }
  };

function setViewPhones(count: number) {
  if (count > 3) {
  }
}
