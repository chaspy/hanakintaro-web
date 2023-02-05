import React, { useState } from 'react'
import Judge from './Judge'
import Button from './Button'
import './Response.css'

function Response() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  if (clicked) {
    return (
      <div className="response">
        <Judge />
        <Button text="もう一度聞く" handleClick={handleClick}></Button>
      </div>
    )
  } else {
    return (
      <div className="response">
        <Button text="今日花金？" handleClick={handleClick}></Button>
      </div>
    )
  }
}

export default Response
