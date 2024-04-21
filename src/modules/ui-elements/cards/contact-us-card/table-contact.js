import { Fragment, useState } from "react"
import {
  MoreVertical,
  Edit,
  Trash,
  Copy,
  User,
  Mail,
  MessageSquare,
  ChevronDown,
  Download
} from "react-feather"
import { Badge, Col, Row } from "reactstrap"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import "./css/table-contact.css"
import "@src/assets/scss/react/libs/tables/react-dataTable-custom-contact-us.scss"
import { Link, useHistory } from "react-router-dom"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

const TableContactUs = (props) => {
  const { data, currentPage, setCurrentPage } = props.props
  const [mode, setMode] = useState("")

  const history = useHistory()

  const MySwal = withReactContent(Swal)

  const handleDelete = (e) => {
    e.preventDefault()
    MySwal.fire({
      text: "Do you want to Delete this broadcast?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Continue",
      customClass: {
        cancelButton: "btn btn-outline-primary ml-1",
        confirmButton: "btn btn-primary"
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: "success",
          title: "Success",
          text: "Deleted broadcast successfully.",
          customClass: {
            confirmButton: "btn btn-primary"
          }
        })
      } else {
        MySwal.fire({
          icon: "error",
          title: "Failed",
          text: "Deleted broadcast failed.",
          customClass: {
            confirmButton: "btn btn-primary"
          }
        })
      }
    })
  }

  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ","
    const lineDelimiter = "\n"
    const keys = Object.keys(data[0])

    result = ""
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach((item) => {
      let ctr = 0
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement("a")
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = "export.xlsx"

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute("href", encodeURI(csv))
    link.setAttribute("download", filename)
    link.click()
  }

  const columns = [
    {
      name: "SUBJECT",
      selector: "subject",
      width: "230px",
      cell: (row) => (
        <div className="div-flex-layout" style={{ textAlign: "left" }}>
          <span
            className="space-span-info dataTable-text-size"
            style={{ fontWeight: "600", color: "#636363" }}
          >
            {row.subject}
          </span>
        </div>
      )
    },
    {
      name: "MESSAGE",
      selector: "message",
      width: "230px",
      cell: (row) => (
        <div className="div-flex-layout" style={{ textAlign: "left" }}>
          <span
            className="space-span-info dataTable-text-size"
            style={{ color: "#82868b" }}
          >
            {row.message}
          </span>
        </div>
      )
    },
    {
      name: "CREATE DATE",
      selector: "createDate",
      width: "180px",
      cell: (row) => (
        <div className="div-flex-layout">
          <span
            className="space-span-info dataTable-text-size"
            style={{ color: "#82868b" }}
          >
            {row.createDate}
          </span>
        </div>
      )
    },
    {
      name: "REPLY",
      selector: "reply",
      width: "230px",
      cell: (row) => (
        <div className="div-flex-layout" style={{ textAlign: "left" }}>
          <span
            className="space-span-info dataTable-text-size"
            style={{ color: "#82868b" }}
          >
            {row.reply}
          </span>
        </div>
      )
    },
    {
      name: "REPLY DATE",
      selector: "replyDate",
      width: "180px",
      cell: (row) => (
        <div className="div-flex-layout">
          <span
            className="space-span-info dataTable-text-size"
            style={{ color: "#82868b" }}
          >
            {row.replyDate}
          </span>
        </div>
      )
    },
    {
      name: "ACTION",
      selector: "action",
      //width: "100px",
      cell: (row) => (
        <div
          className="div-flex-icon-layout"
          style={{ textAlign: "center", marginLeft: "10px" }}
        >
          <div>
            <Download
              className="text-primary mr-50 cursor-pointer"
              size={15}
              id="1"
              mode="Download"
              onClick={() => downloadCSV(data)}
            />{" "}
          </div>
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
      className="react-dataTable react-dataTable-custom-contact-us"
      sortIcon={<ChevronDown size={10} />}
      paginationDefaultPage={currentPage + 1}
      paginationComponent={CustomPagination}
      data={data}
      responsive
    />
  )
}

export default TableContactUs
