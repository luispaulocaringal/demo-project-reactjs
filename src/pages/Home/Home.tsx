import Navbar from '../../components/Navbar/Navbar'
import Title from "../../components/Title/Title";
import { HelixIcon } from '../../components/Animation/LoadingIcons/LoadingIcons';

import './Home.css';

function Home () {
  return (
    <>
      <Title title="Home"/>
      <Navbar/>
      <div className="container-fluid pt-3 home">
        <HelixIcon isLoading={true} />
      </div>
    </>
  )
}

export default Home