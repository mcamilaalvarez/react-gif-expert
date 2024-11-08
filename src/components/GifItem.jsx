import React from 'react'
import PropTypes from 'prop-types'
export const GifItem = ({title, url}) => {
  return (
    <div className='card-title'>
       <div className='card'>
        <img src={url} alt={title}/>
    </div>
    <p>{title}</p>

    </div>
   
  )
}

GifItem.propTypes={
  title: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}