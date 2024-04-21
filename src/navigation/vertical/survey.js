import { Search } from "react-feather"

export default [
  {
    header: 'Survey'
  },
  {
    id: "survey",
    groupMenuId: 1,
    header: "",
    showHeader: true,
    title: "Survey",
    icon: <Search size={20} />,
    navLink: "/survey/list"
  }
]