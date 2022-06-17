import React from "react";
import { CheckDiff } from "./CheckDiff";
import { Phone } from "./Phone";

import styles from "./phonestable.scss";

interface IPhoneTableProps {
  className?: string;
}

export function PhonesTable({ className }: IPhoneTableProps) {
  return (
    <table className={[styles["phones-table"], className].join(" ")}>
      <tbody className={styles["phones-table__wrapper"]}>
        <tr className={styles["phones-table__row"]}>
          <th>
            <CheckDiff />
          </th>
          <td>
            <Phone className={styles["phones-table__phone"]} />
          </td>
          <td>
            <Phone className={styles["phones-table__phone"]} />
          </td>
          <td>
            <Phone className={styles["phones-table__phone"]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
