import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { PhoneDataType } from "../../../server/types";
import { NotShowPhonesAction } from "../../../store/notShowPhones/actions";
import { InitialStateType } from "../../../store/rootTypes";
import { AddShowPhonesAction } from "../../../store/showPhones/actions";

import { comparisonShow } from "./animations/comparisonShow";

import { ComparisonComponent } from "./ComparisonComponent";

export function Comparison() {
  const dispatch = useDispatch();
  const phones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.phones
  );

  useEffect(() => {
    comparisonShow();
  }, [])

  useEffect(() => {
    if (phones.length) {
      dispatch(AddShowPhonesAction(phones.length > 2 ? 3 : phones.length));
      dispatch(NotShowPhonesAction());
    }
  }, [phones]);

  function HandleClickComparison(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (!target.closest(".select")) {
      const radioInputs: NodeListOf<HTMLInputElement> =
        e.currentTarget.querySelectorAll("[name='select-radio']");

      radioInputs.forEach((input) => (input.checked = false));
    }
  }

  return (
    <section className={"comparison"} onClick={(e) => HandleClickComparison(e)}>
      <ComparisonComponent />
    </section>
  );
}
