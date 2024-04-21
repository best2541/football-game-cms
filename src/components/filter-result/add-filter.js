import React, { useState } from "react"
import { X } from "react-feather"
import { Card, CardBody, CardHeader, Input, Label } from "reactstrap"
import "./css/index.css"
import { selectThemeColors } from "@utils"
import Select from "react-select"

const Addfilter = (props) => {
  const { setToggleComposeSearch } = props
  const [filterData, setFilterData] = useState([])

  const mockFilterList = [
    { value: "destination", label: "Destination" },
    { value: "frist_name", label: "Frist Name" },
    { value: "last_name", label: "Last Name" },
    { value: "gender", label: "Gender" },
    { value: "address", label: "Address" },
    { value: "sub_district", label: "Sub-district" },
    { value: "district", label: "District" },
    { value: "province", label: "Province" },
    { value: "country", label: "Country" },
    { value: "postcode", label: "Postcode" },
    { value: "birthday", label: "Birthday" },
    { value: "tag", label: "Tag" }
  ]

  return (
    <Card className="add-filter-content" style={{ maxWidth: "400px" }}>
      <CardHeader className="add-filter-content-header">
        <span>Add Filter</span>
        <span className="close-btn">
          <X className="cursor-pointer" onClick={() => setToggleComposeSearch(false)} />
        </span>
      </CardHeader>
      {/* <hr className="d-none d-md-block container-m-mx mt-0 mb-0" /> */}
      <CardBody>
        <Input id="searchFilter" placeholder="Search" />

        {mockFilterList.map((item, index) => {
          return <div className="mb-1 mt-1">{item.label}</div>
        })}

        {/* <Select
          theme={selectThemeColors}
          value={filterData}
          name="filterData"
          options={mockFilterList}
          className="react-select"
          classNamePrefix="select"
          placeholder="Search"
          onChange={(data) => setFilterData(data)}
        /> */}
      </CardBody>
    </Card>
  )
}

export default Addfilter
