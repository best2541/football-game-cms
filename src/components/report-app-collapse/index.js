// ** React Imports
import { useState } from "react"

// ** Third Party Components
import Proptypes from "prop-types"
import classnames from "classnames"
import { ChevronUp } from "react-feather"
import { Collapse, Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap"
import "./css/index.css"

const ReportAppCollapse = (props) => {
  // ** Props
  const {
    data,
    type,
    accordion,
    active,
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

  // ** State
  const [openCollapse, setOpenCollapse] = useState(defaultActive())

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
        recurrence = recurrenceKey ? item[recurrenceKey] : item.recurrence

      return (
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
            /*eslint-disable */
            // {...(toggle === "hover"
            //   ? {
            //       onMouseEnter: () => handleCollapseToggle(index)
            //     }
            //   : {
            //       onClick: () => handleCollapseToggle(index)
            //     })}
            /*eslint-enable */
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
      )
    })
  }

  return (
    <div
      className={classnames("collapse-icon", {
        [className]: className,
        "collapse-default": !type,
        "collapse-shadow": type === "shadow",
        "collapse-border": type === "border",
        "collapse-margin": type === "margin"
      })}
    >
      {renderData()}
    </div>
  )
}

export default ReportAppCollapse

// ** PropTypes
ReportAppCollapse.propTypes = {
  data: Proptypes.array.isRequired,
  accordion: Proptypes.bool,
  type: Proptypes.oneOf(["shadow", "border", "margin"]),
  active: Proptypes.oneOfType([Proptypes.array, Proptypes.number]),
  titleKey: Proptypes.string,
  contentKey: Proptypes.string,
  className: Proptypes.string
}

// ** Default Props
ReportAppCollapse.defaultProps = {
  active: [],
  toggle: "click"
}
