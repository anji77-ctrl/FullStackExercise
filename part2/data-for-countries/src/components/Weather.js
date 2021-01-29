import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {


    const [weather, setWeather] = useState([])

    useEffect(() => {

        axios
            .get(`http://api.weatherstack.com/current?access_key=0f06261f86fea205689ec0398d97aa66&query=${city}`)
            .then(response => {
                setWeather(response.data)
            })
           
    },[city])
    
console.log(weather);

    

    
    return (
        <div>
            { 
                city!==null ?
                <div>
                    <h2>Weather in {weather.location.name}</h2>
                    <p><strong>Temperature: </strong> {weather.current.temperature} Celcius</p>
                    <img src={weather.current.weather_icons[0]} alt='weather icon' width="100" />
                    <p><strong>wind: </strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}</p>
                </div>
                :
                null
            }
            
        </div>
    )
}

export default Weather
