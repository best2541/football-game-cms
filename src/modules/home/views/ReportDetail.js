import { Fragment, useEffect, useState } from "react"
import NavbarTitle from '../../../components/navbarTitle'
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { requestLoading } from "../../../redux/actions/main"
import LoadingSpinner from "../../../components/spinner/LoadingSpinner"
import { Card, CardBody, CardHeader, Col, Row, Input, FormGroup, Label, Button } from "reactstrap"
import PaginationAndRowPerPage from "../../../components/pagination/PaginationAndRowPerPage"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../../../helper/api"

const columns = [
    {
        name: 'No.',
        selector: row => row.no + 1
    },
    {
        name: 'Point',
        selector: row => row.score
    },
    {
        name: 'Device',
        selector: row => row.device
    },
    {
        name: 'Play Date',
        selector: row => new Date(row.create_date).toLocaleString('th')
    }
]

const ReportDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [info, setInfo] = useState({})
    const [datas, setDatas] = useState([])
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const { loading } = useSelector((state) => state.homeDetail)

    const handlePagination = (value) => {
        setPage(value)
    }
    const handleRowPerPage = (value) => {
        setPerPage(value)
    }

    useEffect(() => {
        axiosInstance(`/dashboard/ranking/${id}`)
            .then(result => {
                setInfo(result.data.report)
                setDatas(result.data.table.map((data, index) => (
                    {
                        no: index,
                        ...data
                    }
                )))
            })
        dispatch(requestLoading(loading))
    }, [])

    return (
        <Fragment>
            <NavbarTitle
                breadCrumbTitle={"Report"}
                breadCrumbActive={"name"}
                className={"col-md-2 col-12"}
            ></NavbarTitle>
            <br />
            <Card>
                <CardHeader>
                    <h1>INFOMATION</h1>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input value={info.name} disabled />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Ranking</Label>
                                <Input value={info.rank} disabled />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Total Point</Label>
                                <Input value={info.score} disabled />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Frequency</Label>
                                <Input value={info.feq} disabled />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row className="group-list-filter">
                        <Col md='12' className="group-list-filter-card">
                            <h1 style={{ width: '100%' }}>Records</h1>
                            <Button className="bg-danger">Export</Button>
                        </Col>
                    </Row>
                    <DataTable
                        columns={columns}
                        data={datas.slice((page * perPage), ((page * perPage) + perPage))}
                    // expandableRows
                    // expandableRowsHideExpander={true}
                    // className="react-dataTable react-dataTable-custom-otp"
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

export default ReportDetail