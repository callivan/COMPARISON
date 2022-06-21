import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { PhoneDataType } from "../../../../server/types";
import { InitialStateType } from "../../../../store/rootTypes";

import { tableShow } from "./animations/tableShow";

import { addTableClass } from "./functions/addTableClass";

import { SpecsTableComponent } from "./SpecsTableComponent";

export function SpecsTable() {
  const showPhones = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.showPhones
  );
  const phonesAll = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.phones
  );

  useEffect(() => {
    tableShow();
  }, [])

  return (
    <table
      className={["specs-table", addTableClass(showPhones.length)].join(" ")}
    >
      <SpecsTableComponent
        showPhones={showPhones}
        phonesAll={phonesAll}
      />
    </table>
  );
}
