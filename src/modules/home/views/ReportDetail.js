import { Fragment, useEffect } from "react"
import NavbarTitle from "@src/components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { updateHomeDashboardData, updateHomeDashboardAccountChoice } from "../store/homeDashboard/actions"
import { getAccountInformation } from "../store/homeDetail/actions"
import { requestLoading } from "@src/redux/actions/main"
import LoadingSpinner from "@src/components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Card, CardBody, CardHeader, Col, Row, Input, FormGroup, Label } from "reactstrap"
import PaginationAndRowPerPage from "@src/components/pagination/PaginationAndRowPerPage"

const ReportDetail = () => {
    const dispatch = useDispatch()

    const { mCoupon, activity, homeDetail, loading } = useSelector((state) => state.homeDetail)

    const getData = async () => {
        await dispatch(updateHomeDashboardData())
        await dispatch(updateHomeDashboardAccountChoice())
        await dispatch(getAccountInformation())
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
                                <Input />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Ranking</Label>
                                <Input />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Total Point</Label>
                                <Input />
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label>Frequency</Label>
                                <Input />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    {/* <GroupListFilter /> */}
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

export default ReportDetail