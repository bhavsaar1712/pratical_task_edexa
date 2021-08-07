const async = require('async');
const path = require('path');
 module.exports={
     
    getlist:async(req,res)=>{        
        let query =('select id,name,role from users')
        let const1= NOT_FOUND;
        let massage1=  "list not found";
        let const2= SUCCESS;
        let massage2= "list found";
        let data={};
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       },
       assigntask:async(req,res)=>{        
        let query =('update users_auth set '+req.body.action+' = 1 where Users = "'+req.body.assign_to+'"');
       console.log(query)
        let const1= NOT_FOUND;
        let massage1=  "task not updated"
        let const2= SUCCESS;
        let massage2= "you got permission"
        let data={};
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       },
       delete:async(req,res)=>{        
        let query =('delete * from users where id="'+req.body.id+'"');
        let const1= NOT_FOUND;
        let massage1=  "list not found";
        let const2= SUCCESS;
        let massage2= "list found";
        let data={};
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       },
       insert:async(req,res)=>{
        let data={name:req.body.user,
        role:req.body.role};
        let query = 'insert into users set ?';
        let const1= UNPROCESSED;
        let massage1=  "user not added successfully"
        let const2= SUCCESS;
        let massage2= "user added successfully"
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       }, 
       update:async(req,res)=>{
        let data={name:req.body.user,
          role:req.body.role};        
        let query =('update users set ? where id="'+req.body.id+'"');
        let const1= UNPROCESSED;
        let massage1= "user not updated successfully"
        let const2= SUCCESS;
        let massage2= "user  updated successfully"
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       },
       delete:async(req,res)=>{        
        let query =('delete  from users where id ="'+req.body.id+'" ');
        let const1= UNPROCESSED;
        let massage1=  "user not deleted";
        let const2= SUCCESS;
        let massage2= "user deleted";
        let data={};
        let pager={}
        addupdate(res,query,data,massage1,massage2,const1,const2,pager);      
       },

 }  
 function addupdate(res,sqlQuery,data,massage1,massage2,const1,const2,pager){
    if(Object.keys(data).length==0){
     data==null;
      }
      try{
    connect.query(sqlQuery,data, function(err, data) {
          if (err) {
            console.log(err)
             helper.createResponse(
                 res,
                 const1,
                 massage1,
                 {},
                 pager
               );
          } else {
             helper.createResponse(
                 res,
                 const2,
                 massage2,
                 {data},
                 pager
               );
                  }
             })
            }catch(e){
                console.log(e)
            }            
       }