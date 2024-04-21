import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { getRotationDegrees } from "../../utility/Utils"
import { RotationContainer } from "./styles"
import {
  Button
} from 'reactstrap'
import '@styles/base/pages/page-spinninggame.scss'
import a from "@src/assets/images/banner/item_in_wheel_logo.png"
import aa from "@src/assets/images/banner/reward_show1.png"
import aa2 from "@src/assets/images/banner/reward_show2.png"
import aa3 from "@src/assets/images/banner/reward_show3.png"
import aa4 from "@src/assets/images/banner/reward_show4.png"
import useJwt from '@src/helper/auth/jwt/jwtDefaultConfig'

const gameEndPoint = useJwt.gameEndPoint

const STARTED_SPINNING = "started-spinning"
const START_SPINNING_TIME = 1000
const CONTINUE_SPINNING_TIME = 0
const STOP_SPINNING_TIME = 6000


const images = [aa, aa2, aa3, aa4]
export const Wheel = ({ intervalRef, imageSpin, setImageSpin, currentImage, setCurrentImage, setFade, fade, mustStartSpinning, prizeNumber, onClick = () => null, onStopSpinning = () => null }) => {
  const { wheelImgDisplay, wheelCenterImgDisplay, btnImgDisplay } = useSelector((state) => state.createGame.imgDisplay)
  const { wheelDetailImgDisplay, wheelCenterDetailImgDisplay, btnDetailImgDisplay } = useSelector((state) => state.createGame.detailImgDisplay)

  // const [fade, setFade] = useState({
  //   fade: 'img-fluid rewardshow-roulette'
  // })
  // const [currentImage, setCurrentImage] = useState(a)
  // const [imageSpin, setImageSpin] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timeout = setInterval(() => {
      if (fade.fade === 'img-fluid fade-in rewardshow-roulette-play') {
        setFade({
          fade: 'img-fluid fade-out rewardshow-roulette-play'
        })
      } else if (fade.fade === 'img-fluid fade-out rewardshow-roulette-play') {
        setFade({
          fade: 'img-fluid fade-in rewardshow-roulette-play'
        })
      }
    }, 150)
    return () => clearInterval(timeout)
  }, [fade])
  const setImage = () => {
    onClick()
    setFade({
      fade: 'img-fluid fade-in rewardshow-roulette-play'
    })
    setImageSpin(true)
    if (imageSpin === false) {
      const imagetimeout = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)])
      }, 500)
      // return () => clearInterval(imagetimeout)
      intervalRef.current = imagetimeout

      return () => clearInterval(imagetimeout)
    }

  }
  const [startRotationDegrees, setStartRotationDegrees] = useState(0)
  const [finalRotationDegrees, setFinalRotationDegrees] = useState(0)
  const [hasStartedSpinning, setHasStartedSpinning] = useState(false)
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false)
  const [isCurrentlySpinning, setIsCurrentlySpinning] = useState(false)
  const mustStopSpinning = useRef(false)
  const startSpinning = () => {
    setHasStartedSpinning(true)
    setHasStoppedSpinning(false)
    setImageSpin(true)
    mustStopSpinning.current = true
    setTimeout(() => {
      if (mustStopSpinning.current) {
        mustStopSpinning.current = false
        setHasStartedSpinning(false)
        setHasStoppedSpinning(true)
        onStopSpinning()
      }
    }, START_SPINNING_TIME + CONTINUE_SPINNING_TIME + STOP_SPINNING_TIME - 300)
  }
  useEffect(() => {
    if (mustStartSpinning && !isCurrentlySpinning) {
      setIsCurrentlySpinning(true)
      startSpinning()
      const finalRotationDegreesCalculated = getRotationDegrees(prizeNumber, 4)
      setFinalRotationDegrees(finalRotationDegreesCalculated)
    }
  }, [mustStartSpinning])
  useEffect(() => {
    if (hasStoppedSpinning) {
      setIsCurrentlySpinning(false)
      setStartRotationDegrees(finalRotationDegrees)
    }
  }, [hasStoppedSpinning])
  const getRouletteClass = () => {
    if (hasStartedSpinning) {
      return STARTED_SPINNING
    }
    return ""
  }
  return (
    <>
      <RotationContainer
        className={`${getRouletteClass()} wheel-img-display`}
        startSpinningTime={START_SPINNING_TIME}
        continueSpinningTime={CONTINUE_SPINNING_TIME}
        stopSpinningTime={STOP_SPINNING_TIME}
        startRotationDegrees={startRotationDegrees}
        finalRotationDegrees={finalRotationDegrees}
      >
        {wheelImgDisplay || wheelDetailImgDisplay ? <img
          className="img-fluid"
          src={wheelImgDisplay ? wheelImgDisplay : `${gameEndPoint}/File/Getfile/${wheelDetailImgDisplay}`}
          alt="wheel"
        /> : null}
      </RotationContainer>
      {wheelCenterImgDisplay || wheelCenterDetailImgDisplay ? <img
        className={`${fade.fade} wheel-center-display`}
        src={wheelCenterImgDisplay ? wheelCenterImgDisplay : `${gameEndPoint}/File/Getfile/${wheelCenterDetailImgDisplay}`}
        alt="marker"
      /> : null}
      <div>
        {btnImgDisplay || btnDetailImgDisplay ? <img
          className="img-fluid click-spin-btn"
          src={btnImgDisplay ? btnImgDisplay : `${gameEndPoint}/File/Getfile/${btnDetailImgDisplay}`}
          alt="Spin Here!"
          onClick={() => setImage()}
          style={{
            position: "absolute",
            cursor: "pointer",
            top: "700px",
            margin: "0 auto",
            zIndex: 3,
            bottom: "0%",
            left: '15%',
            maxWidth: '250px'
          }}
        /> : null}
      </div>
    </>
  )
}