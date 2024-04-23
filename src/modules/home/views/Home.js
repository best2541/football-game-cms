import { Fragment, useEffect, useState } from "react"
import NavbarTitle from "@src/components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { requestLoading } from "@src/redux/actions/main"
import LoadingSpinner from "@src/components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap"
import PaginationAndRowPerPage from "@src/components/pagination/PaginationAndRowPerPage"
import Chart from "react-apexcharts"
import { Progress } from 'antd'
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
const chart2 = {
  options: {
    legend: {
      show: false
    },
    labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
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
const data = [
  {
    rank: 1,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 2,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 3,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 4,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 5,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 6,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 7,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 8,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 9,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 10,
    name: 'Beetlejuice',
    score: '1988'
  },
  {
    rank: 11,
    name: 'Beetlejuice',
    score: '1988'
  }
]
const Home = () => {
  const dispatch = useDispatch()
  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState('')
  const [allTimePlay, setAllTimePlay] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [usersPlayToday, setUsersPlayToday] = useState(0)
  const [records, setRecords] = useState([])
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const { loading } = useSelector((state) => state.homeDetail)

  const handlePagination = (value) => {
    setPage(value)
  }
  const handleRowPerPage = (value) => {
    setPerPage(value)
  }

  const renderExportBtn = () => (
    <>
      <ExcelFile element={<Button className="bg-danger">Export</Button>}>
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
        const playToday = groupBy(result.data.playToday, 'uid')
        const set = {}
        await result.data.playToday?.map(data => {
          const date = new Date(data.create_date)
          date.setHours(date.getHours())
          const hour = date.getHours()
          set[hour] = set[hour] ? set[hour] + 1 : 1
        })
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
              <h3 className="text-primary">Total Users:</h3>
              <h1 className="text-primary">{totalUsers}</h1>
            </CardBody>
          </Card>
        </Col>
        <Col lg='3' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardBody>
              <Chart
                colors={chart.colors}
                options={chart.options}
                series={[totalUsers - Object.keys(usersPlayToday).length, Object.keys(usersPlayToday).length]}
                labels={chart.labels}
                type="pie"
                width="100%"
              />
              <div className="d-flex justify-content-between"><div>Not participate</div><div>{convertToK(totalUsers - Object.keys(usersPlayToday).length)}</div></div>
              <Progress strokeColor='#000000' percent={((totalUsers - Object.keys(usersPlayToday).length) / totalUsers) * 100} format={(percen) => `${percen}%`} />
              <div className="d-flex justify-content-between"><div>Play today</div><div>{convertToK(Object.keys(usersPlayToday).length)}</div></div>
              <Progress strokeColor='#AE132A' percent={(Object.keys(usersPlayToday).length / totalUsers) * 100} format={(percen) => `${percen}%`} />
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