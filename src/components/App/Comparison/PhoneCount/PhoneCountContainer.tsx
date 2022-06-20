import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { PhoneDataType } from "../../../../server/types";
import { NotShowPhonesAction } from "../../../../store/notShowPhones/actions";
import { InitialStateType } from "../../../../store/rootTypes";
import { AddShowPhonesAction } from "../../../../store/showPhones/actions";

import { PhoneCountComponent } from "./PhoneCountComponent";

interface IPhoneCountProps {
  className?: string;
}

export function PhoneCount({ className }: IPhoneCountProps) {
  const dispatch = useDispatch();
  const phones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.phones
  );
  const showPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.showPhones
  );

  function HandleClickShowPhones(
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) {
    const target = e.target;

    if (!(target instanceof HTMLLabelElement)) return;

    dispatch(AddShowPhonesAction(Number(target.textContent)));
    dispatch(NotShowPhonesAction());
  }

  return (
    <form
      className={["phone-count", className].join(" ")}
      onClick={(e) => HandleClickShowPhones(e)}
    >
      <PhoneCountComponent phones={phones} activeLabel={showPhones.length} />
    </form>
  );
}
