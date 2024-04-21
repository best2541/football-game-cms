import { Home, Activity, ShoppingCart, BarChart } from "react-feather"

export default [
  {
    id: "report",
    title: "Report",
    icon: <BarChart size={20} />,
    navLink: "/report"
  }
  // {
  //   id: "report",
  //   title: "report",
  //   icon: <BarChart size={20} />,
  //   children: [
  //     {
  //       id: "reportSub",
  //       title: "Report",
  //       icon: <span style={{ marginLeft: '30px'}}></span>,
  //       navLink: "/report"
  //     }
  //   ]
  // }
]
