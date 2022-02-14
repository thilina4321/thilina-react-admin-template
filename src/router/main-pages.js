import Error404 from "../pages/404";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const mainRouter = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/404", element: <Error404 /> },
];
