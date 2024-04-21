// ** React Imports
import { useState, createContext } from 'react'

// ** Intl Provider Import
import { IntlProvider } from 'react-intl'
import { useTranslation } from "react-i18next"

// ** User Language Data
import userMessagesTh from '@src/locales/th.json'
import userMessagesEn from '@src/locales/en.json'

// ** Menu msg obj
const menuMessages = {
  th: { ...userMessagesTh },
  en: { ...userMessagesEn }
}

// ** Create Context
const Context = createContext()

const IntlProviderWrapper = ({ children }) => {
  const { t, i18n, ready } = useTranslation()
  // ** States
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState(menuMessages['en'])

  // ** Switches Language
  const switchLanguage = lang => {
    setLocale(lang)
    setMessages(menuMessages[lang])
  }

  const changeLanguage = lang => {
    setLocale(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <Context.Provider value={{ locale, switchLanguage, changeLanguage }}>
      <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale='en'>
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlProviderWrapper, Context as IntlContext }
