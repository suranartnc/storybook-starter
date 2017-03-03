import React from 'react'
import logo from '../../images/logo.svg'

function Logo ({ width = "auto" }) {
  return (
    <div>
      <img src={logo} width={width} />
    </div>
  )
}

export default Logo