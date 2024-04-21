import { PropTypes } from 'prop-types'
import { ChevronRight } from 'react-feather'

export const wizard_default = {
  type: 'horizontal',
  separator: <ChevronRight size={17} />,
  options: {}
}

// ** PropTypes
export const wizard_type = {
  type: PropTypes.string,
  instance: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  separator: PropTypes.element,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.any.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.any,
      content: PropTypes.any.isRequired
    })
  ).isRequired
}
