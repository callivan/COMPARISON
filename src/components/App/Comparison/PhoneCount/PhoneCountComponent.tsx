import React from "react";

import { PhoneDataType } from "../../../../server/types";

import { createLabels } from "./functions/createLabels";

import styles from "./phonecount.scss";

interface IPhoneCountComponentProps {
  phones: Array<PhoneDataType>;
  activeLabel: number;
}

export function PhoneCountComponent({
  phones,
  activeLabel,
}: IPhoneCountComponentProps) {
  return (
    <>
      <legend className={styles["phone-count__title"]}>
        Отобразить товары:
      </legend>
      {createLabels(phones, activeLabel)}
    </>
  );
}
