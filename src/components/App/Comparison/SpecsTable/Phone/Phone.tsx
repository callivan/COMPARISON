import React from "react";

import { Select } from "./Select";

import styles from "./phone.scss";

interface IPhoneProps {
  id: number;
  img: string;
  name: string;
  notShowPhonesCount: number;
  className?: string;
}

export function Phone({
  id,
  img,
  name,
  notShowPhonesCount,
  className,
}: IPhoneProps) {
  return (
    <div className={[styles["phone"], className].join(" ")}>
      <div className={styles["phone__info"]}>
        <img className={styles["phone__img"]} src={img} alt="Телефон" />
        {notShowPhonesCount > 0 && (
          <Select className={styles["phone__select"]} id={id} />
        )}
      </div>
      <h3 className={styles["phone__name"]}>{name}</h3>
    </div>
  );
}
