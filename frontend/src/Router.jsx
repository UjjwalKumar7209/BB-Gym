import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Reserve from "./components/Reserve";
import About from "./components/About";
import Admin from "./components/Admin";
import AdminPage from "./components/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservation",
    element: <Reserve />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/adminPage",
    element: <AdminPage />,
  },
]);
