import { Fragment, useEffect, useState } from "react"
import { Row, Col, Label, Button, Card } from "reactstrap"
import Select from "react-select"
import HomeDashboard from "./HomeDashboard"
import { updateHomeDashboardFilter, updateHomeDashboardData } from "../../store/homeDashboard/actions"
import "../HomeDashboard.scoped.scss"
import { useDispatch, useSelector } from "react-redux"

const HomeDashboardFilter = () => {
  const { accountChoice } = useSelector(
    (state) => state.homeDashboard
  )
  const dispatch = useDispatch()
  const [submitData, setSubmitData] = useState({
    account: {
      value: "",
      label: ""
    },
    month: ""
  })
  const month = [
    { value: "1", label: "January" },
    { value: "2", label: "Febuary" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ]

  const handleChangeInput = (name, value) => {
    setSubmitData({ ...submitData, [name]: value })
  }

  const handleSearch = async () => {
    await dispatch(updateHomeDashboardFilter({
      submitData
    }))
    await dispatch(updateHomeDashboardData(submitData))
  }

  return (
    <Fragment>
      <h3 className="mb-0">SMS</h3>
      <br />
      <div className="div-search-data">
        <Row>
          <Label sm="1" size="lg">
            <h5 className="mb-0">Select account</h5>
          </Label>
          <Col md="4" xl="4" sm="8" style={{ width: "100%" }}>
            <Select
              className="react-select"
              classNamePrefix="select"
              options={accountChoice}
              onChange={(e) => handleChangeInput("account", e)}
            />
          </Col>
          <Label sm="1" size="lg" className="divider-vertical-account center">
            <h5 className="mb-0">Select month</h5>
          </Label>
          <Col md="4" xl="4" sm="8" style={{ width: "100%" }}>
            <Select
              className="react-select"
              classNamePrefix="select"
              defaultValue={month[0]}
              options={month}
              onChange={(e) => handleChangeInput("month", e.value)}
            />
          </Col>
          <Col md="1" xl="1" sm="6" style={{ width: "100%" }}>
            <Button color="primary" onClick={() => handleSearch()}>
              Search
            </Button>
          </Col>
        </Row>
        <br />
        <HomeDashboard />
      </div>
    </Fragment>
  )
}

export default HomeDashboardFilter
