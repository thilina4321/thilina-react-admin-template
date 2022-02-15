import { oneRouter } from "./one";
import { secondRouter } from "./two";
import { homeRouter } from "./home";
import { bloodRouter } from "./blood";

import Login from "../pages/Login";
const user = JSON.parse(localStorage.getItem("user"));

let routes = [];

if (!user) {
  console.log("my user", user);
  routes = [{ path: "/login", element: <Login /> }];
} else {
  routes = [...oneRouter, ...secondRouter, ...homeRouter, ...bloodRouter];
}
export { routes };
