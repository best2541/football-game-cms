import { Fragment } from "react"
import PropTypes from 'prop-types'
import { Card, CardBody } from 'reactstrap'

const HomeDetailBox = ({ icon, color, stats, statTitle, className, ...rest}) => {

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='d-flex justify-content-between align-items-center my-1'>
            <div className={`avatar avatar-stats p-2 m-0 ${color ? `bg-light-${color}` : 'bg-light-primary'}`}>
              <div className='avatar-content'>{icon}</div>
            </div>
            <div>
              <h2 className={`font-weight-bolder mb-1 text-right ${color ? `text-${color}` : 'text-primary'}`} style={{ fontSize: "24px" }}>{stats}</h2>
              <p className='card-text text-right text-secondary' style={{ fontSize: "16px" }}>{statTitle}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default HomeDetailBox

// PropTypes
HomeDetailBox.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  className: PropTypes.string
}