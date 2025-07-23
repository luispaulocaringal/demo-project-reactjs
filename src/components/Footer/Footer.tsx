import PoweredBy from '../../assets/powered_by.png'
import './Footer.css'

function Footer () {
  return (
    <div className="row">
      <div className="col-md-12">
        <img src={PoweredBy} className="mb-4"/>
      </div>
    </div>
  )
}

export default Footer