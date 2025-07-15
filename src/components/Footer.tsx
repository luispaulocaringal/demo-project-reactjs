import PoweredBy from '../assets/powered_by.png'
import '../css/Footer.css'

function Footer () {
  return (
    <div className="fixed-bottom p-4">
      <img src={PoweredBy}/>
    </div>
  )
}

export default Footer