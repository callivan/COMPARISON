import React from "react";

import { PhoneCount } from "./PhoneCount";
import { SpecsTable } from "./SpecsTable";

import styles from "./comparison.scss";

export function ComparisonComponent() {
  return (
    <section className={styles["comparison"]}>
      <div className={[styles["comparison__container"], "container"].join(" ")}>
        <h2 className={styles["comparison__title"]}>Смартфоны</h2>
        <PhoneCount className={styles["comparison__count"]} />
      </div>
      <div className={styles["comparison__table-wrapper"]}>
        <SpecsTable />
      </div>
    </section>
  );
}
