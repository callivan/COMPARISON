import React, { Suspense } from "react";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";

const Header = React.lazy(() => import("./Header"));
const Comparison = React.lazy(() => import("./Comparison"));
const Loader = React.lazy(() => import("./Loader"));

interface IAppComponentProps {
  loading: boolean;
}

export function AppComponent({ loading }: IAppComponentProps) {
  return (
    <>
      <Suspense>
        {loading && <Loader />}
        {!loading && (
          <>
            <Header />
            <main>
              <Comparison />
            </main>
          </>
        )}
      </Suspense>
    </>
  );
}
