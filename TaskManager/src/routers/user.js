const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()
router.post('/users',  async (req, res) => {
    // console.log(req.body);
    // res.send('testing')
    const user =  new User(req.body)

    try {
    await user.save()
    const token = user.generateAuthToken() 
    res.status(201).send({user, token})
    }catch(e) {
        res.status(400).send(e)
    }
    
    
    // .then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
        // res.send(e)
    // })
    // console.log(req.body);
    // res.send('testing')
})

router.post('/users/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token =  await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

// router.get('/users', auth, async  (req,res) => {

//     try {
//     const users = await User.find({})
//     res.send(users)
//     } catch(e) {
//         res.send(e)
//     }
//     // .then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.send(e)
//     // })
// })

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req,res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async  (req,res) => {
    res.send(req.user)
})

// router.get('/users/:id', async (req,res) => {
//     console.log(req.params);
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if(!user) {
//                     return res.status(404).send()
//                 }
//                 res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
//     // User.findById(_id).then((user) => {
//     //     if(!user) {
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch(() => {
//     //     res.status(500).send()
//     // })
// })

// router.patch('/users/:id', async (req, res) => {
    
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if(!isValidOperation) {
//         return res.status(400).send({ error : 'invalidUpdates'})
//     }

//     try {
//         // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators : true})

//         const user = await User.findById(req.params.id)
//         updates.forEach((update) => user[update] = req.body[update])

//         await user.save()

//         if(!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

router.patch('/users/me', auth, async (req, res) => {
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error : 'invalidUpdates'})
    }

    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators : true})
        // const user = await User.findById(req.params.id)
        
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// router.delete('/users/:id', async (req, res) => {
    
//     try {
//          const user = await User.findByIdAndDelete(req.params.id)

//          if(!user) {
//              return res.status(404).send()
//          }

//          res.send(user)
//     } catch (e) {
//         res.status(400).send()
//     }
// })

router.delete('/users/me', auth, async (req, res) => {
    
    try {
        //  const user = await User.findByIdAndDelete(req.user._id)

        //  if(!user) {
        //      return res.status(404).send()
        //  }

        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router
