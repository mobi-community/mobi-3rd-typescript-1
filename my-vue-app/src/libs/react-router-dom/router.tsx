import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/layout";
import { TypePage, WhatIsType } from "../../Task2/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <WhatIsType />,
      },
      {
        path: "types/:type",
        element: <TypePage />,
      },
    ],
  },
]);

export default router;
