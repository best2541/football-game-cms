import { Fragment, useState, useEffect } from "react"
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'
import Avatar from '@components/avatar'
import { Badge, Button } from "reactstrap"
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'

const UserManagement = () => {
  const [userData, setUserData] = useState(null)

  const dispatch = useDispatch()

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar)

  return (
    <Fragment>
      <div className="navigation-header">
        <div className="user-nav d-sm-flex d-flex">
          <div>
            <div>
              <li className= "menu-item text-truncate username-vertical" >{(userData && userData['username']) || 'John Doe'}</li>
            </div>
            <div>
              <li className="menu-item text-truncate credit-balance-vertical" >Credit Balance : <Badge className="credit-balance-badge ml-25" color="danger" pill >500k</Badge></li>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserManagement