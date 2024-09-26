"use client"
import anime from 'animejs'
import { useEffect } from 'react'

export default function Component() {
    useEffect(() => {
      move()
    }, [])
      function move() {
        anime({
          targets: "#box-animation",
          // translateX: 200,
          translateY: 200,
          opacity: 10,
          rotate: 360,
          borderRadius: ['0%', '50%'],
          // easing: 'easeInOutQuad',
          duration: 5000,
        })
      }

    return (
        <>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,320L34.3,282.7C68.6,245,137,171,206,165.3C274.3,160,343,224,411,250.7C480,277,549,267,617,234.7C685.7,203,754,149,823,138.7C891.4,128,960,160,1029,165.3C1097.1,171,1166,149,1234,160C1302.9,171,1371,213,1406,234.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
          <svg
            id="wave"
            style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
            viewBox="0 0 1440 220"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(14.031, 13.824, 13.757, 1)" offset="0%" />
                <stop stopColor="rgba(121.04, 121.04, 121.04, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: 'translate(0, 0px)', opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,198L180,154L360,0L540,88L720,198L900,198L1080,110L1260,176L1440,176L1620,22L1800,154L1980,44L2160,176L2340,176L2520,44L2700,66L2880,22L3060,198L3240,22L3420,176L3600,110L3780,44L3960,132L4140,44L4320,110L4320,220L4140,220L3960,220L3780,220L3600,220L3420,220L3240,220L3060,220L2880,220L2700,220L2520,220L2340,220L2160,220L1980,220L1800,220L1620,220L1440,220L1260,220L1080,220L900,220L720,220L540,220L360,220L180,220L0,220Z"
            />
          </svg> */}
          <div id="box-animation" onClick={() => move()}className=" flex flex-row bg-slate-600 w-11">tae</div>
        </>
    )
}