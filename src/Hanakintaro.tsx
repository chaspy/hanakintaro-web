import logo from './assets/hanakintaro.png'
import Response from './Response'
import './Hanakintaro.css'

function Hanakintaro() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <div>
      <img src={logo} alt="hanakintaro logo"></img>
      <Response />
      <button onClick={handleClick}>今日花金？</button>
    </div>
  )
}

export default Hanakintaro
