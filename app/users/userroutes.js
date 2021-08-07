const router = require('express').Router();
module.exports = router
const usertab=require("./usercontroller");
const usermiddle= require("./usermiddleware");
 router.get('/getusers',[usermiddle.getvalidator],usertab.getlist);
router.post('/delete',[usermiddle.Hrvalidator],usertab.delete);
router.post('/addaction',[usermiddle.getvalidator],usertab.assigntask);
router.post('/update',[usermiddle.Hrvalidator],usertab.update);