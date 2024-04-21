import { Fragment, useEffect, useState } from "react"
import NavbarTitle from "@src/components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { requestLoading } from "@src/redux/actions/main"
import LoadingSpinner from "@src/components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"
import PaginationAndRowPerPage from "@src/components/pagination/PaginationAndRowPerPage"
import Chart from "react-apexcharts"
import { Flex, Progress } from 'antd'
import { height } from "@mui/system"

const Home = () => {
  const dispatch = useDispatch()
  const [chart, setChart] = useState({
    options: {
      legend: {
        show: false
      },
      labels: ['All users', 'Play today']
    },
    series: [44, 55]
  })
  const [chart2, setChart2] = useState({
    options: {
      legend: {
        show: false
      },
      labels: ['8.00', '8.30', '9.00'],
      markers: {
        size: 4
      },
      chart: {
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      }
    },
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }
    ]
  })
  const { mCoupon, activity, homeDetail, loading } = useSelector((state) => state.homeDetail)

  const getData = async () => {
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    dispatch(requestLoading(loading))
  }, [mCoupon, activity, homeDetail, loading])

  return (
    <Fragment>
      <NavbarTitle
        breadCrumbTitle={"Dashboard"}
        breadCrumbActive={""}
        className={"col-md-2 col-12"}
      ></NavbarTitle>
      <br />
      <Row>
        <Col lg='3' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardHeader>
              <h4>Game name</h4>
            </CardHeader>
            <CardBody>
              <h5>Total all time play:</h5>
              <h4>911</h4>
              <h3>Total Users</h3>
              <h3>5000</h3>
            </CardBody>
          </Card>
        </Col>
        <Col lg='3' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardBody>
              <Chart
                options={chart.options}
                series={chart.series}
                labels={chart.labels}
                type="pie"
                width="100%"
              />
              <div className="d-flex justify-content-between"><div>All users</div><div>44k</div></div>
              <Progress percent={44} />
              <div className="d-flex justify-content-between"><div>Play today</div><div>55k</div></div>
              <Progress percent={55} />
            </CardBody>
          </Card>
        </Col>
        <Col lg='6' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardBody>
              <Chart
                options={chart2.options}
                series={chart2.series}
                labels={chart2.labels}
                type="line"
                width="100%"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card>
        <CardBody>
          <GroupListFilter />
          <DataTable
          // data={data.data}
          // expandableRows
          // expandableRowsHideExpander={true}
          // columns={TagColumnList(loadingDatas, onEditMember)}
          // className="react-dataTable react-dataTable-custom-otp"
          // sortIcon={<ChevronDown size={10} />}
          // onSelectedRowsChange={handleChange}
          // selectableRowsComponent={BootstrapCheckbox}
          // selectableRowSelected={selectableRowSelected}
          />
          <PaginationAndRowPerPage
            currentPage={2}
            perPage={5}
            totalPage={20}
          // handlePagination={val => handlePagination(val)}
          // handleRowPerPage={val => handleRowPerPage(val)}
          />
        </CardBody>
      </Card>
      {/* <HomeDashboardFilter
        successColorShade={"#28dac6"}
        labelColor={'#b4b7bd'}
        tooltipShadow={'rgba(0, 0, 0, 0.25)'}
        gridLineColor={'rgba(200, 200, 200, 0.2)'} 
      /> */}
      <LoadingSpinner />
    </Fragment>
  )
}

export default Home