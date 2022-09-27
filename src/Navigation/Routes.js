import RouteNames from "./RouteNames";
import {
  Login,
  ForgotPassword,
  Dashboard,
  Employees,
  EmployeeDetail,
  BroadCastNotification,
  Page404,
} from "../Screens";
import { AuthLayout, DashboardLayout } from "../Layouts";
import { Navigate } from "react-router-dom";

const Routes = [
  { screen: <Navigate to={RouteNames.LOGIN} /> },
  { route: RouteNames.LOGIN, screen: <Login />, layout: AuthLayout },
  {
    route: RouteNames.FORGOT_PASSWORD,
    screen: <ForgotPassword />,
    layout: AuthLayout,
  },
  {
    route: RouteNames.DASHBOARD,
    screen: <Dashboard />,
    layout: <DashboardLayout />,
  },
  {
    route: RouteNames.EMPLOYEES,
    screen: <Employees />,
    layout: <DashboardLayout />,
  },
  {
    route: RouteNames.EMPLOYEE_DETAIL,
    screen: <EmployeeDetail />,
    layout: <DashboardLayout />,
  },
  {
    route: RouteNames.BROADCAST_NOTIFICATION,
    screen: <BroadCastNotification />,
    layout: <DashboardLayout />,
  },

  { route: "*", screen: <Page404 /> },
];

export default Routes;
