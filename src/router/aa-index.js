import { oneRouter } from "./one";
import { secondRouter } from "./two";
import { homeRouter } from "./home";

export const routes = [...oneRouter, ...secondRouter, ...homeRouter];
