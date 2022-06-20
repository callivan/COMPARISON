import React from "react";

import { PhoneDataType } from "../../../../../server/types";

import { CheckDiff } from "../CheckDiff";
import { Phone } from "../Phone";

export function createHeaderTr(
  phones: Array<PhoneDataType>,
  notShowPhones: Array<PhoneDataType>
) {
  if (phones.length === 0) {
    return null;
  }

  return (
    <tr className={["specs-table__row", "container"].join(" ")}>
      <td className={"specs-table__td"}>
        <CheckDiff />
      </td>
      {phones.map((phone) => {
        return (
          <td className={"specs-table__td"} key={String(phone.id)}>
            <Phone
              id={phone.id}
              img={phone.img}
              name={phone.model}
              notShowPhonesCount={notShowPhones.length}
            />
          </td>
        );
      })}
    </tr>
  );
}
