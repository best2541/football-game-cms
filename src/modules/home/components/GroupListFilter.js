import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FormGroup, Label, Input, Row, Col, InputGroup, InputGroupText, InputGroupAddon } from "reactstrap"
import { Search, X } from "react-feather"
// import "../group.scoped.scss"

const GroupListFilter = () => {
  const dispatch = useDispatch()

  const changeInput = (value) => {
    dispatch(updateMemberGroupListFilter(value))
  }

  return (
    <Fragment>
      <Row className="group-list-filter">
        <Col md='12' className="group-list-filter-card">
          <Search className='icon-search-point' color="#5E5873" size={24} />
          <Input
            value={''}
            className="group-list-filter-input pl-0 pr-0"
            placeholder='Search'
            onChange={(e) => changeInput(e.target.value)}
          />
            {/* {name ? (
              <InputGroupAddon addonType='append' className="cursor-pointer" onClick={handleClear}>
                <InputGroupText>
                  <X className='text-muted' size={14} />
                </InputGroupText>
              </InputGroupAddon>
            ) : null} */}
        </Col>
      </Row>
    </Fragment>
  )
}

export default GroupListFilter