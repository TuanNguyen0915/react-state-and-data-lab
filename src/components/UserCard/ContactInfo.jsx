const ContactInfo = (props) => {
  return ( 
    <>
    <h3>{props.user.company.name}</h3>
    <h5 className="company-catchPhrase">"{props.user.company.catchPhrase}"</h5>
    <div className="personal-info">
      <p>{props.user.email}</p>
      <p>{props.user.phone}</p>
      <br />
      <p>{props.user.address.street}</p>
      <p>{props.user.address.suite}</p>
      <p>{props.user.address.city} {props.user.address.zipcode}</p>
      <div className="btn-website">
      <button>
        Visit Website
      </button>
      </div>
      
    </div>
    </>
   )
}
 
export default ContactInfo
