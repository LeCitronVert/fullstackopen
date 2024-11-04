import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/';

const fetchAll = () => {
    return axios.get(`${baseUrl}all`);
}

const fetch = (searchTerm) => {
    if (!searchTerm.length) {
        const promise = new Promise((resolve) => {});

        return promise.resolve([]);
    }

    return axios.get(`${baseUrl}name/${searchTerm}`);
}

export default { fetch, fetchAll };