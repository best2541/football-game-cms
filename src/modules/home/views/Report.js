import { Fragment, useEffect, useState } from "react"
import NavbarTitle from "../../../components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { requestLoading } from "../../../redux/actions/main"
import LoadingSpinner from "../../../components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Button, Card, CardBody } from "reactstrap"
import PaginationAndRowPerPage from "../../../components/pagination/PaginationAndRowPerPage"
import { axiosInstance } from "../../../helper/api"
import { Link } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'
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

const columns = [
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
    center: true,
    selector: row => row.score
  },
  {
    name: 'Play Date',
    sortable: true,
    right: true,
    selector: row => new Date(row.create_date).toLocaleString('th')
  }
]

const Report = () => {
  const dispatch = useDispatch()
  const [isLoad, setIsLoad] = useState(false)
  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState('')
  const [dateSearch, setDateSearch] = useState([])
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const { loading } = useSelector((state) => state.homeDetail)

  const handlePagination = (value) => {
    setPage(value)
  }
  const handleRowPerPage = (value) => {
    setPerPage(value)
  }
  const load = () => {
    setIsLoad(true)
    setDatas([])
    axiosInstance(`/dashboard/ranking?search=${search}&start=${dateSearch[0] || ''}&end=${dateSearch[1] || ''}`)
      .then(result => {
        setDatas(result.data.ranking)
        dispatch(requestLoading(loading))
        setIsLoad(false)
      })
      .catch(() => {
        setIsLoad(setIsLoad(false))
      })
  }
  const renderExportBtn = () => (
    <>
      <ExcelFile filename={`Report-${new Date().toLocaleString('th')}`} element={<Button className="bg-danger">Export</Button>}>
        <ExcelSheet data={datas} name="Report">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Phone" value="phone" />
          <ExcelColumn label="Point" value="score" />
          <ExcelColumn label="Play Date"
            value={col => (
              new Date(col.create_date).toLocaleString('th')
            )} />
        </ExcelSheet>
      </ExcelFile>
    </>
  )

  useEffect(() => {
    load()
    dispatch(requestLoading(loading))
  }, [search, dateSearch])

  return (
    <Fragment>
      <NavbarTitle
        breadCrumbTitle={"Report"}
        breadCrumbActive={""}
        className={"col-md-2 col-12"}
      ></NavbarTitle>
      <br />
      <Card>
        <CardBody>
          <GroupListFilter search={search} setSearch={setSearch} exportBtn={renderExportBtn} setDateSearch={setDateSearch} />
          {isLoad && <LinearProgress color="error" />}
          <DataTable
            columns={columns}
            data={datas.slice((page * perPage), ((page * perPage) + perPage))}
            // expandableRows
            // expandableRowsHideExpander={true}
            className="react-dataTable react-dataTable-custom-otp"
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

export default Report