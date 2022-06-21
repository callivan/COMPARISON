import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { InitialStateType } from "../../store/rootTypes";
import { PhoneDataType } from "../../server/types";

import { loaderHide } from "./Loader/animations/loaderHide";

import { AppComponent } from "./AppComponent";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";

export function App() {
  const [isLoading, setLoading] = useState(true);
  const phonesAll = useSelector<InitialStateType, Array<PhoneDataType>>(
    (state) => state.phones
  );

  async function hideLoader() {
    await loaderHide();
    setLoading(false);
  }

  useEffect(() => {
    if (phonesAll.length) {
      setTimeout(hideLoader, 100);
    }
  }, [phonesAll]);

  return <AppComponent loading={isLoading} />;
}
