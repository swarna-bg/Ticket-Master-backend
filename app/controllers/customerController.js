const {Customer}=require('../models/customer')

//list

module.exports.list=(req,res)=>{
    Customer.find()
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            console.log(err)
        })
}

//create

module.exports.create=(req,res)=>{
    const body=req.body
    const customer=new Customer(body)
    customer.save()
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            console.log(err)
        })
}

//show

module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findById(id).populate('categoryId')
        .then((customer)=>{
            if(customer){
                res.json(customer)
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
    Customer.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        .then((customer)=>{
            if(customer){
                res.json(customer)
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
    Customer.findByIdAndDelete(id)
        .then((customer)=>{
            if(customer){
                res.json(customer)
            }else{
                res.json({ })
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
}

