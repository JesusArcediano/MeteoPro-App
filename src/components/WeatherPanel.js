import { useState } from 'react';
import { Form } from './Form';
import { Card } from './Card';

export const WeatherPanel = () => {

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=1a843219d52e9225d0b904fc0cd34428&lang=es`;

    let cityUrl = "&q=";

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=1a843219d52e9225d0b904fc0cd34428&lang=es`;

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');


    const getLocation = async(loc) => {
      setLoading(true);
      setLocation(loc);
      
      try {
          //weather
          urlWeather = urlWeather + cityUrl + loc;
  
          const resp = await fetch(urlWeather);
          if (!resp.ok) throw new Error('jesús tío, se ha producido un weather error');
          const weatherData = await resp.json();
          console.log(weatherData);
          setWeather(weatherData);
          
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShow(false);
      }

      try {
        //forecast
        urlForecast = urlForecast + cityUrl + loc;

        const resp = await fetch(urlForecast);
        if (!resp.ok) throw new Error('jesús tío, se ha producido un forecast error');
        const forecastData = await resp.json();
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
          
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShow(false);
      }

    }


  return (
    <>
      <Form
        newLocation = { getLocation }
      />
      <Card
        showData = {show}
        loadingData = {loading}
        weather = {weather}
        forecast = {forecast}
      />
    </>
  )
}
