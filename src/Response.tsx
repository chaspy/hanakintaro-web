import React, { useState } from 'react'

function Response() {
  const [clicked, setClicked] = useState(false)

  if (clicked) {
    return <p>今日は花金！</p>
  } else {
    return (
      <div>
        <button onClick={() => setClicked(true)}>今日花金？</button>
      </div>
    )
  }
}

export default Response
