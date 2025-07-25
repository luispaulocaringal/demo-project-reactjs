import { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import DashboardModule from '../../components/Dashboard/DashboardModule';
import Calendar from '../../components/Calendar/Calendar';

import { getRequest } from '../../utils/api';

import dashboard from '../../assets/dashboard.svg';

import './Home.css';

const weatherUrl:string = `${import.meta.env.VITE_WEATHER_API_URL}?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Manila`;

function Home () {
  const [weatherData, setWeatherData] = useState({
    icon: "",
    text: ""
  });

  /** ----------------------- Need to move to a reducer ----------------------- */
  // Get weather data
  useEffect(() => {
    const response = getRequest(weatherUrl);

    response.then(response => {
      setWeatherData({
        icon: response.data.current.condition.icon, 
        text: response.data.current.condition.text
      })
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
  }, [])
  /** ----------------------- Need to move to a reducer ----------------------- */
  
  const modules = [
    { module: "Calendar", className: "col-md-3", component: <Calendar /> },
    { module: "Appointments", className: "col-md-5" },
    { module: "Notifications", className: "col-md-4" },
    { module: "Announcements", className: "col-md-5" },
    { module: "Feed", className: "col-md-4" },
    { module: "Quick Links", className: "col-md-3" }
  ]

  let misc = <>
    <img src={weatherData.icon} alt="Weather Icon" className="my-auto" height={30}/>
    <p className="ps-1 my-auto text-capitalize">{weatherData.text}</p>
  </>

  return (
    <>
      <PageHeader title="My Dashboard" icon={dashboard} misc={misc}/>
      <div className="row">
        { modules.map(({ module, className, component }, key) => <DashboardModule data={module} key={key} className={className} component={component}/>) }
      </div>
    </>
  )
}

export default Home