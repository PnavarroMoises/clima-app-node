const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eaa1ad80ead1d3e7e8745462266e6287&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}