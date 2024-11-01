import React from 'react'

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
