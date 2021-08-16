import './App.css';
import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import {Loader} from 'semantic-ui-react';
import axios from 'axios';


const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const api = '1534fe794e6e8cd346728ce7e4d9ca65';

function App() {


const  [temperature, setTemperature] = useState(null);
const  [weather, setWeather] = useState(null);
const  [humidity, setHumidity] = useState(null);
const [forecast, setForecast] = useState([]);
const [hourly, setHourly] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  
  axios.get(`${baseUrl}?lat=3.2076514177527944&lon=101.51158585576206&exclude=&appid=${api}&units=metric`)
  .then((weatherData) => {
    setLoading(false);
    console.log(weatherData.data);
    setTemperature(weatherData.data.current.temp)
    setHumidity(weatherData.data.current.humidity)
    setForecast(weatherData.data.daily)
    setWeather(weatherData.data.current.weather[0].description)
    setHourly(weatherData.data.hourly)
  })
}, [])


  return (
    <div className="App">
      <Header/>
      {loading ? (
        <div>
        <p>Loading..Please Wait</p>
        <Loader active inline='centered' />
        </div>
      ) : (
          <div>
          <Weather
          temperature = {temperature}
          humidity = {humidity}
          weather = {weather}
          />
          <Forecast forecast = {forecast}/>
          <Hourly hourly = {hourly}/>
          </div>
      )}
      <Footer/>
      </div>
  );
}

export default App;