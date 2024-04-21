import React, { Fragment } from "react"
import PropTypes from 'prop-types'
import { Row, Col } from "reactstrap"
import BreadCrumbs from '@src/components/breadcrumbs'

const NavbarTitle = (props) => {
  const { breadCrumbTitle, breadCrumbActive, breadCrumbParent, className} = props

  return (
    <Fragment>
      <Row className="navbar-title">
        <Col><BreadCrumbs breadCrumbTitle={breadCrumbTitle} breadCrumbActive={breadCrumbActive} breadCrumbParent={breadCrumbParent} /></Col>
        <Col className={`text-right ${className}`}>
          {props.children}
        </Col>
      </Row>
    </Fragment>
  )
}

export default NavbarTitle

// ** Default Props
NavbarTitle.defaultProps = {
  breadCrumbParent: "",
  className: "col-md-2 col-12"
}

// ** PropTypes
NavbarTitle.propTypes = {
  breadCrumbTitle: PropTypes.string.isRequired,
  breadCrumbActive: PropTypes.string.isRequired
}
