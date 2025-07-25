import './PageHeader.css';

interface PageHeaderProps {
  title:string;
  icon:any;
  buttons?: any;
  misc?: any;
}

function PageHeader({ title, icon, buttons = "", misc = "" } : PageHeaderProps) {
  return (
    <div className="row page-header mb-4">
      <div className="col-lg-6"> 
        <div className="d-flex float-start">
          <h4 className="my-auto me-3"><img src={icon} height={30}/> { title }</h4>
          { buttons }
        </div>
      </div>
      <div className="col-lg-6"> 
        <div className="d-flex float-end">
          { misc }
        </div>
      </div>
    </div>
  )
}

export default PageHeader;