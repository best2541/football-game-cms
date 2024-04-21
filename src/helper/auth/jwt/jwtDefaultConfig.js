// ** Auth Endpoints
export default {
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',
  commuEndPoint: 'http://119.63.68.140:8284/api',
  otpEndPoint: 'https://dev.ants.co.th/apiotp',
  analyzeEndPoint: 'https://analyze.ants.co.th/AnalystData/Analyst',
  // surveyEndPoint: 'https://apisurvey.ants.co.th',
  // memberEndPoint: 'http://192.168.10.32:8406',
  // memberEndPoint: 'https://localhost:7267',
  // gameEndPoint: 'http://192.168.10.32:8405/api',
  surveyEndPoint: 'https://dev-britz-serveyapi.ants.co.th',
  memberEndPoint: 'https://dev-britz-memberapi.ants.co.th',
  gameEndPoint: 'https://dev-britz-gameapi.ants.co.th/api',
  // gameEndPoint: 'https://localhost:7266/api',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
