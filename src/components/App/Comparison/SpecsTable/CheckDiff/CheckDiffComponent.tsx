import React from "react";

import styles from "./checkdiff.scss";

export function CheckDiffComponent() {
  return (
    <>
      <input className={styles["check__diff-input"]} type="checkbox" />
      <span className={styles["check__custom-input"]}>
        <span className={styles["check__custom-mark"]}></span>
      </span>
      Показать различия
    </>
  );
}
