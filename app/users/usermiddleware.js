const async = require('async');
const path = require('path');

module.exports={
getvalidator:async(req,res,next)=>{
    let action;
    let assign_by;
    if(req.query.hasOwnProperty('action')){
         action = req.query.action;
          assign_by=req.query.assign_by;
          assign_to=req.query.assign_to;
    }else{
        action = req.body.action;
         assign_by = req.body.assign_by;
         assign_to=req.body.assign_to;
    }
    if(assign_by==assign_to){
        return  helper.createResponse(
            res,
            UNPROCESSED,
            "you can not give permissions yourself",
            {}
          );
    }
   console.log(req.body)
        let sqlQuery=await connect.query('select '+action+' as permission from users_auth where Users ="'+assign_by+'"');
        if(sqlQuery[0].length==0){
            console.log(sqlQuery)
            return  helper.createResponse(
                res,
                UNPROCESSED,
                "user not exist",
                {}
              );
        } else if(sqlQuery[0].permission =='0'){
            console.log(sqlQuery)
            return  helper.createResponse(
                res,
                UNPROCESSED,
                "you have no permissions",
                {}
              );
        }
        next();
    },
    genralvalidator:async(req,res,next)=>{

        if(req.body.assign_by =="employees"){
            return  helper.createResponse(
                res,
                UNPROCESSED,
                "invalid user",
                {}
              );
        }else if(req.body.action == "Is_insert"||req.body.action =="Is_update"){
          if(req.body.role!="employees"){
            return  helper.createResponse(
                res,
                UNPROCESSED,
                "you have no permission",
                {}
              );
          }
          next();
        }
            let sqlQuery=await connect.query('select '+req.body.action+' as permission from users_auth where Users ="'+req.body.assign_by+'"');
            console.log(sqlQuery)
              if(sqlQuery[0].length==0){
                return  helper.createResponse(
                    res,
                    UNPROCESSED,
                    "user not exist",
                    {}
                  );
            } else if(sqlQuery[0].permission =='0'){
                console.log(sqlQuery)
                return  helper.createResponse(  
                    res,
                    UNPROCESSED,
                    "you have no permissions",
                    {}
                  );
            }
            next();
        },
        deletevalidator:async(req,res,next)=>{
            if(req.body.assign_by =="employees"){
                return  helper.createResponse(
                    res,
                    UNPROCESSED,
                    "invalid user",
                    {}
                  );
            }else if(req.body.assign_by =="Manager"  && req.body.role!=="employees"){
                return  helper.createResponse(
                    res,
                    UNPROCESSED,
                    "you have no permission",
                    {}
                  );
            }else if(req.body.assign_by==req.body.role){
                return  helper.createResponse(
                    res,
                    UNPROCESSED,
                    "you can not make action on youselef",
                    {}
                  ); 
            }
                let sqlQuery=await connect.query('select '+req.body.action+' as permission from users_auth where Users ="'+req.body.assign_by+'"');
                  if(sqlQuery[0].length==0){
                    return  helper.createResponse(
                        res,
                        UNPROCESSED,
                        "user not exist",
                        {}
                      );
                } else if(sqlQuery[0].permission =='0'){
                    return  helper.createResponse(  
                        res,
                        UNPROCESSED,
                        "you have no permissions",
                        {}
                      );
                }
                next();
            },
}