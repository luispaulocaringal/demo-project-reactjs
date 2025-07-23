import Table from "../../components/Table/Table";

function Contact() {
  const data = [
    [ 'Tiger Nixon', 'System Architect' ],
    [ 'Garrett Winters', 'Accountant' ],
  ]

  return(
    <>
      <div className="row mb-2">
        <div className="col-md-12">
          <h4 className="d-inline align-middle">My Contacts</h4>
          <button className="btn btn-primary d-inline mx-3">Add</button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <Table data={ data } />
        </div>
      </div>
    </>
  )
}

export default Contact;