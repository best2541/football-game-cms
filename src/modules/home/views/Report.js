import { Fragment, useEffect } from "react"
import NavbarTitle from "@src/components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component"
import { updateHomeDashboardData, updateHomeDashboardAccountChoice } from "../store/homeDashboard/actions"
import { getAccountInformation } from "../store/homeDetail/actions"
import { requestLoading } from "@src/redux/actions/main"
import LoadingSpinner from "@src/components/spinner/LoadingSpinner"
import GroupListFilter from "../components/GroupListFilter"
import { Card, CardBody } from "reactstrap"
import PaginationAndRowPerPage from "@src/components/pagination/PaginationAndRowPerPage"

const Report = () => {
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
        breadCrumbActive={""}
        className={"col-md-2 col-12"}
      ></NavbarTitle>
      <br />
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

export default Report