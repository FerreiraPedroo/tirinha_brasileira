import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ path: "/", Component: Home }],
  },
]);
