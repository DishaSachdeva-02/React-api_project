import React from 'react'
import './detail.css'
export default function Detail({text}) {
  return (
    <div className='top'>
      <div className='cards'>
        <p>Country</p>
        <p>{text.country}</p>
      </div>
      <div className='cards'>
        <p>Minimum Temperature</p>
        <p>{text.mintemp}</p>
      </div>
      <div className='cards'>
        <p>Maximum Temperature</p>
        <p>{text.maxtemp}</p>
      </div>
      <div className='cards'>
        <p>Humidity</p>
        <p>{text.humidity}</p>
      </div>
      <div className='cards'>
        <p>Description</p>
        <p>{text.description}</p>
      </div>
    </div>
  )
}
