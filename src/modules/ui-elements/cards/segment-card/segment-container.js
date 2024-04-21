import { useEffect, useState, useRef } from "react"
import { Card, CardBody, CardText } from "reactstrap"
import TableSegment from "./table-segment"
import FilterGroup from "./filter-group"
import "./css/segment-container.css"

const CardSegment = (props) => {
  return (
    <Card className="card-segment">
      <CardBody className="text-center table-segment">
        <FilterGroup props={props} />
        <TableSegment props={props} />
      </CardBody>
    </Card>
  )
}

export default CardSegment
