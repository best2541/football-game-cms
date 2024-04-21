// ** React Imports
import { useState } from "react"

// ** Third Party Components
import Proptypes from "prop-types"
import classnames from "classnames"
import { ChevronDown, ChevronRight, ChevronUp, Menu } from "react-feather"
import { Collapse, Card, CardHeader, CardBody, CardTitle, Row, Col, Badge } from "reactstrap"
import "./css/index.css"
import { Avatar } from "antd"

const ReportAppCollapseGroup = (props) => {
  // ** Props
  const {
    data,
    type,
    accordion,
    accordionStatus,
    active,
    activeStatus,
    toggle,
    titleKey,
    contentKey,
    downloadKey,
    totalSizeKey,
    reportTypeKey,
    statusKey,
    scheduleDateKey,
    completeDateKey,
    actionKey,
    accountKey,
    dateRangeKey,
    communicationKey,
    oneTimeKey,
    accountDtKey,
    dateRangeDtKey,
    communicationDtKey,
    oneTimeDtKey,
    recurrenceDtKey,
    recurrenceKey,
    groupStatusKey,
    className
  } = props

  /**
   ** If accordion is true then return only one active index else return an Array
   */
  const defaultActive = () => {
    if (accordion) {
      return active
    } else {
      return [...active]
    }
  }

  const defaultActiveStatus = () => {
    if (accordionStatus) {
      return activeStatus
    } else {
      return [...activeStatus]
    }
  }

  // ** State
  const [openCollapse, setOpenCollapse] = useState(defaultActive())
  const [openCollapseStatus, setOpenCollapseStatus] = useState(defaultActiveStatus())

  // ** Function to handle Collapse Toggle
  const handleCollapseToggle = (id) => {
    if (accordion) {
      if (id === openCollapse) {
        setOpenCollapse(null)
      } else {
        setOpenCollapse(id)
      }
    } else {
      const arr = openCollapse,
        index = arr.indexOf(id)
      if (arr.includes(id)) {
        arr.splice(index, 1)
        setOpenCollapse([...arr])
      } else {
        arr.push(id)
        setOpenCollapse([...arr])
      }
    }
  }

  const handleCollapseStatusToggle = (id) => {
    if (accordionStatus) {
      if (id === openCollapseStatus) {
        setOpenCollapseStatus(null)
      } else {
        setOpenCollapseStatus(id)
      }
    } else {
      const arr = openCollapseStatus,
        index = arr.indexOf(id)
      if (arr.includes(id)) {
        arr.splice(index, 1)
        setOpenCollapseStatus([...arr])
      } else {
        arr.push(id)
        setOpenCollapseStatus([...arr])
      }
    }
  }

  // ** Function to render collapse
  const renderData = () => {
    return data.map((item, index) => {
      const title = titleKey ? item[titleKey] : item.title, //name
        content = contentKey ? item[contentKey] : item.content,
        download = downloadKey ? item[downloadKey] : item.download,
        totalSize = totalSizeKey ? item[totalSizeKey] : item.totalSize,
        reportType = reportTypeKey ? item[reportTypeKey] : item.reportType,
        status = statusKey ? item[statusKey] : item.status,
        scheduleDate = scheduleDateKey ? item[scheduleDateKey] : item.scheduleDate,
        completeDate = completeDateKey ? item[completeDateKey] : item.completeDate,
        action = actionKey ? item[actionKey] : item.action,
        account = accountKey ? item[accountKey] : item.account,
        dateRange = dateRangeKey ? item[dateRangeKey] : item.dateRange,
        oneTime = oneTimeKey ? item[oneTimeKey] : item.oneTime,
        communication = communicationKey ? item[communicationKey] : item.communication,
        accountDt = accountDtKey ? item[accountDtKey] : item.accountDt,
        dateRangeDt = dateRangeDtKey ? item[dateRangeDtKey] : item.dateRangeDt,
        oneTimeDt = oneTimeDtKey ? item[oneTimeDtKey] : item.oneTimeDt,
        communicationDt = communicationDtKey ? item[communicationDtKey] : item.communicationDt,
        recurrenceDt = recurrenceDtKey ? item[recurrenceDtKey] : item.recurrenceDt,
        recurrence = recurrenceKey ? item[recurrenceKey] : item.recurrence,
        groupStatus = groupStatusKey ? item[groupStatusKey] : item.groupStatus

      console.log("status ::: ", groupStatus)
      return (
        <div className="cursor-pointer" key={index} groupStatus={groupStatus}>
          <div className="group-style" {...(toggle === "hover" ? { onMouseEnter: () => handleCollapseStatusToggle(index) } : { onClick: () => handleCollapseStatusToggle(index) })}>
            {groupStatus === "Completed" ? (
              <span>
                <Avatar className="avtar-custom-style ant-avatar-custom-complete" icon={openCollapseStatus.length > 0 ? <ChevronDown size={18} /> : <ChevronRight size={18} />} />
              </span>
            ) : null}
            {groupStatus === "Expired" ? (
              <span>
                <Avatar className="avtar-custom-style ant-avatar-custom-expried" icon={openCollapseStatus.length > 0 ? <ChevronDown size={18} /> : <ChevronRight size={18} />} />
              </span>
            ) : null}
            {groupStatus === "Recurring" ? (
              <span>
                <Avatar className="avtar-custom-style ant-avatar-custom-recurring" icon={openCollapseStatus.length > 0 ? <ChevronDown size={18} /> : <ChevronRight size={18} />} />

                {/* <Avatar className="avtar-custom-style ant-avatar-custom-recurring" icon={accordionStatus ? <ChevronDown size={18} /> : <ChevronRight size={18} />} /> */}
              </span>
            ) : null}
            {groupStatus === "Error" ? (
              <span>
                <Avatar className="avtar-custom-style ant-avatar-custom-error" icon={openCollapseStatus.length > 0 ? <ChevronDown size={18} /> : <ChevronRight size={18} />} />
              </span>
            ) : null}
            {/* <ChevronDown /> */}
            <span className="m-1">{status}</span>
            <span>1 reports</span>
          </div>
          <Collapse isOpen={accordionStatus ? openCollapseStatus === index : openCollapseStatus.includes(index)}>
            <Card
              className={classnames("app-collapse", {
                [item.className]: item.className,
                open: accordion ? openCollapse === index : openCollapse.includes(index) && type === "shadow"
              })}
              key={index}
            >
              <CardHeader
                className={classnames(
                  "align-items-center card-header-display app-collapse-custom",
                  { collapsed: true }
                  // , {
                  //   collapsed: accordion ? openCollapse !== index : openCollapse.includes(index)
                  // }
                )}
              >
                <CardTitle className="collapse-title">
                  <Row>
                    <Col className="ml-1" sx={1} md={1} xl={1}>
                      {download}
                    </Col>
                    <Col sx={1} md={1} xl={1}>
                      {totalSize}
                    </Col>
                    <Col sx={2} md={2} xl={2}>
                      {title}
                    </Col>
                    <Col sx={2} md={2} xl={2}>
                      {reportType}
                    </Col>
                    <Col sx={1} md={1} xl={1}>
                      {status}
                    </Col>
                    <Col sx={2} md={2} xl={2}>
                      {scheduleDate}
                    </Col>
                    <Col sx={2} md={2} xl={2}>
                      {completeDate}
                    </Col>
                    <Col>
                      {action}{" "}
                      <ChevronUp
                        size={14}
                        //  className="text-primary mr-50 cursor-pointer"
                        className="text-primary mr-50 cursor-pointer"
                        /*eslint-disable */
                        {...(toggle === "hover"
                          ? {
                              onMouseEnter: () => handleCollapseToggle(index)
                            }
                          : {
                              onClick: () => handleCollapseToggle(index)
                            })}
                      />
                    </Col>
                  </Row>
                </CardTitle>
                {/* <ChevronUp size={14} /> */}
              </CardHeader>
              <Collapse isOpen={accordion ? openCollapse === index : openCollapse.includes(index)}>
                <CardBody>
                  <div style={{ backgroundColor: "#e8ecef", borderRadius: "5px", margin: "0px 5px 0px 5px" }}>
                    <span className="card-dt-style">
                      <Row>
                        <Col>
                          <div>{account}</div>
                          <div>{accountDt}</div>
                        </Col>
                        <Col>
                          <div>{communication ? communication : dateRange}</div>
                          <div>{communicationDt ? communicationDt : dateRangeDt}</div>
                        </Col>
                        <Col>
                          <div>{communication ? dateRange : oneTime ? oneTime : recurrence}</div>
                          <div>{communicationDt ? dateRangeDt : oneTimeDt ? oneTimeDt : recurrenceDt}</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div>{communication || recurrence ? oneTime : null}</div>
                          <div>{communicationDt || recurrenceDt ? oneTimeDt : null}</div>
                        </Col>
                      </Row>
                    </span>
                  </div>
                </CardBody>
              </Collapse>
            </Card>
          </Collapse>
        </div>
      )
    })
  }

  return (
    <div
      className={classnames("collapse-icon", {
        [className]: className,
        "collapse-default": type,
        "collapse-shadow": type === "shadow",
        "collapse-border": type === "border",
        "collapse-margin": type === "margin"
      })}
    >
      {renderData()}
    </div>
  )
}

export default ReportAppCollapseGroup

// ** PropTypes
ReportAppCollapseGroup.propTypes = {
  data: Proptypes.array.isRequired,
  accordion: Proptypes.bool,
  accordionStatus: Proptypes.bool,
  type: Proptypes.oneOf(["shadow", "border", "margin"]),
  active: Proptypes.oneOfType([Proptypes.array, Proptypes.number]),
  activeStatus: Proptypes.oneOfType([Proptypes.array, Proptypes.number]),
  titleKey: Proptypes.string,
  contentKey: Proptypes.string,
  className: Proptypes.string
}

// ** Default Props
ReportAppCollapseGroup.defaultProps = {
  active: [],
  activeStatus: [],
  toggle: "click"
}
