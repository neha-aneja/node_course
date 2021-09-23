const mongoose = require('mongoose')
const { number, string, required } = require('yargs')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    // useCreateIndex: true
    // useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('not valid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if(value<0) {
//                 throw new Error('value must be positive')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'abc',
//     email: 'abc@gmail.com',
//     password: 'password',
//     age: 25
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('error!', error);
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const tasks = new Task({
//     description: 'learn javascript',
//     completed: false
// })

// tasks.save().then(() => {
//     console.log(tasks);
// }).catch((err) => {
//     console.log('err!', err);
// })