import { getUserData } from "../Utils"

const permissionInfo = [
  { 
    id: 1,
    role: 1,
    urlPage: "/dashboards/analytics",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 2,
    role: 2,
    urlPage: "/dashboards/analytics",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 3,
    role: 1,
    urlPage: "/dashboards/analytics",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 4,
    role: 1,
    urlPage: "/communication/communication",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 5,
    role: 2,
    urlPage: "/communication/communication",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 6,
    role: 3,
    urlPage: "/communication/communication",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
    { 
    id: 7,
    role: 1,
    urlPage: "/communication/detail",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 8,
    role: 2,
    urlPage: "/communication/detail",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 9,
    role: 3,
    urlPage: "/communication/detail",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 10,
    role: 1,
    urlPage: "/communication/template",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 11,
    role: 2,
    urlPage: "/communication/template",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 12,
    role: 3,
    urlPage: "/communication/template",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 13,
    role: 1,
    urlPage: "/logs",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 14,
    role: 2,
    urlPage: "/logs",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 15,
    role: 3,
    urlPage: "/logs",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 16,
    role: 1,
    urlPage: "/otp",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: true,
    isViewer: true,
    isOther: true
  },
  { 
    id: 17,
    role: 2,
    urlPage: "/otp",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: true,
    isViewer: true,
    isOther: true
  },
  { 
    id: 18,
    role: 3,
    urlPage: "/otp",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 19,
    role: 1,
    urlPage: "/contactus/contactus",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: true
  },
  { 
    id: 20,
    role: 2,
    urlPage: "/contactus/contactus",
    tab: 0,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: true
  },
  { 
    id: 21,
    role: 3,
    urlPage: "/contactus/contactus",
    tab: 0,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 22,
    role: 1,
    urlPage: "/report",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 23,
    role: 2,
    urlPage: "/report",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 24,
    role: 3,
    urlPage: "/report",
    tab: 0,
    isCreate: true,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 25,
    role: 1,
    urlPage: "/accountsetting",
    tab: 1,
    isCreate: true,
    isUpdate: true,
    isDelete: true,
    isViewer: true,
    isOther: false
  },
  { 
    id: 26,
    role: 2,
    urlPage: "/accountsetting",
    tab: 1,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 27,
    role: 3,
    urlPage: "/accountsetting",
    tab: 1,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 28,
    role: 1,
    urlPage: "/accountsetting",
    tab: 2,
    isCreate: true,
    isUpdate: true,
    isDelete: false,
    isViewer: true,
    isOther: true
  },
  { 
    id: 29,
    role: 2,
    urlPage: "/accountsetting",
    tab: 2,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 30,
    role: 3,
    urlPage: "/accountsetting",
    tab: 2,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 31,
    role: 1,
    urlPage: "/accountsetting",
    tab: 3,
    isCreate: true,
    isUpdate: true,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 32,
    role: 2,
    urlPage: "/accountsetting",
    tab: 3,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 33,
    role: 3,
    urlPage: "/accountsetting",
    tab: 3,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 34,
    role: 1,
    urlPage: "/accountsetting",
    tab: 4,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 35,
    role: 2,
    urlPage: "/accountsetting",
    tab: 4,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  },
  { 
    id: 36,
    role: 3,
    urlPage: "/accountsetting",
    tab: 4,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isViewer: true,
    isOther: false
  }
]

const userAuthClass = (url, action, tab) => {
  const getRoleId = getUserData()?.roleId
  const userItem = permissionInfo.find(m => m.role === getRoleId && m.urlPage === url.trim() && m.tab === tab)
  return userItem ? (userItem[action] ? '' : 'permission-disable') : ''
}

export { userAuthClass }
