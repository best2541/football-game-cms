import { lazy } from "react"

const HomeRoutes = [
  {
    path: "/Dashboard",
    component: lazy(() => import("@modules/home/views/Home.js")),
    exact: true
  },
  {
    path: "/Report/:id",
    component: lazy(() => import("@modules/home/views/ReportDetail.js")),
    exact: true
  },
  {
    path: "/Report",
    component: lazy(() => import("@modules/home/views/Report.js")),
    exact: true
  }
]

export default HomeRoutes