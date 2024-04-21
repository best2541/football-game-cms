import { Select, Avatar } from "antd"
import "./css/index.css"
import { TagOutlined } from "@ant-design/icons"

const { OptGroup, Option } = Select

const InputToBroadcast = (props) => {
  const { to, setTo, tagLists, peopleLists, dataTo, setDataTo } = props

  const onChange = (value) => {
    console.log("onChange:::", value)
    setTo(value)
  }

  return (
    <div>
      <Select
        mode="tags"
        showSearch
        className="antd-select-custom"
        style={{ width: "100%" }}
        name="sender"
        tokenSeparators={[",", " "]}
        onChange={onChange}
        value={to}
        placeholder="Enter new numbers or select from your people and tag here"
      >
        <OptGroup label="People">
          {peopleLists &&
            peopleLists.map((data, index) => (
              <Option value={`person_${data.id.toString()}`} name="people">
                <Avatar
                  style={{
                    // backgroundColor: "#b71c1c",
                    backgroundColor: "#FFFFFF",
                    verticalAlign: "middle",
                    color: "#1b55a6",
                    width: 20,
                    height: 20
                  }}
                  size="small"
                >
                  {data.name.substring(0, 1)}
                </Avatar>
                &nbsp;&nbsp;{data.name}
              </Option>
            ))}
        </OptGroup>

        <OptGroup label="Tag">
          {tagLists &&
            tagLists.map((data, index) => (
              <Option value={`tag_${data.id.toString()}`} name="tag">
                <Avatar
                  style={{
                    // backgroundColor: "#00a2ae",
                    backgroundColor: "#FFFFFF",
                    color: "#1b55a6",
                    verticalAlign: "middle",
                    width: 20,
                    height: 20
                  }}
                  icon={<TagOutlined className="style-icon" />}
                  size="small"
                ></Avatar>
                &nbsp;&nbsp;{data.name}
              </Option>
            ))}
        </OptGroup>

        {dataTo &&
          dataTo.map((data) => <Option value={data.id}>{data.name}</Option>)}
      </Select>
    </div>
  )
}
export default InputToBroadcast
