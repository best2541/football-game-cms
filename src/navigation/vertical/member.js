import { User, Circle } from "react-feather"

export default [
  { header: 'Member' },
  {
    id: "member",
    groupMenuId: 1,
    header: "",
    showHeader: true,
    title: "Member",
    icon: <User size={20} />,
    children: [
      {
        id: 'memberList',
        title: 'Member List',
        icon: '',
        navLink: '/member/list'
      },
      {
        id: 'memberGroup',
        title: 'Group',
        icon: '',
        navLink: '/member/group'
      }
    ]
  }
]