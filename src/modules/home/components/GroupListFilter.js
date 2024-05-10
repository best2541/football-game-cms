import { Fragment, useState } from "react"
import { FormGroup, Label, Input, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Button } from "reactstrap"
import { Search, X } from "react-feather"
import { DatePicker } from "antd"
const { RangePicker } = DatePicker
// import "../group.scoped.scss"

const GroupListFilter = ({ search, setSearch, exportBtn, setDateSearch }) => {
  return (
    <Fragment>
      <Row className="">
        <Col md='7' className="group-list-filter-card">
          <Search className='icon-search-point' color="#5E5873" size={24} />
          <Input
            value={search}
            className="group-list-filter-input pl-0 pr-0"
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md='5'>
          <div className="d-flex justify-content-between align-middle m-0 p-0">
            <div className="mx-1" style={{ width: '100%', marginTop: 'auto', marginBottom: 'auto' }}>
              {setDateSearch &&
                <RangePicker onChange={(event) => setDateSearch(event || [])} style={{ width: '100%' }} />
              }
            </div>
            {exportBtn && exportBtn()}
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default GroupListFilter