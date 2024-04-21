import { useState } from "react"
import { InputGroup, Input, InputGroupText, InputGroupAddon
} from 'reactstrap'
import { Search, X } from "react-feather"
import "./css/index.scss"

const FilterSearch = (props) => {
  const { data, handleSearch } = props
  const [search, setSearch] = useState("")


  const handleClear = () => {
    setSearch("")
  }

  return (
    <div className="group-filter-search">
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

export default FilterSearch