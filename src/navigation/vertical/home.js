import { Home, BarChart, Folder } from "react-feather"

export default [
  // {
  //   header: 'Main'
  // },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <BarChart size={20} />,
    navLink: "/dashboard"
  },
  {
    id: "report",
    title: "Report",
    icon: <Folder size={20} />,
    navLink: "/report"
  }
]