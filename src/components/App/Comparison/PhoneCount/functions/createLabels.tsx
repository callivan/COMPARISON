import React from "react";

import { PhoneDataType } from "../../../../../server/types";

export function createLabels(phones: Array<PhoneDataType>, activeLabel: number) {
  return phones.map((_, index, arr) => {
    if (arr.length >= index + 2 && index + 2 <= 6) {
      return (
        <label className={"phone-count__label"} key={String(index)}>
          <input
            className={"phone-count__input"}
            type="radio"
            name="count"
            defaultChecked={index === activeLabel + 1}
          />
          <span className={"phone-count__line"}></span>
          {index + 2}
        </label>
      );
    }
  });
}
