const express =  require('express')
// const { db } = require('./models/user')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log('server is up on port ' + port);
})

app.post('/users', (req, res) => {
    const user =  new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
    // console.log(req.body);
    // res.send('testing')
})

app.get('./users', (req,res) => {
    User.find().then((users) => {
        res.send(users)
    }).catch((e) => {
        res.send(e)
    })
})