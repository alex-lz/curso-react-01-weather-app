import React from 'react'

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div>
        <span>{`${humidity}% - ${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;