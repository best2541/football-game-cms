import { Home, Activity, ShoppingCart, MessageSquare } from "react-feather"

export default [
  {
    header: 'SMS'
  },
  {
    id: "communication",
    title: "Communication",
    icon: <MessageSquare size={20} />,
    children: [
      {
        id: "communication",
        title: "Communication",
        icon: <span style={{ marginLeft: '30px'}}></span>,
        navLink: "/communication/communication"
      },
      {
        id: "template",
        title: "Template",
        icon: <span style={{ marginLeft: '30px'}}></span>,
        navLink: "/communication/template"
      }
    ]
  }
]
