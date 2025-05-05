import React from 'react'

const HeadAndDetails = ({shortHead, mainHead, spantext, para, mainHead2, smallFont}) => {
  return (
    <>
      <div className="hero1-head-and-details">
            <span className='short-heading'>{shortHead}</span>
            <h1>{mainHead}<span className='color-text'>{spantext}</span>{mainHead2}</h1>
            <div className="bb-line"></div>
            <p>{para}</p>
        </div>
    </>
  )
}

export default HeadAndDetails
