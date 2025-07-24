import { HelixIcon } from '../../components/Animation/LoadingIcons/LoadingIcons';

import "./DashoboardModule.css";

function DashboardModule({ data, className, component = "none" } : { data:any, className:any, component:any }) {
  return (
    <div className={className}>
      <div className="card w-100 dashboard-card mb-4 shadow">
        <div className="card-header">
          {data}
        </div>
        <div className="card-body">
          {component === "none" ? <HelixIcon isLoading={true} /> : component}
        </div>
      </div>
    </div>
  )
}

export default DashboardModule;