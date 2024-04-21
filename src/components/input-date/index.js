import { Label, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap"
import { PropTypes } from 'prop-types'
import Flatpickr from 'react-flatpickr'
import { Calendar  } from "react-feather"
import classnames from 'classnames'

const InputDate = (props) => {
  const {onChange, isDisabled, value, placeholder, className, htmlFor} = props
  const changeDate = (date) => {
    // console.log('test change date', date)
    onChange(date)
  }

  return (
    <div>
      <InputGroup 
        className={classnames('input-group-merge mr-1 form-send-message', {
          [className]: className
        })}
      >
        <Flatpickr
          id={htmlFor}
          value={value}
          disabled={isDisabled}
          options={{
            dateFormat: 'd/m/Y'
          }}
          className="form-control isValid-form"
          placeholder={placeholder}
          onChange={date => changeDate(date)} 
        />
        <InputGroupAddon addonType='append'>
          <InputGroupText disabled={isDisabled}>
            <Label className='attachment-icon mb-0 d-flex' for='upload-backlist-file'>
              <Calendar className='text-secondary' size={18} />
            </Label>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
export default InputDate

InputDate.defaultProps = {
  isDisabled: false,
  placeholder: ''
}

InputDate.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
}