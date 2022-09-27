import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllRoutes from "./Navigation/Routes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {AllRoutes.map(
            ({ route = "", layout: Layout, screen = <div />, layoutProps }) => {
              if (Layout) {
                return (
                  <Route
                    key={Math.random()}
                    path={route}
                    element={<Layout {...layoutProps}>{screen}</Layout>}
                  />
                );
              }
              return (
                <Route key={Math.random()} path={route} element={screen} />
              );
            }
          )}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
