const Ticket=require('../models/tickects')

//list

module.exports.list=(req,res)=>{
    Ticket.find()
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
    const tictet=new Ticket(body)
    tictet.save()
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
    Ticket.findById(id).populate('categoryId')
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
    Ticket.findByIdAndUpdate(id,body,{new:true, runValidators:true})
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
    Ticket.findByIdAndDelete(id)
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

