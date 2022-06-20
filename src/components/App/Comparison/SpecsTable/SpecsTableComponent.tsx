import React from "react";

import { PhoneDataType } from "../../../../server/types";

import { createHeaderTr } from "./functions/createHeaderTr";
import { createBodyTr } from "./functions/createBodyTr";

import styles from "./specstable.scss";

interface ISpecsTableComponentProps {
  showPhones: Array<PhoneDataType>;
  notShowPhones: Array<PhoneDataType>;
}

export function SpecsTableComponent({ showPhones, notShowPhones }: ISpecsTableComponentProps) {
  return (
    <>
      <thead className={styles["specs-table__header"]}>
        {createHeaderTr(showPhones, notShowPhones)}
      </thead>
      <tbody className={styles["specs-table__body"]}>
        {createBodyTr(showPhones, "maker")}
        {createBodyTr(showPhones, "year")}
        {createBodyTr(showPhones, "screen")}
        {createBodyTr(showPhones, "country")}
        {createBodyTr(showPhones, "memory")}
        {createBodyTr(showPhones, "frequency")}
        {createBodyTr(showPhones, "nfc")}
        {createBodyTr(showPhones, "esim")}
        {createBodyTr(showPhones, "wirelessCharger")}
        {createBodyTr(showPhones, "price")}
        <tr
          className={[styles["specs-table__row"], "container"].join(" ")}
        ></tr>
      </tbody>
    </>
  );
}
