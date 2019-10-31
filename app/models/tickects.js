const mongoose=require('mongoose')

const Schema=mongoose.Schema
const ticketSchema=new Schema({
    custumerId:{
        type:Schema.Types.ObjectId,
        ref:'Customer'
    },
    departmentId:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    employeesId:[{
        type:Schema.Types.ObjectId, // if we have to use populate on an array of id we can do like this  or can do {type:[ObjectId]}
        ref:'Employees' // if this field is not used we will not know from where to get the data andd it wll return null
    }],
        
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean,
        default:false
    },
    priority:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    code:{
        type:String,
        required:true
    },
    isDeleted:{
        default:false
    }
})

const Ticket=mongoose.model('Ticket',ticketSchema)

module.exports=Ticket