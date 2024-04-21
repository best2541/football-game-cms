import { useEffect, useState, useRef } from "react"
import { Card, CardBody, CardText } from "reactstrap"
import FilterGroup from "./filter-group"
import "./css/card-container.css"
import TableContactUs from "./table-contact"

const CardContactUs = (props) => {
  return (
    <Card className="card-contact">
      <CardBody className="text-center table-contact">
        {/* <FilterGroup /> */}
        <TableContactUs props={props} />
      </CardBody>
    </Card>
  )
}

export default CardContactUs
