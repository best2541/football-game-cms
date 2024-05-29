import { Fragment, useEffect, useState } from "react"
import NavbarTitle from "../../../components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { requestLoading } from "../../../redux/actions/main"
import LoadingSpinner from "../../../components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap"
import PaginationAndRowPerPage from "../../../components/pagination/PaginationAndRowPerPage"
import Chart from "react-apexcharts"
import { Progress, Tooltip } from 'antd'
import { axiosInstance } from "../../../helper/api"
import { convertToK } from "../../../helper/convert"
import { groupBy } from '../../../helper/groupby'
import ReactExport from "react-export-excel"

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

const reward = (value) => {
  if (value <= 2) {
    return 'Gold'
  } else if (value <= 7) {
    return 'Voucher 1000'
  } else if (value <= 17) {
    return 'Voucher 300'
  } else if (value <= 32) {
    return 'The 1-500 Pts'
  }
}

const chart = {
  options: {
    legend: {
      show: false
    },
    labels: ['Not participate', 'Play today'],
    colors: ['#000000', '#AE132A']
  }
}

const columns = [
  {
    name: 'Rank',
    sortable: true,
    selector: row => row.rank
  },
  {
    name: 'Name',
    sortable: true,
    selector: row => row.name
  },
  {
    name: 'Phone',
    sortable: true,
    selector: row => row.phone
  },
  {
    name: 'Point',
    sortable: true,
    selector: row => row.score
  },
  {
    name: 'Reward',
    sortable: true,
    selector: row => reward(row.rank)
  }
]

const Home = () => {
  const dispatch = useDispatch()
  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState('')
  const [labels, setLabels] = useState()
  const [allTimePlay, setAllTimePlay] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalUsersPhone, setTotalUsersPhone] = useState(0)
  const [usersPlayToday, setUsersPlayToday] = useState(0)
  const [usersPhonePlayToday, setUsersPhonePlayToday] = useState(0)
  const [records, setRecords] = useState([])
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const { loading } = useSelector((state) => state.homeDetail)

  const chart2 = {
    options: {
      legend: {
        show: false
      },
      labels,
      colors: ['#cfa3aa'],
      markers: {
        size: 5,
        colors: '#AE132A',
        strokeColors: '#AE132A',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      chart: {
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Peak Time / Less Time',
        align: 'left'
      }
    }
  }

  const handlePagination = (value) => {
    setPage(value)
  }
  const handleRowPerPage = (value) => {
    setPerPage(value)
  }

  const renderExportBtn = () => (
    <>
      <ExcelFile filename={`Dashboard-${new Date().toLocaleString('th')}`} element={<Button className="bg-danger">Export</Button>}>
        <ExcelSheet data={datas} name="Ranking">
          <ExcelColumn label="Rank" value="rank" />
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Phone" value="phone" />
          <ExcelColumn label="Point" value="score" />
          <ExcelColumn label="Reward"
            value={col => (
              reward(col.rank)
            )} />
        </ExcelSheet>
      </ExcelFile>
    </>
  )

  const load = () => {
    axiosInstance.get(`/dashboard/getDashboardTable?search=${search}`)
      .then(result => {
        setDatas(result.data.ranking)
      })
  }
  useEffect(() => {
    load()
  }, [search])
  useEffect(() => {
    axiosInstance.get('/dashboard/getDashboard')
      .then(async result => {
        setAllTimePlay(result.data.allTimePlay)
        setTotalUsers(result.data.totalUsers)
        setTotalUsersPhone(result.data.totalUsersPhone)
        setUsersPhonePlayToday(result.data.usersPhonePlayToday)
        const playToday = groupBy(result.data.playToday, 'uid')
        const set = {}
        const hours = []
        await result.data.playToday?.map(data => {
          const date = new Date(data.create_date)
          date.setHours(date.getHours())
          const hour = date.getHours()
          // hours.push(`${hour}:00`)
          set[hour] = set[hour] ? set[hour] + 1 : 1
        })
        await Object.keys(set)?.map(d => hours.push(`${d}:00-${d}:59`))
        setLabels(hours)
        setRecords([
          {
            name: "ครั้ง",
            data: Object.values(set)
          }
        ])
        setUsersPlayToday(playToday)
        dispatch(requestLoading(loading))
      })
  }, [])

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
              <h4 className="m-0">Tap Tap Go</h4>
            </CardHeader>
            <CardBody>
              <hr />
              <h5>Total all time play:</h5>
              <h1>{allTimePlay}</h1>
              <Tooltip placement="right" title={`Phone Saved | Unsaved : ${totalUsersPhone} | ${totalUsers - totalUsersPhone}`}>
                <h3 className="text-primary">Total Users:</h3>
                <h1 className="text-primary">{totalUsersPhone}</h1>
              </Tooltip>
            </CardBody>
          </Card>
        </Col>
        <Col lg='3' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardBody>
              <Chart
                colors={chart.colors}
                options={chart.options}
                series={[totalUsersPhone - usersPhonePlayToday, usersPhonePlayToday]}
                labels={chart.labels}
                type="pie"
                width="100%"
              />
              <div className="d-flex justify-content-between"><div>Not participate</div><div>{convertToK(totalUsersPhone - usersPhonePlayToday)}</div></div>
              <Progress strokeColor='#000000' percent={((totalUsersPhone - usersPhonePlayToday) / totalUsersPhone) * 100} format={(percen) => `${percen.toFixed(1)}%`} />
              <div className="d-flex justify-content-between"><div>Play today</div><div>{convertToK(usersPhonePlayToday)}</div></div>
              <Progress strokeColor='#AE132A' percent={(usersPhonePlayToday / totalUsersPhone) * 100} format={(percen) => `${percen.toFixed(1)}%`} />
            </CardBody>
          </Card>
        </Col>
        <Col lg='6' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardBody>
              <Chart
                options={chart2.options}
                series={records}
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
          <GroupListFilter search={search} setSearch={setSearch} exportBtn={renderExportBtn} />
          <DataTable
            columns={columns}
            data={datas.slice((page * perPage), ((page * perPage) + perPage))}
            // expandableRows
            // expandableRowsHideExpander={true}
            // columns={TagColumnList(loadingDatas, onEditMember)}
            className="react-dataTable react-dataTable-custom-otp"
          // sortIcon={<ChevronDown size={10} />}
          // onSelectedRowsChange={handleChange}
          // selectableRowsComponent={BootstrapCheckbox}
          // selectableRowSelected={selectableRowSelected}
          />
          <PaginationAndRowPerPage
            currentPage={page}
            perPage={perPage}
            totalPage={datas.length}
            handlePagination={val => handlePagination(val)}
            handleRowPerPage={val => handleRowPerPage(val)}
          />
        </CardBody>
      </Card>
      <LoadingSpinner />
    </Fragment>
  )
}

export default Home