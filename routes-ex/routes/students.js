const express = require('express')

const mongoose = require('mongoose')

const router = express.Router()

const studentsSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3 , maxlength: 30},
    isEnrolled: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 13
    }
})

const StudentModel = mongoose.model('Student',studentsSchema)


router.get('/',async (req,res)=>{
    try{
        let students = await StudentModel.find()
        res.send(students)
    }catch(err){
        res.send(`Error getting students: ${err}`)
    }
})

router.post('/',async (req,res)=>{
    const p = new StudentModel({name: req.body.name,phone: req.body.phone})
    await p.save()
    res.send(p)
})
router.delete('/',async (req,res)=>{
    const id = req.body.id
    const Student = await StudentModel.findByIdAndDelete(id)
    res.send(Student)
})

router.put('/',async (req,res)=>{
    const id = req.body.id
    Student = await StudentModel.findById(id)
    Student.name = req.body.name
    await Student.save()
    res.send(Student)
})

module.exports = router