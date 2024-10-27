require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
	res.send('The server is running!')
})

// adjust the following:
app.listen(PORT, () => {
	console.log(`Listening on localhost:${PORT}`)
	console.log(`Your secret is ${process.env.SECRET_PASSWORD}`)
})
