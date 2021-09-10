const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send("hello express")
})

app.get('/help', (req, res) => {
    res.send("hey")
})

app.listen(5000, () => {
    console.log("port is up on port 3000");
})