import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import CompanyTable from './CompanyTable'
import { ThemeColors } from '../../../utility/context/ThemeColors'
import Earnings from '../../../modules/ui-elements/cards/analytics/Earnings'
import CardMedal from '../../../modules/ui-elements/cards/advance/CardMedal'
import CardMeetup from '../../../modules/ui-elements/cards/advance/CardMeetup'
import StatsCard from '../../../modules/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '../../../modules/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '../../../modules/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '../../../modules/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '../../../modules/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '../../../modules/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '../../../modules/ui-elements/cards/advance/CardBrowserState'

import '../../../assets/scss/react/libs/charts/apex-charts.scss'
import '../../../assets/scss/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='8' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardMeetup />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
      </Row>
    </div>
  )
}

export default EcommerceDashboard
