import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "../../Portfolio/Portfolio";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import Roots from "../Roots/RootsLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { path: "/", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/About", element: <About /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
