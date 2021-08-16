import React from 'react';
import './styles.css';
import moment from 'moment';

const Weather= ({temperature, humidity,weather}) => (
  
    <div className='main'>
      <div className='header'>
      <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
          <div>Temperature: {temperature} °C</div>
          <br/>
          <div>Humidity: {humidity}%</div>
          <div>{weather}</div>
      </div>    
      </div>
)

export default Weather;