import React from "react";

import { Header } from "./Header";
import { Comparison } from "./Comparison";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Comparison />
      </main>
    </>
  );
}
