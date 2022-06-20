import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhoneDataType } from "../../../../../server/types";
import {
  RemoveSameSpecsAction,
  ReturnAllSpecsAction,
} from "../../../../../store/removeSameSpec/actions";
import { InitialStateType } from "../../../../../store/rootTypes";
import { CheckDiffComponent } from "./CheckDiffComponent";

interface ICheckDiffProps {
  className?: string;
}

export function CheckDiff({ className }: ICheckDiffProps) {
  const showPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.showPhones
  );
  const [prevState, setPrevState] = useState<Array<PhoneDataType> | null>(null);
  const [isRemoveSpecs, setRemoveSpecs] = useState(false);
  const dispatch = useDispatch();

  function HandleClickDiff(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
    if (e.target instanceof HTMLInputElement) {
      isRemoveSpecs
        ? dispatch(ReturnAllSpecsAction(prevState))
        : dispatch(RemoveSameSpecsAction());

      if (!isRemoveSpecs) {
        setPrevState(showPhones);
      }

      setRemoveSpecs(!isRemoveSpecs);
    }
  }

  return (
    <label
      className={["check", className].join(" ")}
      onClick={(e) => HandleClickDiff(e)}
    >
      <CheckDiffComponent />
    </label>
  );
}
