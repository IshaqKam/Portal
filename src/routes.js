// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import LoginPage from "views/LoginPage/LoginPage";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/crash-classes",
    name: "Crash Prepration Course",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/sat",
    name: "Self Assessment Test",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Logout",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: LoginPage,
    layout: "/login",
  },
];

export default dashboardRoutes;
