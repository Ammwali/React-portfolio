import React from 'react'

const CubeCards = ({svg, heading, para}) => {
  return (
    <>
     {svg}
  <h3 className='cube-head'>{heading}</h3>
  <p className='cube-para'>{para}</p>
      
    </>
  )
}

export default CubeCards
