console.log('Clientfile!')



const weatherForm = document.querySelector('form')
const searchLocation = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchLocation.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = 'Unable to find location. Try another search.'
            } else {
                console.log(data.forecastData)
                messageOne.textContent = location
                messageTwo.textContent = data.forecastData
            }
        })
})
})