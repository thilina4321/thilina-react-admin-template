import React from "react";
import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import { routes } from "../router/aa-index";

const Dashboard = () => {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, element }, ind) => (
          <Route key={ind} path={path} element={element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default Dashboard;
