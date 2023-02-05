import logo from './assets/hanakintaro.png'
import Response from './Response'
import './Hanakintaro.css'

function Hanakintaro() {
  return (
    <div>
      <img src={logo} alt="hanakintaro logo"></img>
      <Response />
      <button>今日花金？</button>
    </div>
  )
}

export default Hanakintaro
