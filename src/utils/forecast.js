const request = require('request')

const forecast = (latitude, longtitude , callback) => {
    const url = 'https://api.darksky.net/forecast/1287c160ff482d61ce5820fefc400de0/' + latitude + ',' +  longtitude + '?units=si&lang=el'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weater service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currently = body.currently
            callback(undefined, body.daily.data[0].summary + ' Η θερμοκρασία τώρα είναι ' + currently.temperature + ' βαθμοί Κελσίου. Πιθανότητα βροχής ' + currently.precipProbability + '%.')
        }
    })
}

module.exports = forecast