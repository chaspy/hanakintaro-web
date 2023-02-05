import React, { useState } from 'react'
import Judge from './Judge'
import Button from './Button'

function Response() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  if (clicked) {
    return (
      <div>
        <Judge />
        <Button text="もう一度聞く" handleClick={handleClick}></Button>
      </div>
    )
  } else {
    return (
      <div>
        <Button text="今日花金？" handleClick={handleClick}></Button>
      </div>
    )
  }
}

export default Response
