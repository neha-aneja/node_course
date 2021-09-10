// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectId } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectId()
// // console.log(id);
// // console.log(id.getTimestamp());

// MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
//     if (error) {
//         return console.log('unable to connect');
//     }

//     // console.log('connected');
//     const db = client.db(databaseName)
    
//     // db.collection('users').insertOne({
//     //     name: 'abc',
//     //     age: 27
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log('unable to insert');
//     //     }

//     //     console.log(result.ops);
//     // })
// // })

// // db.collection('users').insertMany([
// //     {
// //         name: 'xyz',
// //         age: 28
// //     },
// //     {
// //         name: 'pqr',
// //         age: 29
// //     }
// // ], (error, result) => {
// //     if (error) {
// //         return console.log('unable to insert');
// //     }

// //     console.log(result.ops);
// // })

// // db.collection('users').findOne({_id: new ObjectId("612de4f6fdc9f027d74baba7")}, (error, result) => {
// //     if (error) {
// //                 return console.log('unable to fetch');
// //             }
        
// //             console.log(result);
// // } )
// // })

// db.collection('users').find({age: 2}, (error, result) => {
//     // if (error) {
//     //             return console.log('unable to fetch');
//     //         }
        
//             console.log(result);
// }) 
// })

// CRUD create read update delete

const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').updateOne({_id: new ObjectId('612de4f6fdc9f027d74baba7')}, {
    //     // $set: { age: 28 }
    //     $inc: { age: 1 }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    
    // db.collection('users').findOne({ _id: new ObjectID("5c1113239cbfe605241f9071") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
})