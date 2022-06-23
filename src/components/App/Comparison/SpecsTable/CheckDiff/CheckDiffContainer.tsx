import React, { useEffect, useState } from "react";

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
  const prevShowPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.prevShowPhones
  );
  const [isRemoveSpecs, setRemoveSpecs] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {

    console.log(1)

    !isRemoveSpecs
      ? dispatch(ReturnAllSpecsAction(prevShowPhones))
      : dispatch(RemoveSameSpecsAction());
  }, [isRemoveSpecs, prevShowPhones]);

  function HandleClickDiff(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
    if (
      e.target instanceof HTMLLabelElement ||
      e.target instanceof HTMLSpanElement
    ) {
      setRemoveSpecs(!isRemoveSpecs);
      return;
    } else {
      e.stopPropagation();
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
