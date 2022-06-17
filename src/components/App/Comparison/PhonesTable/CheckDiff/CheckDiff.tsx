import React from "react";
import styles from "./checkdiff.scss";

interface ICheckDiffProps {
  className?: string;
}

export function CheckDiff({ className }: ICheckDiffProps) {
  return (
    <label className={[styles["check"], className].join(" ")}>
      <input className={styles["check__diff-input"]} type="checkbox" />
      <span className={styles["check__custom-input"]}>
        <span className={styles["check__custom-mark"]}></span>
      </span>
      Показать различия
    </label>
  );
}
