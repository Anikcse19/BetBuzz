import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import InPlay from "../pages/InPlay";
import Cricket from "../pages/Cricket";
import Soccer from "../pages/Soccer";
import MultiMarket from "../pages/MultiMarket";
import Tennis from "../pages/Tennis";
import SingleMatchPage from "../pages/SingleMatchPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/in-play",
    element: <InPlay />,
  },
  {
    path: "/multi-market",
    element: <MultiMarket />,
  },
  {
    path: "/cricket",
    element: <Cricket />,
  },
  {
    path: "/soccer",
    element: <Soccer />,
  },
  {
    path: "/tennis",
    element: <Tennis />,
  },
  {
    path: "singleMatch",
    element: <SingleMatchPage />,
  },
]);

export default routes;
