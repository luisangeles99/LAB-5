const weather = require('./funciones.js')

weather.geoCode('Monterrey', function(error, data){
    if(error)
        console.log(error)
})

