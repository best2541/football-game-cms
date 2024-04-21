import Proptypes from 'prop-types'
import { AlertCircle } from "react-feather"
import { UncontrolledTooltip } from 'reactstrap'

const TooltipDescription = (props) => {
  const { text, id, noIcon } = props
  return (
    <>
      {!noIcon && (
        <span>
          <AlertCircle
            size={12}
            id={id}
            className="text-white"
            style={{ fill: "grey" }}
          />
        </span>
      )}
      <UncontrolledTooltip
        placement="right"
        target={id}
        className="text-primary"
      >
        {text}
      </UncontrolledTooltip>
    </>
  )
}

export default TooltipDescription

// ** Default Props
TooltipDescription.defaultProps = {
  noIcon: false
}

// ** PropTypes
TooltipDescription.propTypes = {
  id: Proptypes.string.isRequired,
  text: Proptypes.any.isRequired
}