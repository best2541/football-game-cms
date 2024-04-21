import { Fragment } from "react"
import HomeDetailBox from "./HomeDetailBox"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col } from 'reactstrap'
import { MessageSquare, Archive } from "react-feather"
import { ReactComponent as Credit } from "@src/assets/images/svg/Credit.svg"

const HomeDetail = () => {
  const { homeDetail } = useSelector((state) => state.homeDetail)
  return (
    <Fragment>
      <Row>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<MessageSquare size={35} />} color='primary' stats={homeDetail.smsSub} statTitle='Total SMS Submitted' />
        </Col>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<Archive size={35} />} color='primary' stats={homeDetail.deliRate} statTitle='Delivery rate' />
        </Col>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<Credit width={35} height={35} />} color='primary' stats={homeDetail.cost} statTitle='Total Cost' />
        </Col>
      </Row>
    </Fragment>
  )
}

export default HomeDetail