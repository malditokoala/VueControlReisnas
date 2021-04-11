import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Resinas from "@/pages/Resinas.vue";
import FinishGood from "@/pages/FinishGood.vue";
import User from "@/pages/User.vue";
import Validacion from "@/pages/Validacion.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },

      {
        path: "resinas",
        name: "Resinas",
        component: Resinas,
      },
      {
        path: "finishgood",
        name: "FinishGood",
        component: FinishGood,
      },
      {
        path: "users",
        name: "Users",
        component: User,
      },
      {
        path: "validacion",
        name: "Validacion",
        component: Validacion,
      },
    ],
  },
];

export default routes;
