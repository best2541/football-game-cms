import React, { useState, useContext } from "react"
import { Row, Col, FormGroup, Input, Label, Button, InputGroup, DropdownToggle, ButtonDropdown, DropdownMenu } from "reactstrap"
import Flatpickr from "react-flatpickr"
import "./css/filter-group.css"
import "@src/assets/scss/react/libs/flatpickr/flatpickr.scss"
import SegmentContext from "../../../context/contextSegment"
import { Trash, Search, Filter } from "react-feather"
import { useHistory } from "react-router-dom"
import CardFilter from "../../../../components/filter-result/card-filter"
import Addfilter from "../../../../components/filter-result/add-filter"

const FilterGroupSegment = (props) => {
  const { handleDelete } = props.props
  const { state, setState } = useContext(SegmentContext)
  const { pickerSearch } = state
  const { setAppOtpNameSearch, setTrickerClick } = setState
  const [toggleCompose, setToggleCompose] = useState(false)
  const [toggleComposeSearch, setToggleComposeSearch] = useState(false)

  const history = useHistory()

  const changeAppOtpName = (event) => {
    const value = event.target.value
    setAppOtpNameSearch(value)
  }

  const toggleFormDropdown = () => {
    setFormDropdown((current) => !current)
  }

  const toggleFormDropdownFilter = () => {
    setToggleCompose(true)
    setToggleComposeSearch(false)
  }

  const toggleFormDropdownFilterSearch = () => {
    setToggleCompose(false)
    setToggleComposeSearch(true)
  }

  const handleSearch = () => {
    setTrickerClick((current) => !current)
  }

  function handleClick() {
    history.push({
      pathname: "/segment/segmentmanagement",
      state: {
        mode: "NEW"
      }
    })
  }

  const handleDeleteIcon = (e) => {
    handleDelete(e)
  }

  return (
    <div className="div-search-data">
      <Row style={{ margin: "10px 28px 5px 0px" }}>
        {/* <Col></Col> */}
        <Col md="6" xl="6" sm="6" className="col-left-segment">
          <ButtonDropdown isOpen={toggleComposeSearch} toggle={toggleFormDropdownFilterSearch}>
            <DropdownToggle color="white" style={{ padding: "0px" }}>
              <Search size={20} className="mr-0.5" style={{ color: "#4e5154" }} />
              {/* <Input
            type="text"
            id="floatingInput"
            placeholder="Search"
            onChange={changeAppOtpName}
            className="custom-input-people"
          /> */}
            </DropdownToggle>
            <DropdownMenu flip={false}>
              <Addfilter setToggleComposeSearch={setToggleComposeSearch} />
            </DropdownMenu>
          </ButtonDropdown>
          <span className="custom-input-segment pl-1" style={{ textAlign: "left", color: "#adb5bd" }}>
            Search
          </span>
          <div>
            <ButtonDropdown isOpen={toggleCompose} toggle={toggleFormDropdownFilter}>
              <DropdownToggle color="white" style={{ padding: "0px" }}>
                <Filter className="cursor-pointer" size={15} id="1" mode="FILTER" style={{ color: "#adb5bd" }} />
              </DropdownToggle>
              <DropdownMenu flip={false}>
                <CardFilter setToggleCompose={setToggleCompose} />
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="divider-custom-vertical-segment" />
          <div>
            <Trash className="text-primary  cursor-pointer" size={15} id="1" mode="DELETE" onClick={handleDeleteIcon} />{" "}
          </div>
        </Col>
        <Col md="6" xl="6" sm="6" className="col-right-segment">
          <div className="custom-button-outline-segment">Export</div>
          <DropdownToggle color="primary" caret onClick={() => handleClick()}>
            Create
          </DropdownToggle>
          {/* <Button color="primary" caret onClick={() => handleClick()}>
            Create
          </Button> */}
        </Col>
      </Row>
    </div>
  )
}

export default FilterGroupSegment
