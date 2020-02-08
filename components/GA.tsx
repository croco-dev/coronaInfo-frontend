import React from 'react'
import ReactGA from 'react-ga'

const GA = (): JSX.Element => {
  return (
    <>
      {() => {
        ReactGA.initialize('UA-158027501-01')
        ReactGA.pageview(window.location.pathname + window.location.search)
      }}
    </>
  )
}

export default GA
