import React from "react"
import Flatpickr from "react-flatpickr"

const TypeDate = () => {
  const changeDate = () => {}

  return <Flatpickr value="" id="date-schedule" className="form-control" placeholder="Select Date" onChange={(date) => changeDate(date)} />
}

export default TypeDate
