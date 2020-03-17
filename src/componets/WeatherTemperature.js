import React from 'react'


const icons = {
    sunny: 'wi-day-sunny',
    fog: 'wi-fog',
    thunderstorm: 'wi-thunderstorm'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState]

    if (icon)
       return <i class={`wi wi-${weatherState}`}></i>
    else
       return <i class={'wi-day-sunny'}></i>
}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>

);

export default WeatherTemperature;