import React from "react"
import Select, { components } from "react-select"

const FieldSelect = () => {
    
  const SelectOTPComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className="d-flex flex-wrap align-items-center">{data.label}</div>
      </components.Option>
    )
  }

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      isSearchable={true}
      name="otp-text"
      id="otp-text"
      value={[]}
      options={[]}
      components={{ Option: SelectOTPComponent }}
      //   onChange={}
      placeholder="Select"
    />
  )
}

export default FieldSelect
