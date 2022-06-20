import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { PhoneDataType } from "../../../../../../server/types";
import { NotShowPhonesAction } from "../../../../../../store/notShowPhones/actions";
import { InitialStateType } from "../../../../../../store/rootTypes";
import { SearchPhoneAction } from "../../../../../../store/searchPhone/actions";
import { ChangeShowPhonesAction } from "../../../../../../store/showPhones/actions";

import { createSelectItem } from "./functions/createSelectItem";

import { SelectComponent } from "./SelectComponent";

interface ISelectProps {
  id: number;
  className?: string;
}

export function Select({ id, className }: ISelectProps) {
  const dispatch = useDispatch();
  const notShowPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.notShowPhones
  );

  function HandleClickSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target;

    if (
      target instanceof HTMLButtonElement ||
      target instanceof HTMLDivElement
    ) {
      if (target.dataset.choose) {
        dispatch(ChangeShowPhonesAction(id, Number(target.dataset.choose)));
        dispatch(NotShowPhonesAction());
      }

      if (target.closest(".select__wrapper")) {
        const radioInputs: NodeListOf<HTMLInputElement> =
          e.currentTarget.querySelectorAll("[name='select-radio']");

        radioInputs.forEach((input) => (input.checked = false));
      }
    }
  }

  function HandleChangeInputSelect(e: React.FormEvent<HTMLDivElement>) {
    const target = e.target;

    if (!(target instanceof HTMLInputElement)) return;

    if (target.name === "search-phone") {
      dispatch(NotShowPhonesAction());
      dispatch(SearchPhoneAction(target.value));
    }
  }

  return (
    <div
      className={["select", className].join(" ")}
      onClick={(e) => HandleClickSelect(e)}
      onChange={(e) => HandleChangeInputSelect(e)}
    >
      <SelectComponent>{createSelectItem(notShowPhones)}</SelectComponent>
    </div>
  );
}
