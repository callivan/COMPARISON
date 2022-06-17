import React from "react";

import { Select } from "./Select";

import styles from "./phone.scss";

import phone from "../../../../../assets/imgs/phone.png";

interface IPhoneProps {
  className?: string;
}

export function Phone({ className }: IPhoneProps) {
  return (
    <div className={[styles["phone"], className].join(" ")}>
      <img className={styles["phone__img"]} src={phone} alt="Телефон" />
      <h3 className={styles["phone__name"]}>Apple iPhone 12</h3>
      <Select className={styles["phone__select"]} />
    </div>
  );
}
