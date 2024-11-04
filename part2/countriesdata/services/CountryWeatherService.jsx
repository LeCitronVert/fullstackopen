import axios from 'axios';


const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const apiUrl = 'http://api.weatherapi.com/v1/current.json';

const fetch = (country) => {
    return axios.get(makeUrl(country))
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            return false;
        });
}

const makeUrl = (country) => {
    return `${apiUrl}?key=${apiKey}&q=${country.capital[0]}&aqi=no`;
}

export default { fetch };