const request = require('request')

const newurl = 'http://api.weatherstack.com/current?access_key=453fbb810c06a1ef55e8b842525f4ed4&query=20.5937,78.9629&units=f'

request({url: newurl, json: true}, (error, response) => {
    console.log(response.body.current);
})


// console.log('hi');

// setTimeout(() => {
//     console.log('timer');
// }, 2000)

// setTimeout(() => {
//     console.log('zero');
// }, 0)

// console.log('helo');