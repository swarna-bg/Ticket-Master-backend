const Employee=require('../models/employee')

//list

module.exports.list=(req,res)=>{
    Employee.find()
        .then((emp)=>{
            res.json(emp)
        })
        .catch((err)=>{
            console.log(err)
        })
}

//create

module.exports.create=(req,res)=>{
    const body=req.body
    const employee =new Employee(body)
    employee.save()
        .then((emp)=>{
            res.json(emp)
        })
        .catch((err)=>{
            console.log(err)
        })
}

//show

module.exports.show=(req,res)=>{
    const id=req.params.id
    Employee.findById(id)
        .then((emp)=>{
            if(emp){
                res.json(emp)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
}


// update
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Employee.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        .then((emp)=>{
            if(emp){
                res.json(emp)
            }else{
                res.json({ })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
}

//destroy

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Employee.findByIdAndDelete(id)
        .then((emp)=>{
            if(emp){
                res.json(emp)
            }else{
                res.json({ })
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
}

