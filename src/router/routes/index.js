// ** Routes Imports
import AuthenticationRoutes from '../../modules/authentication/route'
import HomeRoutes from '@modules/home/route'

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template"

// ** Default Route
const DefaultRoute = "/dashboard"

// ** Merge Routes
const Routes = [
  ...AuthenticationRoutes,
  ...HomeRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
