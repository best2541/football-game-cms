import { Fragment } from "react"
import HomeDetailBox from "./HomeDetailBox"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col } from 'reactstrap'
import { Tag, Link, Gift } from "react-feather"
import { ReactComponent as Credit } from "@src/assets/images/svg/Credit.svg"

const HomeDetailMCoupon = () => {
  const { mCoupon } = useSelector((state) => state.homeDetail)
  return (
    <Fragment>
      <h3 className="mb-0">M-Coupon</h3>
      <br />
      <Row>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<Tag size={35} />} color='primary' stats={mCoupon.coupon} statTitle='Coupon summary' />
        </Col>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<Link size={35} />} color='success' stats={mCoupon.open} statTitle='Open rate' />
        </Col>
        <Col lg="4" sm="6">
          <HomeDetailBox icon={<Gift size={35} />} color='info' stats={mCoupon.redeem} statTitle='Redeem' />
        </Col>
      </Row>
    </Fragment>
  )
}

export default HomeDetailMCoupon