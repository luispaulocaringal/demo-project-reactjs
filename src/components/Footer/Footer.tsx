import PoweredBy from '../../assets/powered_by.png'
import './Footer.css'

function Footer () {
  return (
    <div className="row">
      <div className="col-md-12">
        <img src={PoweredBy} title="BroByte" alt="BroByte" className="mb-4 footer-img"/>
      </div>
    </div>
  )
}

export default Footer