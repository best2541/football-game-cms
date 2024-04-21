// Add English specific rules and special characters validate for character and space.
export const validatorName = () => {
  const regExp = /^[a-zA-Zก-๏\s]+$/
  return regExp
}

// Add English specific rules and special characters validate for character and space.
export const validatorNumberOnly = () => {
  const regExp = /^[0-9]*$/
  return regExp
}

export const validatorDecimalNumber = () => {
  const regExp = /^[0-9]+.?\d*$/
  return regExp
}