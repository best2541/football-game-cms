import React, { useState, useContext } from "react"
import { Row, Col, FormGroup, Input, Label, Button } from "reactstrap"
import Flatpickr from "react-flatpickr"
import "./css/filter-group-sender.css"
import "@src/assets/scss/react/libs/flatpickr/flatpickr.scss"
import SenderContext from "@modules/context/contextSender"

const FilterGroupSender = () => {
  const { state, setState } = useContext(SenderContext)
  const {
    setSenderNameSearch,
    setTrigger
  } = setState


  const changeSenderName = (event) => {
    const value = event.target.value
    setSenderNameSearch(value)
  }

  const handleSearch = () => {
    setTrigger((current) => !current)
  }

  return (
    <div className="div-search-data">
      <Row style={{ margin: "10px 28px 5px 0px" }}>
        
        <Col md="11" xl="11" sm="11" style={{ width: "100%" }}>
          <Input
            type="text"
            id="floatingInput"
            placeholder="Sender name"
            onChange={changeSenderName}
          />
        </Col>
        <Col md="1" xl="1" sm="1" style={{ width: "100%" }}>
          <Button.Ripple color="primary" outline onClick={() => handleSearch()}>
            Search
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

export default FilterGroupSender
