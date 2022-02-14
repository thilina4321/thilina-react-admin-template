import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { routes } from "./router/aa-index";
import { mainRouter } from "./router/main-pages";

const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        {mainRouter.map(({ path, element }, ind) => (
          <Route key={ind} path={path} element={element} />
        ))}

        {routes.map(({ path, element }, ind) => (
          <Route key={ind} path={path} element={element} />
        ))}
        <Route path="/" element={ <Navigate to={'/login'} replace /> } />
        <Route path="*" element={<Navigate  to={'/404'} />}  />
      </Routes>
    </Layout>
  );
};

export default MainRoutes;
