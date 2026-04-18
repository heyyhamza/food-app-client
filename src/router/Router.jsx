import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import DashboardLayout from "../layout/DashboardLayout";

// Public Pages
import Home from "../pages/home/Home";
import Menu from "../pages/menuPage/Menu";
import CartPage from "../pages/menuPage/CartPage";
import Payment from "../pages/menuPage/Payment";
import UserProfile from "../pages/dashboard/UserProfile";

// Auth Pages
import Login from "../components/Login";
import Signup from "../components/Signup";

// Protected Route
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Admin Pages
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";

// Optional Error Page
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // Main Public Website
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Authentication
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  // Admin Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`),
      },
    ],
  },

  // Fallback Route
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
