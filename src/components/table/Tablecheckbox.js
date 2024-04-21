import React, { forwardRef } from "react"
import { UncontrolledTooltip } from 'reactstrap'

export const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => {
  return (
    <div>
      {rest.name === "select-all-rows" ? (
        <>
          <div className="custom-control custom-checkbox" id={rest.name}>
            <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
            <label className="custom-control-label" onClick={onClick} />
          </div>
          <UncontrolledTooltip placement='right' target={rest.name}>
            Select All This Page Only
          </UncontrolledTooltip>
        </>
      ) : (
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
          <label className="custom-control-label" onClick={onClick} />
        </div>
      )}
    </div>
  )
})