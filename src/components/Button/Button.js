import React from 'react'

function Button ({ text = 'Submit' }) {
  return (
    <button>
      {text}
    </button>
  )
}

export default Button