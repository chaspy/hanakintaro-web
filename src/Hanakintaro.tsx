import logo from './assets/hanakintaro.png'
import Response from './Response'
import './Hanakintaro.css'

function Hanakintaro() {
  return (
    <div className="hanakintaro">
      <img src={logo} alt="hanakintaro logo"></img>
      <Response />
    </div>
  )
}

export default Hanakintaro
