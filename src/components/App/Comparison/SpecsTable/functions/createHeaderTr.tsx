import React from "react";

import { PhoneDataType } from "../../../../../server/types";

import { CheckDiff } from "../CheckDiff";
import { Phone } from "../Phone";

export function createHeaderTr(
  phonesShow: Array<PhoneDataType>,
  phonesAll: Array<PhoneDataType>
) {
  if (phonesShow.length === 0) {
    return null;
  }

  return (
    <tr className={["specs-table__row", "container"].join(" ")}>
      <td className={"specs-table__td"}>
        <CheckDiff />
      </td>
      {phonesShow.map((phone) => {
        return (
          <td className={"specs-table__td"} key={String(phone.id)}>
            <Phone
              id={phone.id}
              img={phone.img}
              name={phone.model}
              notShowPhonesCount={phonesAll.length - phonesShow.length}
            />
          </td>
        );
      })}
    </tr>
  );
}
