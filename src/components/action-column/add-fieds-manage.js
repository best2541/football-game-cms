import React, { useState, useContext, useEffect } from "react"
import { Input, Form, FormGroup, Label, Row, Col, Button } from "reactstrap"
import { selectThemeColors } from "@utils"
import "./css/index.css"
import Select, { components } from "react-select"

const ManageAddFields = (props) => {
  const { fields } = props.props
  const [newFields, setNewFields] = useState([])
  const [addItem, setAddItem] = useState({ name: "", selector: "", type: "" })
  useEffect(() => {
    if (_.size(fields) > 0) {
      const arrNew = fields.map((item) => {
        return {
          label: item.name,
          value: item.key
        }
      })
      setNewFields(arrNew)
    }
  }, [fields])

  const onChangeFieldType = () => {}

  const onChangeFieldName = (evt) => {
    const value = evt.target.value
    setAddItem({
      ...addItem,
      name: value
    })
  }

  return (
    <div style={{ width: "450px" }}>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <div className="m-1">Add Fields</div>
              <hr className="d-none d-md-block container-m-mx mt-0 mb-0" />
            </FormGroup>
          </Col>
        </Row>
        <div className="m-1">
          <Row>
            <Col md="7" lg="7">
              <FormGroup>
                <Label>
                  Field Name <span className="required-field-style">*</span>
                </Label>
                <Input
                  //value={appOTPName}
                  name="fieldName"
                  type="text"
                  maxLength="100"
                  placeholder="Enter name"
                  onChange={(e) => onChangeFieldName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="5" lg="5">
              <FormGroup>
                <Label>Field Type</Label>
                <Select
                  theme={selectThemeColors}
                  //value={senderParam}
                  name="fieldType"
                  options={newFields}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="Select"
                  onChange={onChangeFieldType}
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="mr-1"
        >
          <Button outline color="primary" type="cancel" className="mr-1">
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Add Column
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ManageAddFields
