import { useEffect, useState, useRef } from "react"
import { Card, CardBody, CardText } from "reactstrap"
import TableSender from "./table-sender"
import FilterGroupSender from "./filter-group-sender"
import "./css/card-container-sender.css"

const CardSender = (props) => {
  return (
    <Card className="card-sender">
      <CardBody className="text-center table-sender">
        <FilterGroupSender />
        <TableSender props={props} />
      </CardBody>
    </Card>
  )
}

export default CardSender
