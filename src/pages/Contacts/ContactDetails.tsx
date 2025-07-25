import { Link, useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";

import contact from '../../assets/contact.svg';

function ContactDetails() {
  const params = useParams();

  const buttons = <>
    <button className="btn btn-primary btn-sm me-2">Save</button>
    <button className="btn btn-secondary btn-sm me-2">Save as Draft</button>
    <Link to=".." className="btn btn-danger btn-sm me-2">Cancel</Link>
  </>

  return (
    <>
      <PageHeader title="Edit Contact" icon={contact} buttons={buttons}/>
      
    </>
  )
}

export default ContactDetails;