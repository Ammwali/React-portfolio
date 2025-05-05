import React from 'react'

const AboutCardsDetails = ({aboutHead, aboutSubHead, university, icon}) => {
  return (
    <>
      <i className={icon}></i>
      <div className="about-detail-import-con">
      <h4 className='about-head'>{aboutHead}</h4>
      <h3 className='about-sub-head'>{aboutSubHead}</h3>
      <p className='uni' style={university? {display:'block'}:{display:'none'}}>{university}</p>
      </div>
    </>
  )
}

export default AboutCardsDetails
