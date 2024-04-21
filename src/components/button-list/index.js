// ** React Imports
/*eslint-disable */
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button,UncontrolledTooltip} from 'reactstrap'
// ** Styles
import './button-list.scss'

const ButtonList = props => {
  // ** Props
  const {
listButton,
defaultValue,
onChange,id
  } = props
  //** handleClick */
  const handleClick = (v) => { 
   setValue(v)
  }
   // ** State
   const [value, setValue] = useState(defaultValue)

  // ** UseEffect based on user passed onChange
  useEffect(() => {
   
   if(onChange){
    onChange(value)
   }
  }, [value])

  return (
  <div className="button-list">
    {listButton.map((l,index) => { 
     return  <span> <Button.Ripple key={index} id={`${id}_${index}`} className='btn-icon btn-setting' style={{width:l.btnSize}} color={l.btnColor} active={  value == l.value ? true : false } onClick={e => { handleClick(l.value) }}>
                <FontAwesomeIcon style={{fontSize: l.fontSize, color: l.fontColor}} icon={l.fontIcon} />
                 
              </Button.Ripple>

      <UncontrolledTooltip placement='top' target={`${id}_${index}`}>
      {l.tooltip}
    </UncontrolledTooltip>
    </span>
    })}
  </div>
  )
}

export default ButtonList
