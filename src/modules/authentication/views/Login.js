import { useState, useContext, Fragment, useEffect } from 'react'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/utility/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordLogin from '@src/components/input-password-toggle/InputPasswordLogin'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import background from "@src/assets/images/img/background-image-britz.png"
import icon from "@src/assets/images/img/icon-britz.png"
import { updateUserName } from '../store/login/actions'
import { Row, Col, CardTitle, CardText, Form, Input, FormGroup, Label, CustomInput, Button } from 'reactstrap'
import '@src/assets/scss/base/pages/page-auth.scss'

const Login = (props) => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('admin@demo.com')
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin')
  const [error, setError] = useState(false)

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (isObjEmpty(errors)) { //check error validate
      console.log("data", data)
      // localStorage.setItem('menuStatus', true)
      useJwt
        .login({ email, password, username })
        .then(res => {
          console.log(res.data)
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          // Update Username
          dispatch(updateUserName(res.data.userData.username))
          history.push(getHomeRouteForLoggedInUser(data.role))
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
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <img src={icon} style={{width:"40%", height:"40%", position:"relative", right: "85px"}} alt='logo' />
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={background} style={{width:"75%", height:"75%"}} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1 text-center'>
              Welcome to Britz
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
                  className={classnames({ 'is-invalid': errors['login-email'] || error === true})}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  onClick={() => changeError()}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
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
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button type='submit' color='primary' block>
                Login
              </Button>
            </Form>
            {error === true && (
              <div style={{color: "red"}}><hr/>*Invalid username or password</div>
            )}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
