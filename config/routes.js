const express = require('express')
const router = express.Router()



const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middlewares/authentication')
const customerController=require('../app/controllers/customerController')
const departmentController=require('../app/controllers/departmentController')
const employeeController=require('../app/controllers/employeeController')
const ticketController=require('../app/controllers/ticketController')

//user authentication

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)


// customers
router.get('/customers',customerController.list)
router.post('/customers',customerController.create)
router.get('/customers/:id',customerController.show)
router.put('/customers/:id',customerController.update)
router.delete('/customers/:id',customerController.destroy)

// department

router.get('/departments',departmentController.list)
router.post('/departments',departmentController.create)
router.get('/departments/:id',departmentController.show)
router.put('/departments/:id',departmentController.update)
router.delete('/departments/:id',departmentController.destroy)

// employees

router.get('/employees',employeeController.list)
router.post('/employees',employeeController.create)
router.get('/employees/:id',employeeController.show)
router.put('employees/:id',employeeController.update)
router.delete('tickets/soft_delete/:id',ticketController.update)
router.delete('employees/:id',employeeController.destroy)

//tickets

router.get('/tickets',ticketController.list)
router.post('/tickets',ticketController.create)
router.get('/tickets/:id',ticketController.show)
router.put('/tickets/:id',ticketController.update)
router.delete('/tickets/soft_delete/:id',ticketController.update)
router.delete('/tickets/:id',ticketController.destroy)

module.exports = router
