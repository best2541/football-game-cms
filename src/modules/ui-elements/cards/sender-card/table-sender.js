import { Fragment, useState } from "react"
import { MoreVertical, Edit, Trash, Copy, User, Mail, MessageSquare, ChevronDown } from "react-feather"
import { Badge, Col, Row } from "reactstrap"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import "./css/table-sender.css"
import "@src/assets/scss/react/libs/tables/react-dataTable-custom-sender-component.scss"
import { Link, useHistory } from "react-router-dom"
import moment from "moment"

const TableSender = (props) => {
  const { data, currentPage, setCurrentPage } = props.props

  const columns = [
    {
      name: "SENDER NAME",
      selector: "senderName",
      width: "600px",
      cell: (row) => (
        <div className="div-flex-layout">
          <span className="space-span-info dataTable-text-size" style={{ fontWeight: "600", color: "#636363" }}>
            {row.name}
          </span>
        </div>
      )
    },
    {
      name: "CREATE DATE",
      selector: "createdate",
      cell: (row) => (
        <div className="div-flex-layout">
          <span className="space-span-info dataTable-text-size" style={{ color: "#82868b" }}>
            {row.createdate && moment(row.createdate).format("DD-MM-YYYY HH:mm")}
          </span>
        </div>
      )
    },
    {
      name: "STATUS",
      selector: "status",
      cell: (row) => (
        <div>
          {row.status === true ? (
            <Badge pill color="light-success" className="mr-1">
              Active
            </Badge>
          ) : (
            <Badge pill color="light-success" className="mr-1">
              Inactive
            </Badge>
          )}
        </div>
      )
    }
  ]

  const handlePagination = (page) => {
    setCurrentPage(page.selected)
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
      columns={columns}
      paginationPerPage={7}
      className="react-dataTable react-dataTable-custom-sender"
      sortIcon={<ChevronDown size={10} />}
      paginationDefaultPage={currentPage + 1}
      paginationComponent={CustomPagination}
      data={data}
      responsive
    />
  )
}

export default TableSender
