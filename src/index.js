// ** React Imports
import { Suspense, lazy } from "react"
import ReactDOM from "react-dom"

// ** Redux Imports
import { Provider } from "react-redux"
import { store } from "./redux/storeConfig/store"

// ** Intl, CASL & ThemeColors Context
import ability from "./configs/acl/ability"
import { ToastContainer } from "react-toastify"
import { AbilityContext } from "./utility/context/Can"
import { ThemeContext } from "./utility/context/ThemeColors"
import { IntlProviderWrapper } from "./utility/context/Internationalization"

import { ClearBrowserCacheBoundary } from "react-clear-browser-cache"
// ** Spinner (Splash Screen)
import Spinner from "@src/components/spinner/Fallback-spinner"

// ** Ripple Button
import "@src/components/ripple-button"

// ** PrismJS
import "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx.min"

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css"

// ** React Toastify
import "@src/assets/scss/react/libs/toastify/toastify.scss"

// ** Fake Database
import './@fake-db'

// ** Core styles
import "./assets/fonts/feather/iconfont.css"
import "./assets/scss/core.scss"
import "./assets/scss/style.scss"

// ** antd
import "antd/dist/antd.css"

// i18n
import "./helper/i18n"

// ** Lazy load app
const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <ClearBrowserCacheBoundary auto duration={60000}>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AbilityContext.Provider value={ability}>
          <ThemeContext>
            <IntlProviderWrapper>
              <LazyApp />
              <ToastContainer newestOnTop />
            </IntlProviderWrapper>
          </ThemeContext>
        </AbilityContext.Provider>
      </Suspense>
    </Provider>
  </ClearBrowserCacheBoundary>,
  document.getElementById("root")
)

