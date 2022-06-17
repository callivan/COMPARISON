import React from "react";

import styles from "./phonecount.scss";

interface IPhoneCountProps {
  className?: string;
}

export function PhoneCount({ className }: IPhoneCountProps) {
  return (
    <form className={[styles["phone-count"], className].join(" ")}>
      <legend className={styles["phone-count__title"]}>
        Отобразить товары:
      </legend>
      <label className={styles["phone-count__label"]}>
        <input
          className={styles["phone-count__input"]}
          type="radio"
          name="count"
        />
        <span className={styles["phone-count__line"]}></span>2
      </label>
      <label className={styles["phone-count__label"]}>
        <input
          className={styles["phone-count__input"]}
          type="radio"
          name="count"
          defaultChecked={true}
        />
        <span className={styles["phone-count__line"]}></span>3
      </label>
      <label className={styles["phone-count__label"]}>
        <input
          className={styles["phone-count__input"]}
          type="radio"
          name="count"
        />
        <span className={styles["phone-count__line"]}></span>4
      </label>
      <label className={styles["phone-count__label"]}>
        <input
          className={styles["phone-count__input"]}
          type="radio"
          name="count"
        />
        <span className={styles["phone-count__line"]}></span>5
      </label>
      <label className={styles["phone-count__label"]}>
        <input
          className={styles["phone-count__input"]}
          type="radio"
          name="count"
        />
        <span className={styles["phone-count__line"]}></span>6
      </label>
    </form>
  );
}
