import React from 'react';
import './styles.css';

const Hourly = ({hourly}) => (
  
    <div className='main'>
      <div className='header'>
      {hourly.slice(0,4)
             .map((data) => {
              return (
                <div className='sunrise-sunset'>
                    <ul className="row"> 
                        <div>
                        Humidity: {data.humidity}
                        </div>
				            </ul>
                </div>
                )
          }) }
      </div>    
      </div>   
)

export default Hourly;