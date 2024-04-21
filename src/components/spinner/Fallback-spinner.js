import { Fragment } from 'react'
import { useSelector } from 'react-redux'

// ** Logo
import themeConfig from '../../configs/themeConfig'


const SpinnerComponent = (props) => {

  const { loadingSpinner } = useSelector((state) => state.main)

  return (
    <Fragment>
      {loadingSpinner ? (
        <div className='fallback-spinner vh-100'>
          <img className='fallback-logo' src={themeConfig.app.appLogoImage} alt='logo' />
          <div className='loading'>
            <div className='effect-1 effects'></div>
            <div className='effect-2 effects'></div>
            <div className='effect-3 effects'></div>
          </div>
        </div>
        ) : (props.children)}
    </Fragment>
  )
}

export default SpinnerComponent
