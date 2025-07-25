import Table from "../../components/Table/Table";
import PageHeader from "../../components/PageHeader/PageHeader";

import contact from '../../assets/contact.svg';

function Contacts() {
  const data = [
    [ 1, 'Tiger Nixon', 'System Architect' ],
    [ 2, 'Garrett Winters', 'Accountant' ],
  ]

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

export default Contacts;