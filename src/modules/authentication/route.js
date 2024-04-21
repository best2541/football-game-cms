import { lazy } from "react"

const AuthenticationRoutes = [
  {
    path: "/updatepassword",
    component: lazy(() => import("@modules/authentication/views/UpdatePassword.js")),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: "/login",
    component: lazy(() => import("@modules/authentication/views/Login.js")),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../modules/authentication/views/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  // {
  //   path: '/error-page',
  //   component: lazy(() => import('../../modules/authentication/views/ErrorPage')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     authRoute: true
  //   }
  // },
  {
    path: '/misc/error-page',
    component: lazy(() => import('../../modules/authentication/views/ErrorPage')),
    layout: 'BlankLayout',
    meta: {
      // publicRoute: true
      authRoute: true
    }
  }
]

export default AuthenticationRoutes