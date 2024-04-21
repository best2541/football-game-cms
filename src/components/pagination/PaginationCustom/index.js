import { Fragment, useEffect, useState } from "react"
import { Row, Col, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import ReactPaginate from "react-paginate"
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from "react-feather"

const PaginationCustom = (props) => {
  const { totalDatas, currentPage, perPage, handlePagination, handleRowPerPage } = props

  const pageAll = Math.ceil(totalDatas / perPage)
  const [open, setOpen] = useState(false)
  const [rowPerPage, setRowPerPage] = useState()

  const dataRow = [10, 20, 30]
  const toggle = () => setOpen(prevState => !prevState)

  const handleFirstPage = () => {
    handlePagination({ page: 1, perPage })
  }

  const handleLastPage = () => {
    handlePagination({ page: pageAll, perPage })
  }

  const onChangeRow = (value) => {
    handlePagination({ page: currentPage + 1, perPage: value })
    setRowPerPage(value)
    handleRowPerPage(value)
  }

  useEffect(() => {
    setRowPerPage(perPage)
  }, [perPage])

  return (
    <Fragment>
      <Row style={{ margin: "1rem" }} className={`${totalDatas === 0 && 'd-none'}`}>
        <Col className="d-flex justify-content-between">
          <Row>
            <div className="mr-50" style={{ color: "#b8c2cc" }}>Page Filter: </div>
            <UncontrolledDropdown isOpen={open} toggle={toggle} className="mr-1">
              <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
                {rowPerPage}
                {open ? <ChevronUp size={14} style={{ marginTop: "-3px", marginLeft: "5px" }} /> : <ChevronDown size={14} style={{ marginTop: "-3px", marginLeft: "5px" }} />}
              </DropdownToggle>
              <DropdownMenu right className="dropdown-per-page">
                {dataRow.map(item => (
                  <DropdownItem onClick={e => onChangeRow(item)} className='w-100' key={item}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Row>
          <Row>
            <Badge pill color='light-primary' className="py-50 mr-25 align-self-center cursor-pointer" onClick={handleFirstPage}>First Page</Badge>
            <ReactPaginate
              previousLabel=""
              nextLabel=""
              forcePage={currentPage}
              onPageChange={(page) => handlePagination({ page: page.selected + 1, perPage })}
              pageCount={pageAll || 1}
              // breakLabel="..."
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
              containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end mb-0"
            />
            <Badge pill color='light-primary' className="py-50 ml-25 align-self-center cursor-pointer" onClick={handleLastPage}>Last Page</Badge>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default PaginationCustom

// ** PropTypes
PaginationCustom.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  totalDatas: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired
}