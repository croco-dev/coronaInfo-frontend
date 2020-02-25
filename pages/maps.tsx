import React from 'react'

const Maps = () => {
  return <></>
}

Maps.getInitialProps = ({ res }) => {
  if (res) {
    // Server
    res.writeHead(301, {
      Location: 'https://coronas.info/movement',
    })
    res.end()
  }

  return {}
}

export default Maps
