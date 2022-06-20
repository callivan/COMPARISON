import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { PhoneDataType } from "../../../server/types";
import { NotShowPhonesAction } from "../../../store/notShowPhones/actions";
import { InitialStateType } from "../../../store/rootTypes";
import { AddShowPhonesAction } from "../../../store/showPhones/actions";

import { ComparisonComponent } from "./ComparisonComponent";

export function Comparison() {
  const dispatch = useDispatch();
  const phones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.phones
  );

  useEffect(() => {
    if (phones.length) {
      dispatch(AddShowPhonesAction(phones.length > 2 ? 3 : phones.length));
      dispatch(NotShowPhonesAction());
    }
  }, [phones]);

  return <ComparisonComponent />;
}
