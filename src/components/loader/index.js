import React, { Fragment } from "react"
import Animation from "@src/assets/images/logo/britz_waiting.gif"

const Loader = () => (
  <Fragment>
    <img src={Animation} style={{ display: "block", margin: "auto", width: '150px'}} />
  </Fragment>
)
export default Loader
