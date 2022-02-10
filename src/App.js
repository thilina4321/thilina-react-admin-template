import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import First from "./pages/one/First";
import { routes } from "./router/aa-index";
import { mainRouter } from "./router/main-pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            {mainRouter.map(({ path, element }, ind) => (
              <Route key={ind} path={path} element={element} />
            ))}
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
