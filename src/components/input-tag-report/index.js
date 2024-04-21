import { Select } from "antd"
import './css/index.css'

const InputTags = (props) => {

    const { value, onChange, isDisabled, placeholder } = props
    return (
        <div>
            <Select
                value={value}
                mode="tags"
                placeholder={placeholder}
                onChange={onChange}
                style={{ width: '100%' }}
                className='antd-select-custom'
                disabled={isDisabled}
               // className="react-select select-borderless custom-select-tag"
            />
        </div>
    )

}
export default InputTags