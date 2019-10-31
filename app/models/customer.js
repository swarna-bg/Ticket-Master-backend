const mongoose=require('mongoose')

const Schema=mongoose.Schema
const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Date,
        required:true  
    },
    departmentId:{
        type:Schema.Types.ObjectId,
        ref:'DepartmentSchema'
    }
})



const Customer=mongoose.model('Customer',customerSchema)



module.exports={Customer}