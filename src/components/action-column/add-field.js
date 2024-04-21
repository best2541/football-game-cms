import React, { useState, useContext } from "react"
import { Input } from "reactstrap"
import { Calendar, Type, Hash, Server } from "react-feather"
import "./css/index.css"
const AddFields = (props) => {
  const { fields, setSelectType } = props.props

  const handleSelectFields = (val) => {
    console.log("handleSelectFields:::", val)
    setSelectType(val)
  }

  const renderFieldsItem = (item) => {
    return (
      <p
        key={item.key}
        className="value-fields"
        onClick={() => handleSelectFields(item)}
      >
        {item.icon} {item.name}
      </p>
    )
  }
  const mapFields = fields && fields.map((item) => renderFieldsItem(item))
  return (
    <div className="padding-add-column">
      <div className="mr-input-add-column">
        <Input type="text" placeholder="Search" name="search" id="search" />
      </div>
      <div>{mapFields}</div>
    </div>
  )
}

export default AddFields
