import { useState } from "react"
import { InputGroup, Input, UncontrolledDropdown, 
  DropdownMenu, DropdownItem, DropdownToggle, InputGroupText, InputGroupAddon
} from 'reactstrap'
import { Search, ChevronDown, ChevronUp, X } from "react-feather"
import "./css/index.scss"

const FilterTable = (props) => {
  const { data, handleSearch } = props
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prevState => !prevState)
  const [selectFilter, setSelectFilter] = useState(null)
  const [search, setSearch] = useState("")

  const onFilterSearch = (e) => {
    setSelectFilter(e)
  }

  const handleClear = () => {
    setSearch("")
  }

  return (
    <div className="group-filter">
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
          <div className="dropdown-filter">
            <div>{selectFilter || "Filter"}</div>
            {open ? <ChevronUp size={14} style={{marginTop: "-3px", marginLeft: "5px"}}/> : <ChevronDown size={14} style={{marginTop: "-3px", marginLeft: "5px"}}/> }
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <div style={{padding: "5px 15px", fontWeight: "bold"}}>Search by</div>
          {data?.map(item => (
            <DropdownItem className='w-100' key={item} onClick={e => onFilterSearch(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <InputGroup>
        <InputGroupAddon addonType='prepend' onClick={handleSearch}>
          <InputGroupText>
            <Search className='text-muted' size={14} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          value={search}
          className="search-group-text pl-0 pr-0" 
          placeholder='Search'
          onChange={e => setSearch(e.target.value)}
        />
        <InputGroupAddon addonType='append' className="cursor-pointer" onClick={handleClear}>
          <InputGroupText>
            <X className='text-muted' size={14} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default FilterTable