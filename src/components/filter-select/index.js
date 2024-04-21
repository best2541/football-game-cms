import { useState } from "react"
import {
  UncontrolledDropdown, DropdownToggle, Row, Col,
  DropdownMenu, DropdownItem, Button, CustomInput
} from 'reactstrap'
import { useDispatch, useSelector } from "react-redux"
import { Sliders, Calendar } from "react-feather"
import Flatpickr from 'react-flatpickr'
import "./css/index.scss"
// ** Custom Components
import PerfectScrollbar from 'react-perfect-scrollbar'

const FilterSelect = (props) => {
  const dispatch = useDispatch()
  const [createTagOpen, setCreateTagOpen] = useState(false)
  const [tag, setTag] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)
  const toggleOpenDropdown = () => setOpenDropdown(prevState => !prevState)
  const [status, setStatus] = useState('')

  const toggleOpen = () => {
    setTag("")
    setCreateTagOpen(false)
    toggleOpenDropdown()
  }

  const handleStatusChange = (status) => {
    setStatus(status)
    if (status === "Active") {
      dispatch(updateGameListRequest({name: "isActive", value: true}))
    } else if (status === "Unactive") {
      dispatch(updateGameListRequest({name: "isActive", value: false}))
    } else {
      dispatch(updateGameListRequest({name: "isEnd", value: true}))
    }
  }

  const handleFilterChange = async () => {
    setOpenDropdown(false)
    console.log('what is this')
  }

  const onChangeType = (value) => {
    console.log('what the')
  }

  return (
    <UncontrolledDropdown isOpen={openDropdown} toggle={toggleOpen} className="dropdown-add-to-tag mr-1">
      <DropdownToggle outline color='primary' className='btn border-0'>
        <Sliders size={16} />
      </DropdownToggle>
      <DropdownMenu right className='filter-dropdown-menu mt-0 p-1'>
          <Row>
            <Col lg='2'>
              <p className="mb-1">Type</p>
            </Col>
            <Col lg='4'>
              <CustomInput
                className='ml-1'
                type="radio"
                id={'Scratch'}
                checked={true}
                onChange={() => onChangeType("Scratch")}
                label={'Scratch'}
              />
            </Col>
            <Col lg='4'>
              <CustomInput
                className='ml-1'
                type="radio"
                id={'Spinner'}
                checked={true}
                onChange={() => onChangeType("Spinner")}
                label={'Spinner'}
              />
            </Col>
          </Row>
          <Row>
            <Col lg='2'>
            <p className="mb-1">Status</p>
            </Col>
            <Col lg='3'>
              <CustomInput
                className='ml-1'
                type="radio"
                id='Active'
                label={'Active'}
                name='status'
                value={status}
                checked={status === 'Active'}
                onChange={() => handleStatusChange('Active')}
              />
            </Col>
            <Col lg='3'>
              <CustomInput
                className='ml-1'
                type="radio"
                id='Pause'
                label={'Pause'}
                name='status'
                value={status}
                checked={status === 'Pause'}
                onChange={() => handleStatusChange('Pause')}
              />
            </Col>
            <Col lg='4'>
              <CustomInput
                className='ml-1'
                type="radio"
                id='Unactive'
                label={'Unactive'}
                name='status'
                value={status}
                checked={status === 'Unactive'}
                onChange={() => handleStatusChange('Unactive')}
              />
            </Col>
          </Row>
          <Row>
            <Col lg='5'>
              <p className="mr-2">Create Date</p>
            </Col>
            <Col lg='7'>
              <Flatpickr
                className='form-control date-picker'
                options={{
                  defaultDate: 'today'
                }}
              />
            </Col>
          </Row>
        <div className="d-flex align-items-center mb-1">
          
          
        </div>
        <div className="d-flex justify-content-center">
          <Button
            color='primary'
            style={{ width: "8rem" }}
            outline
            className="mr-1 ml-2 d-inline"
            onClick={(e) => { onCancel(e) }}
            >
              Cancel
          </Button>
          <Button
            color='primary'
            style={{ width: "8rem" }}
            className="mr-2 d-inline"
            onClick={handleFilterChange}
            >
              Apply
          </Button>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default FilterSelect