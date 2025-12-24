import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/Layout/MainLayouts";
import About from "../Pages/About/About.jsx";
import Error from "../Pages/Error/ErrorPage404.jsx";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);

export default router;
