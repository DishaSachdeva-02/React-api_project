import React, { useState } from 'react'
import axios from 'axios'
import Detail from './Detail'
import './weather.css'
export default function Weather() {
    let[city,setCity]=useState("")
    let[data,setData]=useState({
      description:"",
      mintemp:0,
      maxtemp:0,
      country:"",
      humidity:0,

    })
    const id="39cc4b589a364072517b41214cef2a12"
    const changes=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`).then((response)=>{
            setData({
              description:response.data.weather[0].description,
              mintemp:response.data.main.temp_min,
              maxtemp:response.data.main.temp_max,
              country:response.data.sys.country,
              humidity:response.data.main.humidity,
            })
        })
    }
  return (
    <div className="main">
        <div className='content'>
          <input type="text" required value={city} onChange={(e)=>{
               setCity(e.target.value)
           }}/>
           
           
          <button type="submit" onClick={changes}>Get temperature</button>
        </div>
        <div className='content'>
          <Detail text={data}/>
        </div>
    </div>
  )
}
