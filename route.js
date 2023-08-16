const express = require('express')
const router = express.Router()
const CompanyModel = require('./schema')

router.get('/', async function(req,res){
    try {
        const company = await CompanyModel.find()
        res.send(company)
    } 
    catch(err) {
        res.status(400).send(err)
    }
})

router.get('/:name', async function(req,res){
    try {
        const {name} = req.params
        const user = await CompanyModel.find({name: name})
        res.send(user)
    } 
    catch(err) {
        res.status(400).send(err)
    }
})

router.post('/', async function(req,res){
    try {
        // const user = new CompanyModel(req.body)
        // await user.save()
        // res.status(201).send(user)

        const arr = req.body
        const user = await CompanyModel.insertMany(arr)
        res.status(201).send(user)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

router.patch('/:id', async function(req,res){
    try {
        const {id} = req.params
        const user = await CompanyModel.findOne({name: id})
        if(!user){
            return res.status(404).send('User not found')
        }
        const {score} = req.body
        user.score = score
        await user.save()
        res.status(202).send(user)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const user = await CompanyModel.deleteOne({name: id})
        if(!user){
            return res.status(404).send("User not found")
        }
        res.status(204).send('User deleted successfully')
    } 
    catch(err){
       res.status(400).send(err) 
    }
})

module.exports = router