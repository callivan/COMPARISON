import React from "react";

import { PhoneDataType } from "../../../../../server/types";

export type FnCreatorPropsType = keyof PhoneDataType;

export function createBodyTr(
  phones: Array<PhoneDataType>,
  prop: FnCreatorPropsType
) {
  const td = phones.map((phone, index) => {
    if (phone[prop] === undefined) return null;

    if (["nfc", "esim", "wirelessCharger"].includes(prop)) {
      return (
        <td className={"specs-table__td"} key={String(phone.id + prop + index)}>
          {phone[prop] ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM9.01982 12.9508L16.7961 5.17451L18.7334 7.11161L9.01982 16.8255L3.2667 11.0722L5.20408 9.13514L9.01982 12.9508Z"
                fill="#36935B"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM8.75981 11.0304L4 15.7888L6.2734 18.0629L11.0338 13.3038L15.7266 17.9952L18 15.7211L13.3079 11.0304L17.9979 6.34168L15.7245 4.06764L11.0338 8.75697L6.27549 3.99996L4.00209 6.274L8.75981 11.0304Z"
                fill="#EF4058"
              />
            </svg>
          )}
        </td>
      );
    }

    return (
      <td className={"specs-table__td"} key={String(phone.id + prop + index)}>
        {phone[prop]}
      </td>
    );
  });

  let tdTitle = "";

  switch (prop) {
    case "maker":
      tdTitle = "ПРОИЗВОДИТЕЛЬ";
      break;
    case "year":
      tdTitle = "ГОД РЕЛИЗА";
      break;
    case "screen":
      tdTitle = "ДИАГОНЯЛЬ ЭКРАНА (ДЮЙМ)";
      break;
    case "country":
      tdTitle = "СТРАНА-ПРОИЗВОДИТЕЛЬ";
      break;
    case "country":
      tdTitle = "СТРАНА-ПРОИЗВОДИТЕЛЬ";
      break;
    case "memory":
      tdTitle = "ОБЪЁМ ПАМЯТИ";
      break;
    case "frequency":
      tdTitle = "ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА";
      break;
    case "nfc":
      tdTitle = "NFC";
      break;
    case "esim":
      tdTitle = "ПОДДЕРЖКА ESIM";
      break;
    case "wirelessCharger":
      tdTitle = "ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ";
      break;
    case "price":
      tdTitle = "СТОИМОСТЬ";
      break;
  }

  return td[0] !== null ? (
    <tr className={["specs-table__row", "container"].join(" ")} key={tdTitle}>
      <td className={"specs-table__td"}>{tdTitle}</td>
      {td}
    </tr>
  ) : null;
}
