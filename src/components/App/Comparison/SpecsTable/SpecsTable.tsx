import React from "react";
import styles from "./specstable.scss";

export function SpecsTable() {
  return (
    <table className={styles["specs-table"]}>
      <tbody className={styles["specs-table__wrapper"]}>
        <tr className={styles["specs-table__row"]}>
          <th className={styles["specs-table__title"]}>ПРОИЗВОДИТЕЛЬ</th>
          <td className={styles["specs-table__spec"]}>Apple</td>
          <td className={styles["specs-table__spec"]}>Xiaomi</td>
          <td className={styles["specs-table__spec"]}>Samsung</td>
        </tr>
      </tbody>
    </table>
  );
}
