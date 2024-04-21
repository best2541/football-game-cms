import { Select, Avatar, InputNumber } from "antd"
import "./css/index.css"

const { OptGroup, Option } = Select

const InputNumberData = (props) => {
  const { maxNumFail, setMaxNumFail } = props

  const onChange = (value) => {
    console.log("onChange::", value)
    setMaxNumFail(value)
  }

  return (
    <div>
      <InputNumber
        className="antd-input-custom"
        value={maxNumFail}
        name="maxNumFail"
        placeholder="input data"
        maxLength="3"
        min={1}
        style={{ width: "100%" }}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
export default InputNumberData
