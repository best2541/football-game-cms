import { forwardRef, Fragment, useState } from "react"
import { Trash, ChevronDown, Edit2 } from "react-feather"
import { Badge, Col, Row } from "reactstrap"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import "./css/table-segment.css"
import "@src/assets/scss/react/libs/tables/react-dataTable-custom-segment-component.scss"
import { Link, useHistory } from "react-router-dom"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

const TableSegment = (props) => {
  const { data, currentPage, setCurrentPage, onDelete, setDataSelectRows, handleDelete } = props.props

  const history = useHistory()

  function handleClick() {
    history.push({
      pathname: "/segment/segmentmanagement",
      state: {
        mode: "EDIT"
      }
    })
  }

  const handleLinkToPeople = (record) => {
    history.push({
      pathname: `/people`,
      state: {
        segment: record
      }
    })
  }

  const MySwal = withReactContent(Swal)

  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   MySwal.fire({
  //     text: "Do you want to Delete this app OTP?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Continue",
  //     customClass: {
  //       cancelButton: "btn btn-outline-primary ml-1",
  //       confirmButton: "btn btn-primary"
  //     },
  //     buttonsStyling: false
  //   }).then(function (result) {
  //     if (result.value) {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Deleted app OTP successfully.",
  //         customClass: {
  //           confirmButton: "btn btn-primary"
  //         }
  //       })
  //     } else {
  //       MySwal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         text: "Deleted app OTP failed.",
  //         customClass: {
  //           confirmButton: "btn btn-primary"
  //         }
  //       })
  //     }
  //   })
  // }

  const handleDeleteIcon = (e) => {
    handleDelete(e)
  }

  const columns = [
    {
      name: "SEGMENT NAME",
      selector: "segmentName",
      width: "200px",
      cell: (row) => (
        <div className="div-flex-layout">
          <span className="space-span-info" style={{ fontWeight: "600", color: "#636363", textAlign: "left", cursor: "pointer" }} onClick={() => handleLinkToPeople(row)}>
            {row.segmentName}
          </span>
        </div>
      )
    },
    {
      name: "DESCRIPTION",
      selector: "description",
      width: "250px",
      cell: (row) => (
        <div className="div-flex-layout">
          <span className="space-span-info" style={{ color: "#636363" }}>
            {row.description}
          </span>
        </div>
      )
    },
    {
      name: "MEMBER",
      selector: "member",
      cell: (row) => (
        <div className="div-flex-layout">
          <span className="space-span-info" style={{ color: "#636363" }}>
            {row.member}
          </span>
        </div>
      )
    },
    {
      name: "CREATED DATE",
      selector: "createDate",
      cell: (row) => (
        <div className="div-flex-layout">
          <span style={{ color: "#636363" }}>{row.createdDate}</span>
        </div>
      )
    },
    {
      name: "STATUS",
      selector: "status",
      cell: (row) => (
        <div>
          {row.status === "Drafted" ? (
            <Badge pill color="light-secondary" className="mr-1">
              {row.status}
            </Badge>
          ) : (
            <Badge pill color="light-success" className="mr-1">
              {row.status}
            </Badge>
          )}
        </div>
      )
    },
    {
      name: "ACTION",
      selector: "action",
      cell: (row) => (
        <div className="div-flex-icon-layout">
          <div>
            <Edit2 className="text-primary mr-50 cursor-pointer" size={15} id="1" mode="EDIT" onClick={handleClick} />{" "}
          </div>
          <div>
            <Trash className="text-primary mr-50 cursor-pointer" size={15} id="1" mode="DELETE" onClick={handleDeleteIcon} />{" "}
          </div>
        </div>
      )
    }
  ]

  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  const handleChange = ({ selectedRows }) => {
    setDataSelectRows(selectedRows)
  }

  const CustomPagination = () => (
    <Fragment>
      <hr />
      <Row style={{ margin: "0px 0px 0px 0px" }}>
        <Col style={{ display: "flex", color: "#b8c2cc" }}>
          <span>Showing 1 to 7 of 100 entries</span>
        </Col>
        <Col>
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={currentPage}
            onPageChange={(page) => handlePagination(page)}
            pageCount={data.length / 7 || 1}
            breakLabel="..."
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName="active"
            pageClassName="page-item"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            nextLinkClassName="page-link"
            nextClassName="page-item next"
            previousClassName="page-item prev"
            previousLinkClassName="page-link"
            pageLinkClassName="page-link"
            containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1"
          />
        </Col>
      </Row>
    </Fragment>
  )

  return (
    <DataTable
      noHeader
      pagination
      selectableRows
      columns={columns}
      paginationPerPage={7}
      className="react-dataTable react-dataTable-custom-segment"
      sortIcon={<ChevronDown size={10} />}
      paginationDefaultPage={currentPage + 1}
      paginationComponent={CustomPagination}
      data={data}
      responsive
      selectableRowsComponent={BootstrapCheckbox}
      onSelectedRowsChange={handleChange}
    />
  )
}

export default TableSegment
