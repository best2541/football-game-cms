import { Select } from "antd"
import './css/index.css'

const InputTags = (props) => {

    const { value, onChange } = props
    return (
        <div>
            <Select
                value={value}
                mode="tags"
                placeholder="Enter new numbers"
                onChange={onChange}
                style={{ width: '100%' }}
                className='antd-select-custom'
               // className="react-select select-borderless custom-select-tag"
            />
        </div>
    )

}
export default InputTags