import React from "react";

import { PhoneCount } from "./PhoneCount";
import { PhonesTable } from "./PhonesTable";
import { SpecsTable } from "./SpecsTable";

import styles from "./comparison.scss";

export function Comparison() {
  return (
    <main>
      <section className={styles["comparison"]}>
        <div
          className={[styles["comparison__container"], "container"].join(" ")}
        >
          <h2 className={styles["comparison__title"]}>Смартфоны</h2>
          <PhoneCount className={styles["comparison__count"]} />
          <div className={styles["comparison__tables"]}>
            <PhonesTable />
            <SpecsTable />
          </div>
        </div>
      </section>
    </main>
  );
}
