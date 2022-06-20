import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./store/rootReducer";
import { GetPhones } from "./store/getPhones/actions";

import { App } from "./components/App";

window.addEventListener("load", () => {
  const wrapper = document.querySelector("#react-root");
  const store = configureStore({
    reducer: rootReducer,
  });

  if (!wrapper) return null;

  store.dispatch(GetPhones());

  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
});
