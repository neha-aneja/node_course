const mongoose = require('mongoose')
const { number, string } = require('yargs')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    // useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'abc',
    age: 25
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('error!', error);
})