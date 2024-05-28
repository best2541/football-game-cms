import { useState, useContext, Fragment, useEffect } from 'react'
import classnames from 'classnames'
import { useSkin } from '../../../utility/hooks/useSkin'
import useJwt from '../../../utility/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { handleLogin } from '../../../redux/actions/auth'
import { AbilityContext } from '../../../utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordLogin from '../../../components/input-password-toggle/InputPasswordLogin'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '../../../utility/Utils'
import background from "../../../assets/images/logo/Image.png"
import icon from "../../../assets/images/img/icon-britz.png"
import { updateUserName } from '../store/login/actions'
import { Row, Col, CardTitle, CardText, Form, Input, FormGroup, Label, CustomInput, Button } from 'reactstrap'
import '../../../assets/scss/base/pages/page-auth.scss'

const Login = () => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`../../../assets/images/pages/${illustration}`).default
  const onSubmit = data => {
    if (isObjEmpty(errors)) { //check error validate
      // localStorage.setItem('menuStatus', true)
      useJwt
        .login({ password, username })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          // Update Username
          dispatch(updateUserName(res.data.userData.username))
          window.location.href = '/'
          // history.push(getHomeRouteForLoggedInUser(data.role))
        })
        .catch(err => {
          if (err) {
            console.log("err:", err)
            callBackError(err)
          }
        })
    }
  }

  const callBackError = async (err) => {
    if (err) {
      await setError(true)
    }
  }

  const changeError = () => {
    setError(false)
  }

  return (
    <div className='auth-wrapper auth-v2 font-montserrat'>
      <div className='credit' style={{ zIndex: '999' }}>
        <span className='text-logo'>Powered by </span>
        <img src="data:image/png;base64,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" alt="logo" style={{ width: '70px' }}></img>
      </div>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <img src={icon} style={{ width: "70px", height: "auto", position: "fixed", left: "3%" }} alt='logo' />
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12' style={{ backgroundColor: 'white' }}>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={background} style={{ width: "100%", height: "100%" }} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1 text-center'>
              Welcome to Central
            </CardTitle>
            <CardText className='mb-2 text-center'>
              Please login to your account and start the adventure
            </CardText>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Username
                </Label>
                <Input
                  autoFocus
                  value={username}
                  id='login-email'
                  name='login-email'
                  placeholder='Username'
                  onChange={e => setUsername(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-email'] || error === true })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  onClick={() => changeError()}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                </div>
                <InputPasswordLogin
                  value={password}
                  id='login-password'
                  name='login-password'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-password'] || error === true })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  onClick={() => changeError()}
                />
              </FormGroup>
              {/* <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup> */}
              <Button type='submit' color='primary' block>
                Login
              </Button>
            </Form>
            {error === true && (
              <div style={{ color: "red" }}><hr />*Invalid username or password</div>
            )}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login