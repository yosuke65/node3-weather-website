const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4bffb39b1c2ab2a4976e80a38c1e2fee&query=37.8267,-122.4233/' + latitude + ',' + longitude
    request({url, json:true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '  degrees out. Humidity is ' + body.current.humidity + ' There is a ' + body.current.feelslike + ' degrees out.')
        }
    })
}


module.exports = forecast