import { Fragment, useEffect, useState } from "react"
import NavbarTitle from "@src/components/navbarTitle"
import { useDispatch, useSelector } from "react-redux"
import { requestLoading } from "@src/redux/actions/main"
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap"
import { Button, Tooltip, Input } from 'antd'
import { axiosInstance } from "../../../helper/api"
import { groupBy } from '../../../helper/groupby'
import { ArrowDown, ArrowUp } from "react-feather"


const Home = () => {
  const [datas, setDatas] = useState({})
  const [records, setRecords] = useState([])
  const { loading } = useSelector((state) => state.homeDetail)

  const load = () => {
    axiosInstance.get(`/setting/get`)
      .then(result => {
        if (result.data.hard_setting.length > 0) {
          setDatas(result.data.hard_setting[0])

        }
      })
  }
  useEffect(() => {
    load()
  }, [])

  const inputChange = (event) => {
    const { name, value } = event.target
    setDatas({
      ...datas,
      [name]: value
    })
  }
  const timeChange = (a) => {
    if (a === '+') {
      setDatas({
        ...datas,
        time_limit_level: datas.time_limit_level + 1
      })
    } else {
      setDatas({
        ...datas,
        time_limit_level: (datas.time_limit_level > 0 ? datas.time_limit_level : 1) - 1
      })
    }
  }

  const saveClick = () => {
    axiosInstance.post('/setting/save', datas)
      .then(result => {
        alert('saved')
      })
      .catch(() => {
        alert('ERROR')
      })
  }
  return (
    <Fragment>
      <NavbarTitle
        breadCrumbTitle={"Dashboard"}
        breadCrumbActive={""}
        className={"col-md-2 col-12"}
      ></NavbarTitle>
      <br />
      <Row>
        <Col lg='12' className='mb-2'>
          <Card style={{ height: '100%' }}>
            <CardHeader>
              <h4 className="m-0">Setting</h4>
            </CardHeader>
            <CardBody>
              <hr />
              <h3>ความเร็วลูกบอล:</h3>
              <Tooltip placement="left" title='ใส่เป็นตัวเลขหรือทศนิยม'>
                <h1><Input name='level' size="large" type="number" value={datas.level} onChange={inputChange} /></h1>
              </Tooltip>
              <h3 className="text-primary">เวลา: {Math.floor(datas.time_limit_level / 2)}:{datas.time_limit_level % 2 === 0 ? '00' : '30'}</h3>
              <Button type="scondary" shape="circle" onClick={() => timeChange('+')}><ArrowUp /></Button>
              <Button type="scondary" shape="circle" danger onClick={() => timeChange()}><ArrowDown /></Button>
            </CardBody>
            <CardFooter>
              <Button onClick={saveClick} danger>Save</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Home