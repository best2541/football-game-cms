import { lazy } from 'react'

const Setting = [
  // Dashboards
  {
    path: '/setting',
    component: lazy(() => import('../../modules/setting/view/Home'))
  }
]

export default Setting
