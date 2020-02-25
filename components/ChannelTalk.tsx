import React, { useEffect } from 'react'

declare global {
  interface Window {
    ChannelIO: any
    ChannelIOInitialized: any
    attachEvent: any
  }
}

const ChannelTalk = ({ pluginId }): JSX.Element => {
  useEffect(() => {
    if (window.ChannelIO) {
      return (window.console.error || window.console.log)('ChannelIO script included twice.')
    }
    const document = window.document
    const ch = function() {
      // eslint-disable-next-line prefer-rest-params
      ch.c(arguments)
    }
    ch.q = []
    ch.c = function(args) {
      ch.q.push(args)
    }
    window.ChannelIO = ch
    function l() {
      if (window.ChannelIOInitialized) {
        return
      }
      window.ChannelIOInitialized = true
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js'
      s.charset = 'UTF-8'
      const x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
    }
    if (document.readyState === 'complete') {
      l()
    } else if (window.attachEvent) {
      window.attachEvent('onload', l)
    } else {
      window.addEventListener('DOMContentLoaded', l, false)
      window.addEventListener('load', l, false)
    }
    window.ChannelIO('boot', {
      pluginKey: pluginId,
    })
    return () => {
      window.ChannelIO('shutdown')
    }
  }, [])
  return <></>
}

export default ChannelTalk
