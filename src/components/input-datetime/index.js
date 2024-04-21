import { Label, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap"
import { PropTypes } from 'prop-types'
import Flatpickr from 'react-flatpickr'
import { Calendar  } from "react-feather"
import classnames from 'classnames'

const InputDatetime = (props) => {
  const {onChange, isDisabled, value, placeholder, className, htmlFor} = props
  const changeDate = (date) => {
    console.log('test change date', date)
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
          data-enable-time
          options={{
            dateFormat: 'd/m/Y H:i'
          }}
          className="form-control"
          placeholder={placeholder}
          onChange={date => changeDate(date)} 
        />
        <InputGroupAddon addonType='append'>
          <InputGroupText disabled={isDisabled}>
            <Label className='attachment-icon mb-0 d-flex' for='upload-backlist-file'>
              <Calendar className='text-secondary' size={17} />
            </Label>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
export default InputDatetime

InputDatetime.defaultProps = {
  isDisabled: false,
  placeholder: ''
}

InputDatetime.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
}