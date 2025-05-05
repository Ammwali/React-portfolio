import React from 'react'

const ContactDetails = ({icon, head, detail}) => {
  return (
    <>
       <div className="contact-details flex-row">
            <div className="contact-details-icon">
                {icon}
            </div>
            <div className="contact-detail">
                <h3>{head}</h3>
                <p>{detail}</p>
            </div>
           </div>
    </>
  )
}

export default ContactDetails
