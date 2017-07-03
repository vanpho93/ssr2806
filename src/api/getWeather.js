const URL = 'http://api.openweathermap.org/data/2.5/find?q=Saigon&units=metric&appid=01cc37655736835b0b75f2b395737694';

const getWeather = () => (
    fetch(URL) // eslint-disable-line
    .then(res => res.json())
);

export default getWeather;
