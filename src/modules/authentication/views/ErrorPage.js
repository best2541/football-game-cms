import React, { Fragment, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { CardImg, Label } from "reactstrap"
import "../authentication.scoped.scss"

const ErrorPage = () => {

  const history = useHistory()
  console.log("helooooooo")

  useEffect(() => {
    console.log("errorPage")
  }, [])

  return (
    <Fragment>
        <div className="error-page-background">
          <Label>Error</Label>
          <CardImg src={require('@src/assets/images/error/error.png').default} className="error-img" />
        </div>
    </Fragment>
  )
}

export default ErrorPage