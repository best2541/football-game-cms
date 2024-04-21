import { Select, Avatar, InputNumber } from "antd"
import "./css/index.css"

const { OptGroup, Option } = Select

const InputNumberMaxMin = (props) => {
  const { expireDuration, setExpireDuration } = props

  const onChange = (value) => {
    console.log("onChange::", value)
    setExpireDuration(value)
  }

  return (
    <div>
      <InputNumber
        className="antd-input-custom"
        value={expireDuration}
        name="expireDuration" 
        placeholder="Maximum 60 second or maximum 600 seconds"
        maxLength="3"
        min={60}
        max={600}
        style={{ width: "100%" }}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
export default InputNumberMaxMin
