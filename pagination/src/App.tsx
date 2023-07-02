import React, { Suspense } from "react";
import { GlobalStyle } from "./styles";
import { PaginationContainer } from "./pages";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              flex: 1,
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Image Loading...
          </div>
        }
      >
        <PaginationContainer />
      </Suspense>
    </React.Fragment>
  );
};
