const express = require('express')
const router = express.Router()
const tasks = require('../../../tasks')

// get all elements

router.get('/', (req,res) => {

    console.log(req.hostname)
    res.json(tasks)

})

// get particular id with error check

router.get('/:id',(req,res) => {
    const data = tasks.filter( (t) => {
        // params gives string so have to convert to int
        return t.id===parseInt(req.params.id)
    })

    if(data.length===0){
        res.status(400).json({'msg' : `task with ${req.params.id} not found`})
    }
    res.json(data[0])
})

router.post('/', (req,res) => {
    // make new object with the help of coming details and return the response
    const newData = {
       
        name : req.body.name,
        day : req.body.day,
        reminder : req.body.reminder,
        id : tasks.length + 1
    }

    if(!newData.name || !newData.day){
        res.status(400).json({'msg' : 'Name and file is missing'})
    } 

    tasks.push(newData)

    res.send(tasks)
})

router.put('/:id', (req,res) => {
    var intId = parseInt(req.params.id)
    const updatedTask = {
       
        name : req.body.name,
        day : req.body.day,
        reminder : req.body.reminder,
        id : intId
    }

    if(intId<1 || intId>tasks.length){
        return res.status(400).json({'msg':'Id not available, Enter valid id to update '});
    }

    const newTasks = tasks.map( (t) => {
       return t.id === updatedTask.id ? updatedTask : t
    })

    res.json(newTasks);
})

module.exports = router