const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('./config/yargs').argv


const getInfo = async(ubicacion) => {

    try {
        const coords = await lugar.getLugarLatLng(ubicacion);
        const temp = await clima.getClima(coords.lat, coords.lng)

        return `El clima de ${coords.direccion} es de ${temp}.`

    } catch (e) {
        throw new console.error(`No se pudo determinar el clima de ese ${ubicacion}`);
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)