import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/Layout/MainLayouts";
import About from "../Pages/About/About.jsx";
import Error from "../Pages/Error/ErrorPage404.jsx";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
