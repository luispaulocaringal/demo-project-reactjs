import Table from "../../components/Table/Table";
import PageHeader from "../../components/PageHeader/PageHeader";

function Contact() {
  const data = [
    [ 'Tiger Nixon', 'System Architect' ],
    [ 'Garrett Winters', 'Accountant' ],
  ]

  let buttons = <>
    <button className="btn btn-primary btn-sm">Add Contact</button>
  </>

  return(
    <>
      <PageHeader title="My Contacts" buttons={buttons}/>
      <div className="row mb-2">
        <div className="col-md-12">
          <Table data={ data } header={
            <>
              <th>Name</th>
              <th>Position</th>
            </>
          }/>
        </div>
      </div>
    </>
  )
}

export default Contact;