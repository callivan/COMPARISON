import React from "react";

import { Header } from "./Header";
import { Comparison } from "./Comparison";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";
import styles from "./app.scss";

export function App() {
  return (
    <>
      <Header />
      <Comparison />
    </>
  );
}
