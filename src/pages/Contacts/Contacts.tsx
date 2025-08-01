import { useLoaderData } from "react-router-dom";

import Table from "../../components/Table/Table";
import PageHeader from "../../components/PageHeader/PageHeader";

import contact from '../../assets/contact.svg';

function Contacts() {
  const { data } = useLoaderData();
  
  let buttons = <>
    <button className="btn btn-primary btn-sm">Add Contact</button>
  </>

  return(
    <>
      <PageHeader title="My Contacts" icon={contact} buttons={buttons}/>
      <div className="row mb-2">
        <div className="col-md-12">
          <Table data={ data } header={
            <>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
            </>
          }/>
        </div>
      </div>
    </>
  )
}

export function loader() {
  // Here you would typically fetch the contacts from your backend
  // For now, we will just return a dummy response
  const data = [
    [ 1, 'Tiger Nixon', 'System Architect' ],
    [ 2, 'Garrett Winters', 'Accountant' ],
  ]

  return { data };
}

export default Contacts;