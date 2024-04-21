import React, { useState, useContext } from "react"
import {
  Form,
  FormGroup,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import ManageAddFields from "./add-fieds-manage"
import AddFields from "./add-field"
import ShowHideColumns from "./show-hide"

const AddColumns = (props) => {
  const { selectType } = props
  const [activeTab, setActiveTab] = useState("1")

  return (
    <div>
      <Form>
        {selectType ? (
          <FormGroup>
            <ManageAddFields props={props} />
          </FormGroup>
        ) : (
          <div style={{ width: "250px" }}>
            <Nav
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "unset"
              }}
              tabs
            >
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => setActiveTab("1")}
                >
                  <Label>Show/Hide</Label>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => setActiveTab("2")}
                >
                  <Label>Add Field</Label>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ShowHideColumns props={props} />
              </TabPane>
              <TabPane tabId="2">
                <AddFields props={props} />
              </TabPane>
            </TabContent>
          </div>
        )}
      </Form>
    </div>
  )
}

export default AddColumns
