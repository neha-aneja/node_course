const express =  require('express')
require('./db/mongoose')
// const User = require('./models/user')
const userRouter = require('./routers/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const sharp = require('sharp')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('site is down')
// })

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port);
})



// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('get requests disabled')
//     } else {
//         next()
//     }
// })

// const myFun = async () => {
//     // const password = 'abc@123';
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password);
//     // console.log(hashedPassword);

//     // const isMatch = await bcrypt.compare('abc@123', hashedPassword)
//     // console.log(isMatch);

//     const token = jwt.sign({ _id: 'abc123' }, 'itsnew', { expiresIn: '7 weeks'})
//     console.log(token);

//     const data = jwt.verify(token, 'itsnew')
//     console.log(data);
// }

// myFun();

// const pet = {
//     name : "cat"
// }

// pet.toJSON = function () {
//     console.log(this);
//     return this
// }

// console.log(JSON.stringify(pet));