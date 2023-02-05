import React, { useState } from 'react'
import Judge from './Judge'

function Response() {
  const [clicked, setClicked] = useState(false)

  if (clicked) {
    return (
      <div>
        <Judge />
        <button onClick={() => setClicked(false)}>もう一度聞く</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => setClicked(true)}>今日花金？</button>
      </div>
    )
  }
}

export default Response
