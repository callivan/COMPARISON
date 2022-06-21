import React from "react";

import styles from "./select.scss";

interface ISelectComponentPtops {
  children: Array<JSX.Element>;
  notShowPhonesCount: number;
}

export function SelectComponent({
  children,
  notShowPhonesCount,
}: ISelectComponentPtops) {
  return (
    <>
      <input
        className={styles["select__btn-radio"]}
        type="radio"
        name="select-radio"
        aria-label="Открыть список телефонов для сравнения"
      />
      <svg
        className={styles["select__btn-arrow"]}
        viewBox="0 0 22 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.375 1.125L11 9.5625L1.625 1.125"
          stroke="#0D5ADC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className={styles["select__wrapper"]}>
        {notShowPhonesCount > 3 && (
          <input
            className={styles["select__search"]}
            type="text"
            placeholder="Поиск"
            name="search-phone"
            aria-label="Найти телофон для сравнения"
          />
        )}
        <ul
          className={[
            styles["select__list"],
            children.length > 3 ? "scroll" : "",
          ].join(" ")}
        >
          {children}
        </ul>
      </div>
    </>
  );
}
