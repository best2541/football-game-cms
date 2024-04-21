import React from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import "./css/index.css"
import Addfilter from "./add-filter"
import NewOptionForm from "./new-option-form"
import { X } from "react-feather"

const CardFilter = (props) => {
  const { setToggleCompose } = props
  return (
    <Card className="filter-content" style={{ maxWidth: "900px" }}>
      <CardHeader className="filter-content-header">
        <span>Filters</span>
        <span className="close-btn">
          <X className="cursor-pointer" onClick={() => setToggleCompose(false)} />
        </span>
      </CardHeader>
      <hr className="d-none d-md-block container-m-mx mt-0 mb-0" />
      {/* <CardBody> */}
      <NewOptionForm />
      {/* </CardBody> */}
    </Card>
  )
}

export default CardFilter
