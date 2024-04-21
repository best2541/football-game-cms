// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import Proptypes from 'prop-types'
import { Grid, CheckSquare, MessageSquare, Mail, Calendar, BarChart } from 'react-feather'
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const BreadCrumbs = props => {
  // ** Props
  const { breadCrumbTitle, breadCrumbParent, breadCrumbParent2, breadCrumbParent3, breadCrumbActive, dropdownToggle } = props

  return (
    <div className='content-header row'>
      <div className='content-header-left col-md-9 col-12 mb-2'>
        <div className='row breadcrumbs-top'>
          <div className='col-12'>
            {breadCrumbTitle ? <h2 className='content-header-title float-left mb-0'>{breadCrumbTitle}</h2> : ''}
            <div className='breadcrumb-wrapper vs-breadcrumbs d-sm-block col-12'>
              <Breadcrumb>
                <BreadcrumbItem tag='li'>
                  <Link to='/'><BarChart className={`${!breadCrumbActive ? 'no-active text-primary' : 'text-primary mb-50'}`} size={16} /></Link>
                </BreadcrumbItem>
                {breadCrumbParent ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    {breadCrumbParent}
                  </BreadcrumbItem>
                ) : ('')}
                {breadCrumbParent2 ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    {breadCrumbParent2}
                  </BreadcrumbItem>
                ) : ('')}
                {breadCrumbParent3 ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    {breadCrumbParent3}
                  </BreadcrumbItem>
                ) : ('')}
                {breadCrumbActive && (
                  <BreadcrumbItem tag='li' active>
                    {breadCrumbActive}
                  </BreadcrumbItem>
                )}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      {dropdownToggle ? (
        <div className='content-header-right text-md-right col-md-3 col-12 d-md-block d-none'>
          <div className='form-group breadcrum-right dropdown'>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='primary' size='sm' className='btn-icon btn-round dropdown-toggle'>
                <Grid size={14} />
              </DropdownToggle>
              <DropdownMenu tag='ul' right>
                <DropdownItem tag={Link} to='/apps/chat'>
                  <CheckSquare className='mr-1' size={14} />
                  <span className='align-middle'>Todo</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/apps/chat'>
                  <MessageSquare className='mr-1' size={14} />
                  <span className='align-middle'>Chat</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/apps/email'>
                  <Mail className='mr-1' size={14} />
                  <span className='align-middle'>Email</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/apps/calendar'>
                  <Calendar className='mr-1' size={14} />
                  <span className='align-middle'>Calendar</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      ) : <></> }
    </div>
  )
}
export default BreadCrumbs

// ** Default Props
BreadCrumbs.defaultProps = {
  dropdownToggle: false
}

// ** PropTypes
BreadCrumbs.propTypes = {
  dropdownToggle: Proptypes.bool,
  breadCrumbTitle: Proptypes.string.isRequired,
  breadCrumbActive: Proptypes.string.isRequired
}
