import React, { useState, useContext, useEffect, useCallback } from "react"
import { Input } from "reactstrap"
import { Check } from "react-feather"
import _ from "lodash"

import "./css/index.css"

const ShowHideColumns = (props) => {
  const {
    columns,
    columnsMaster,
    columnsExtra,
    columnsExtraMaster,
    setColumns,
    setColumnsMaster,
    setColumnsExtraMaster,
    searchItem,
    setSearchItem
  } = props.props
  const [keys, setKeys] = useState([])
  const [keysFields, setKeysFields] = useState([])
  const [loading, setLoading] = useState(false)
  const [val, setVal] = useState('')
  // console.log("searchItem:::", val)
  useEffect(() => {
    const arrKey =
      columns &&
      columns.map((item) => {
        return item.selector
      })
    setKeys(arrKey)
  }, [columns])

  const handleSearch = (e) => {
    const value = e.target.value
    console.log("value1:::", value)
    if (value !== "") {
      console.log("value is:::", value)
      setVal(value)

      // const searchTerm1 = columnsMaster && columnsMaster.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      // console.log("value is searchTerm xxx:::", searchTerm1)

      // setColumnsMaster(searchTerm1)
      // console.log("value is searchTerm1:::", searchTerm1)
      // renderFields(searchTerm1)
      // callColumns(value)
      // const searchTerm2 = columnsExtraMaster && columnsExtraMaster.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      // setColumnsExtraMaster(searchTerm2)
    } else {
      // renderFields(columnsMaster, '')
      // setColumnsMaster(columnsMaster)
      // setColumnsExtraMaster(columnsExtraMaster)
    }
  }

  // useEffect(() => {
  //   if (val !== '') {
  //     const searchTerm1 = columnsMaster && columnsMaster.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()))
  //     setColumnsMaster(searchTerm1)
  //     // const searchTerm2 = columnsExtraMaster && columnsExtraMaster.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()))
  //     // setColumnsExtraMaster(searchTerm2)
  //   } else {
  //     setColumnsMaster(columnsMaster)
  //     // setColumnsExtraMaster(columnsExtraMaster)
  //   }
  // }, [val])

  const handleSelectKey = (value) => {
    const thiskey = [...keys]
    const thisColumns = [...columns]
    const findIndexKey = _.findIndex(thiskey, (ele) => {
      return ele === value.selector
    })

    if (findIndexKey > -1) {
      thiskey.splice(findIndexKey, 1)
      thisColumns.splice(findIndexKey, 1)
    } else {
      thiskey.push(value.selector)
      thisColumns.push(value)
    }

    setKeys(thiskey)
    setColumns(thisColumns)
  }

  const handleSelectKeyFields = (value) => {
    const thiskey = [...keys]
    const thisColumns = [...columns]

    const findIndexKey = _.findIndex(thiskey, (ele) => {
      return ele === value.selector
    })

    if (findIndexKey > -1) {
      thiskey.splice(findIndexKey, 1)
      thisColumns.splice(findIndexKey, 1)
    } else {
      thiskey.push(value.selector)
      thisColumns.push(value)
    }
    setKeysFields(thiskey)
    setColumns(thisColumns)
  }

  const renderItem = (item, findIndexKey) => {
    return (
      <p
        key={item.selector}
        className="value-fields"
        onClick={() => handleSelectKey(item)}
      >
        {item.name}{" "}
        {findIndexKey > -1 ? (
          <Check size={16} style={{ float: "right" }} />
        ) : null}
      </p>
    )
  }

  const renderFields =
    columnsMaster &&
    columnsMaster.map((item, index) => {
      const findIndexKey = _.findIndex(keys, (ele) => {
        return ele === item.selector
      })
      return renderItem(item, findIndexKey)
    })

  const renderFieldsInList =
    columnsExtraMaster &&
    columnsExtraMaster.map((item, index) => {
      const findIndexKey = _.findIndex(keys, (ele) => {
        return ele === item.selector
      })
      return renderItem(item, findIndexKey)
    })

  return (
    <div className="padding-add-column">
      <div className="mr-input-add-column">
        <Input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          value={val}
          onChange={handleSearch}
        />
      </div>
      <div>
        <p className="title-fields">SHOW FIELDS</p>
        {renderFields}
      </div>
      <div>
        <p className="title-fields">FIELDS IN THE LIST</p>
        {renderFieldsInList}
      </div>
    </div>
  )
}

export default ShowHideColumns
