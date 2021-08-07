const async = require('async');
const path = require('path');

module.exports={
       Hrvalidator:async(req,res,next)=>{
          let Query= await connect.query('select ID from users_auth where Users = "'+req.body.assign_by+'"');
           if(Query.length!==0){
              if(sqlQuery[0].CityID!==req.params.id){
                  return  helper.createResponse(
                      res,
                      "200",
                      "user not exist",
                        {}
                 );
             }
             return next();
        }else if(Query[0].ID!='1001'){
            return  helper.createResponse(
                res,
                "200",
                "user not exist",
                  {}
           );
        }
     return next()
 },
getvalidator:async(req,res,next)=>{
    let action;
    let assign_by;
    if(req.query.hasOwnProperty('action')){
         action = req.query.action;
          assign_by=req.query.assign_by;
    }else{
        action = req.body.action;
         assign_by = req.body.assign_by;
    }
   
        let sqlQuery= await connect.query('select '+action+' as permission from users_auth where Users ="'+assign_by+'"');
        if(sqlQuery[0].length==0){
            console.log(sqlQuery)
            return  helper.createResponse(
                res,
                "200",
                "user not exist",
                {}
              );
        } else if(sqlQuery[0].permission =='0'){
            console.log(sqlQuery)
            return  helper.createResponse(
                res,
                "200",
                "you have no permissions",
                {}
              );
        }
        next();
    },
}