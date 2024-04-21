import { useState } from "react"
import Repeater from "@src/components/repeater"
import { X, Plus, PlusCircle } from "react-feather"
import { SlideDown } from "react-slidedown"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import Select from "react-select"
import { selectThemeColors } from "@utils"
import Flatpickr from "react-flatpickr"

const NewOptionForm = () => {
  
  const [count, setCount] = useState(0)
  const [selectCondition, setSelectCondition] = useState({ value: "and", label: "AND" })
  const [fieldParam, setFieldParam] = useState([])
  const [demandParam, setDemandParam] = useState({ value: "is", label: "Is" })
  const [searchParam, setSearchParam] = useState([])
  const [picker, setPicker] = useState(new Date())

  const increaseCount = () => {
    setCount(count + 1)
  }

  const selectConditionCategories = [
    { value: "and", label: "AND" },
    { value: "or", label: "OR" }
  ]

  const fieldCategories = [
    { value: "first_name", label: "First Name" },
    { value: "product", label: "Product" },
    { value: "po_date", label: "PO Date" }
  ]

  const demandCategories = [
    { value: "is", label: "Is" },
    { value: "is not", label: "Is not" },
    { value: "between", label: "Between" }
  ]

  const searchCategories = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" }
  ]

  const deleteForm = (e) => {
    e.preventDefault()
    const slideDownWrapper = e.target.closest(".react-slidedown"),
      form = e.target.closest("form")
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
  }

  return (
    <Card className="mb-0">
      <CardBody>
        <Repeater count={count}>
          {(i) => {
            const Tag = i === 0 ? "div" : SlideDown
            return (
              <Tag key={i}>
                <Form>
                  <Row className="justify-content-between align-items-center">
                    {i === 0 ? (
                      <Col md={2} style={{ padding: "5px" }}>
                        <FormGroup>
                          <Label for={`animation-item-name-${i}`} className="filter-content-header">
                            Result in
                          </Label>
                        </FormGroup>
                      </Col>
                    ) : (
                      <Col md={2} style={{ padding: "5px" }}>
                        <FormGroup>
                          <Label for={`animation-item-name-${i}`}></Label>
                          <Select
                            for={`animation-item-name-${i}`}
                            theme={selectThemeColors}
                            value={selectCondition}
                            name="selectCondition"
                            options={selectConditionCategories}
                            className="react-select"
                            classNamePrefix="select"
                            //placeholder="Select"
                            onChange={(data) => setSelectCondition(data)}
                          />
                        </FormGroup>
                      </Col>
                    )}
                    <Col md={3} style={{ padding: "5px" }}>
                      <FormGroup>
                        <Label for={`animation-cost-${i}`}>Field</Label>
                        <Select
                          id={`animation-cost-${i}`}
                          theme={selectThemeColors}
                          value={fieldParam}
                          name="fieldParam"
                          options={fieldCategories}
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Select"
                          onChange={(data) => setFieldParam(data)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2} style={{ padding: "5px" }}>
                      <FormGroup>
                        <Label for={`animation-quantity-${i}`}>{""}</Label>
                        <Select
                          id={`animation-quantity-${i}`}
                          theme={selectThemeColors}
                          value={demandParam}
                          name="demandParam"
                          options={demandCategories}
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Select"
                          onChange={(data) => setDemandParam(data)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4} style={{ padding: "5px" }}>
                      <FormGroup>
                        <Label for={`animation-price-${i}`}>Search</Label>
                        {fieldParam.value === "po_date" ? (
                          <Flatpickr
                            value={picker}
                            id="range-picker"
                            className="form-control"
                            onChange={(date) => setPicker(date)}
                            options={{
                              mode: "range",
                              defaultDate: ["2020-02-01", "2020-02-15"]
                            }}
                          />
                        ) : (
                          <Select
                            id={`animation-price-${i}`}
                            theme={selectThemeColors}
                            value={searchParam}
                            name="searchParam"
                            options={searchCategories}
                            className="react-select"
                            classNamePrefix="select"
                            placeholder="Search"
                            onChange={(data) => setSearchParam(data)}
                          />
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={1} style={{ padding: "5px" }}>
                      <span className="text-nowrap px-1" onClick={deleteForm} outline>
                        <X size={14} className="mr-50" />
                      </span>
                    </Col>
                    {/* <Col sm={12}>
                      <hr />
                    </Col> */}
                  </Row>
                </Form>
              </Tag>
            )
          }}
        </Repeater>
        <div className="filter-content-add-new-option" onClick={increaseCount}>
          <PlusCircle className="mr-1" size={20} id="1" mode="FILTER" style={{ color: "#1b55a6" }} />
          <span>Add new option</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default NewOptionForm
