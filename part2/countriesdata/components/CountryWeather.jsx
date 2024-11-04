import {useEffect, useState} from "react";
import CountryWeatherService from "../services/CountryWeatherService.jsx";

const CountryWeather = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        CountryWeatherService.fetch(country)
            .then(data => setWeather(data))
            .catch(error => console.error(error))
        ;
    }, []);

    if (null === weather) {
        return (
            <div>Loading Weather ...</div>
        )
    }

    if (false === weather) {
        return (
            <div>Weather data not available</div>
        )
    }

    return (
        <ul>
            <li>Temp : {weather.current.temp_c}°C</li>
            <li>Wind : {weather.current.wind_kph} kph</li>
            <li><img src={weather.current.condition.icon} alt={weather.current.condition.text} /></li>
        </ul>
    )
}

export default CountryWeather;