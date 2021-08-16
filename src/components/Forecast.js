import React from 'react';
import './styles.css';
// import { Card} from 'semantic-ui-react'
import moment from 'moment';

const Forecast = ({forecast}) => (
  
    <div className='main'>
      <div className='header'>
      {forecast.map((data) => {
              return (
                <div className='sunrise-sunset'>
                    Date: {moment.unix(data.dt).format('LL')}
                    <br/>
                    Temperature: {data.temp.max}
                    <br/>
                    Humidity: {data.humidity}
                    <br/>
                    Rain: {data.rain}
                    <br/>
                    Description: {data.weather[0].description}
                    <br/>
                </div>
                
                )
          }) }
      </div>    
      </div>
   
      
)

export default Forecast;