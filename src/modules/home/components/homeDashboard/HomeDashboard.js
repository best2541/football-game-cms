import { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { requestLoading } from "@src/redux/actions/main"
import LoadingSpinner from "@src/components/spinner/LoadingSpinner"

const HomeDashboard = ({ tooltipShadow, gridLineColor, labelColor, successColorShade }) => {
  const { data, loading } = useSelector((state) => state.homeDashboard)
  const dispatch = useDispatch()
  const options = {
    elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'bottom'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: false
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: tooltipShadow,
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#000'
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            color: gridLineColor,
            zeroLineColor: gridLineColor
          },
          scaleLabel: {
            display: false
          },
          ticks: {
            fontColor: labelColor
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: gridLineColor,
            zeroLineColor: gridLineColor
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: labelColor
          }
        }
      ]
    }
  }

  useEffect(() => {
    dispatch(requestLoading(loading))
  }, [loading])

  return (
    <Fragment>
      <Card>
        <LoadingSpinner />
        <CardHeader>
          <CardTitle tag='h4'>Delivered Statistics</CardTitle>
        </CardHeader>
        <CardBody>
          <div style={{ height: '400px' }}>
            {data !== undefined ? <Bar data={data} options={options} height={400} /> : null}
            
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default HomeDashboard