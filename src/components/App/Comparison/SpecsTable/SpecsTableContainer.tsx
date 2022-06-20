import React from "react";

import { useSelector } from "react-redux";
import { PhoneDataType } from "../../../../server/types";
import { InitialStateType } from "../../../../store/rootTypes";

import { addTableClass } from "./functions/addTableClass";

import { SpecsTableComponent } from "./SpecsTableComponent";

export function SpecsTable() {
  const showPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.showPhones
  );
  const notShowPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.notShowPhones
  );

  return (
    <table
      className={["specs-table", addTableClass(showPhones.length)].join(" ")}
    >
      <SpecsTableComponent
        showPhones={showPhones}
        notShowPhones={notShowPhones}
      />
    </table>
  );
}
