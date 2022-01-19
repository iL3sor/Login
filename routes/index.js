var express = require('express')
var router = express.Router()
var poassport = require('../controllers/auth.js')
var forwardAuthenticated = poassport.forwardAuthenticated;
var ensureAuthenticated = poassport.ensureAuthenticated;

router.get('/', forwardAuthenticated, (req, res)=>{
    res.render('welcome')
})
router.get('/dashboard', ensureAuthenticated ,(req, res)=>{
    res.render('dashboard' ,{user: req.user})
})
module.exports = router;