import React from "react";

import styles from "./select.scss";

interface ISelectComponentPtops {
  children: Array<JSX.Element>;
}

export function SelectComponent({ children }: ISelectComponentPtops) {
  return (
    <>
      <label
        htmlFor="select-radio-btn"
        className={styles["select__btn-active"]}
        aria-label="Открыть список телефонов для сравнения"
        data-open
      >
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
      </label>
      <input
        className={styles["select__btn-radio"]}
        id="select-radio-btn"
        type="radio"
        name="select-radio"
      />
      <div className={styles["select__wrapper"]}>
        <input
          className={styles["select__search"]}
          type="text"
          placeholder="Поиск"
          name="search-phone"
        />
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
