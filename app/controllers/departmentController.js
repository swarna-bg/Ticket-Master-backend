const { Department } =require('../models/department')
 

//list

module.exports.list=(req,res)=>{
    Department.find()
    .then((dept)=>{
        res.json(dept)
    })
    .catch((err)=>{
        console.log(err)
    })
}

//create

module.exports.create=(req,res)=>{
    const body=req.body
    const department=new Department(body)
    department.save()
        .then((product)=>{
            res.json(product)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

//show

module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findById(id).populate('categoryId',['name'])
        .then((dept)=>{
            if(dept){
                res.json(dept)
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
    Department.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        .then((dept)=>{
            if(dept){
                res.json(dept)
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
    Department.findByIdAndDelete(id)
        .then((dept)=>{
            if(dept){
                res.json(dept)
            }else{
                res.json({ })
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
}