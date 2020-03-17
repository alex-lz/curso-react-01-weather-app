import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

// WeatherIcons => http://erikflowers.github.io/weather-icons/
const WeatherData = () => (
    <div>
        <WeatherTemperature 
         temperature={25} 
         weatherState={''}
        />
        <WeatherExtraInfo 
         humidity={80} 
         wind={"10 m/s"} 
        />
    </div>
)

export default WeatherData;