// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0

// ** Returns K format from a number
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

export const getDateString = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const numOfDay = date.getDate()

  return `${numOfDay}-${month}-${year}`
}

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))
//add menu(status or something) value on localStorage
export const getMenuStatus = () => localStorage.getItem('menuStatus')

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return '/access-control'
  return '/login'
}

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#d8d6de', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#043270', // for tags bg-color
    neutral20: '#d8d6de', // for input border-color
    neutral30: '#d8d6de' // for input hover border-color
  }
})

export const getRandomInt = (min, max) => {
  if (min > max) {
    const temp = max
    /* eslint-disable no-param-reassign */
    max = min
    min = temp
    /* eslint-enable */
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min
  }
  return Math.floor(Math.random() * max) + min
}

export function getFileExtension(filename) {
  const ext = /^.+\.([^.]+)$/.exec(filename)
  return ext === null ? "" : ext[1].toLowerCase()
}

export const calculateContentCreditAndCharacter = (contentValue) => {
  const contentlength = contentValue === undefined ? 0 : JSON.stringify(contentValue.trim()).length === 0 ? 0 : (JSON.stringify(contentValue.trim()).length - 2) // ลบออก 2 เพราะมี "
  let creditCount = 0
  let characterCount = 160
  if (contentlength) {
    if (!contentValue.match(/^([a-zA-Z0-9\|!#$%&/()*^=?»«@£§€{}.-;'"<>_[\]\\,\-\+ \n\r])+$/i)) {
      creditCount = (contentlength <= 70) ? 1 : (contentlength <= 134) ? 2 : (parseInt(Math.ceil(parseFloat(contentlength) / 67)))
      characterCount = (contentlength <= 70) ? (70 - contentlength) : (contentlength <= 134) ? (134 - contentlength) : ((134 + (67 * (creditCount - 2))) - contentlength)
    } else {
      creditCount = (contentlength <= 160) ? 1 : (contentlength <= 306) ? 2 : (parseInt(Math.ceil(parseFloat(contentlength) / 153)))
      characterCount = (contentlength <= 160) ? (160 - contentlength) : (contentlength <= 306) ? (306 - contentlength) : ((306 + (153 * (creditCount - 2))) - contentlength)
    }
  }
  return { contentlength, characterCount, creditCount }
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const paginationFromTo = (perPage, currentPage, totalPage) => {
  const from = (perPage * currentPage) + 1
  const to = totalPage >= (perPage * (currentPage + 1)) ? (perPage * (currentPage + 1)) : totalPage
  return ({from, to})
}

export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

// ** Spinning Wheels Math
export const getRotationDegrees = (prizeNumber, numberOfPrizes) => {
  const degreesPerPrize = 360 / numberOfPrizes
  const prizeRotation = degreesPerPrize * (numberOfPrizes - prizeNumber)
  return numberOfPrizes - prizeNumber > numberOfPrizes / 2  ? -360 + prizeRotation  : prizeRotation
}