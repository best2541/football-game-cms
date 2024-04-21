import { Fragment } from "react"
import classnames from 'classnames'
import { useSelector, useDispatch } from "react-redux"
import Avatar from '@components/avatar'
import { AlertTriangle, Send, XCircle, Radio } from "react-feather"
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const HomeDetailActivity = ({ cols }) => {
  const { activity } = useSelector((state) => state.homeDetail)
  const data = [
    {
      title: <div>{activity.deli}</div>,
      subtitle: 'Delivered',
      color: 'light-success',
      icon: <Send size={35} />,
      text: 'success'
    },
    {
      title: <div>{activity.reject}</div>,
      subtitle: 'Reject',
      color: 'light-danger',
      icon: <AlertTriangle size={35} />,
      text: 'danger'
    },
    {
      title: <div>{activity.progess}</div>,
      subtitle: 'In progess',
      color: 'light-warning',
      icon: <Radio size={35} />,
      text: 'warning'
    },
    {
      title: <div>{activity.unDeli}</div>,
      subtitle: 'Undelivered',
      color: 'light-secondary',
      icon: <XCircle size={35} />,
      text: 'secondary'
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' style={{ padding: "13px"}} />
            <Media className='my-auto' body>
              <h4 className={`font-weight-bolder mb-0 ${item.text ? `text-${item.text}` : 'text-primary'}`} style={{ fontSize: "24px" }}>{item.title}</h4>
              <p className='card-text text-secondary mb-0' style={{ fontSize: "16px" }}>{item.subtitle}</p>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Fragment>
      <Card className='card-statistics'>
        <CardHeader>
          <CardTitle tag='h4'>Activity statistics</CardTitle>
        </CardHeader>
        <CardBody className='statistics-body'>
          <Row>{renderData()}</Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default HomeDetailActivity