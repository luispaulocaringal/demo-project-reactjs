import DashboardModule from '../../components/Dashboard/DashboardModule';
import Calendar from '../../components/Calendar/Calendar';

import './Home.css';

function Home () {
  const modules = [
    { module: "Calendar", className: "col-md-3", component: <Calendar /> },
    { module: "Appointments", className: "col-md-5" },
    { module: "Notifications", className: "col-md-4" },
    { module: "Announcements", className: "col-md-5" },
    { module: "Feed", className: "col-md-4" },
    { module: "Quick Links", className: "col-md-3" }
  ]

  return (
    <div className="row">
      { modules.map(({ module, className, component }, key) => <DashboardModule data={module} key={key} className={className} component={component}/>) }
    </div>
  )
}

export default Home