import { User, Circle } from "react-feather"

export default [
  {
    header: 'People'
  },
  {
    id: "people",
    groupMenuId: 1,
    header: "",
    showHeader: true,
    title: "People",
    icon: <User size={20} />,
    children: [
      {
        id: 'peopleDashboard',
        title: 'Dashboard',
        icon: "",
        navLink: '/people/dashboard'
      },
      {
        id: 'peopleStructure',
        title: 'People Structure',
        icon: "",
        navLink: '/people/createform'
      },
      {
        id: 'people',
        title: 'People List',
        icon: "",
        navLink: '/people/list'
      },
      {
        id: 'peopleTag',
        title: 'Tag',
        icon: "",
        navLink: '/people/tag/list'
      },
      {
        id: 'blacklist',
        title: 'Blacklist',
        icon: "",
        navLink: '/people/blacklist/list'
      }
    ]
  }
]