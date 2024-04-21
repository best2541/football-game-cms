import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import classnames from 'classnames'
import InputPasswordToggle from '@src/components/input-password-toggle'
import { useForm } from 'react-hook-form'
import icon from "@src/assets/images/img/icon-britz.png"
import background from "@src/assets/images/img/background-image-britz.png"
import {
  Row,
  Col,
  CardTitle,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button
} from 'reactstrap'
import { saveNewPassword } from '../store/updatePassword/actions'
import '@src/assets/scss/base/pages/page-auth.scss'

const UpdatePassword = () => {
  const { register, errors, handleSubmit } = useForm()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async () => {
    if (newPassword !== confirmPassword) {
      setError(true)
    } else {
      if (newPassword && confirmPassword) {
        // Call API Save Password
        await dispatch(saveNewPassword({newPassword, confirmPassword}))
        setNewPassword('')
        setConfirmPassword('')
        // route to login
        history.push({
          pathname: "/login"
        })
      }
    }
  }

  const changeError = () => {
    setError(false)
  }

  useEffect(() => {
    
  }, [error])

  return (
    <div className='auth-wrapper auth-v2 font-montserrat'>
      <Row className='auth-inner m-0'>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={background} style={{width:"75%", height:"75%"}} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12' style={{background:"white"}}>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1 text-center'>
              <img src={icon} style={{width:"40%", height:"40%", position:"relative"}} alt='logo' />
              <br/><br/><br/>
              Update password
            </CardTitle>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  New password
                </Label>
                <InputPasswordToggle
                  value={newPassword}
                  id='new-password'
                  name='new-password'
                  placeholder=''
                  onChange={e => setNewPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['new-password'] || error === true })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  onClick={() => changeError()}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='confirm-password'>
                    Confirm password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={confirmPassword}
                  id='confirm-password'
                  name='confirm-password'
                  // className='input-group-merge'
                  onChange={e => setConfirmPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['confirm-password'] || error === true })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  onClick={() => changeError()}
                />
              </FormGroup>
              <Button type='submit' color='primary' block>
                Set new password
              </Button>
            </Form>
            {error === true ? (<span style={{color: "red"}}><hr/>*Password and Confirm Password does not match</span>) : null}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default UpdatePassword