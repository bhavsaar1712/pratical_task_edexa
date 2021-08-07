const router = require('express').Router();
module.exports = router
const usertab=require("./usercontroller");
const usermiddle= require("./usermiddleware");
 router.get('/getusers',[usermiddle.getvalidator],usertab.getlist);
router.post('/delete',[usermiddle.deletevalidator],usertab.delete);
router.post('/assignaction',[usermiddle.getvalidator],usertab.assigntask);
router.post('/update',[usermiddle.genralvalidator],usertab.update);
router.post('/insert',[usermiddle.genralvalidator],usertab.insert)