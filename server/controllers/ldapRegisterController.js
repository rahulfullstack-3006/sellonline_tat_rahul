const ldapRegisterController=require('../models/ldapRegisterModel')

module.exports.ldapRegister=async function(req,resp){

  try{
  let data=await ldapRegisterController.ldapRegisterModel(req);
  console.log("dataforldap",data);
  resp.send(data)
  }
  catch(error){
    console.log("ldapRegisterController",error);
    resp.send(error) 
  }
}

module.exports.ldapLogin=async function(req,resp){

  try{
  let data=await ldapRegisterController.ldapLoginModel(req);
  console.log("logindataforldap",data);
  resp.send(data)
  }
  catch(error){
    console.log("ldapLoginController",error);
    resp.send(error) 
  }
}

module.exports.updateLDAP=async function(req,resp){
  try{
    let data=await ldapRegisterController.updateModel(req);
    console.log("data for updateLdap",data);
    resp.send(data)
  }
  catch(error){
    resp.send(error)
  }
}

module.exports.deleteLDAP=async function(req,resp){
try{
let data=await ldapRegisterController.deleteModel(req);
console.log("datafordelete",data);
}
catch(error){
console.log("error",error);
}
}


/**************register api using mongodb start*********************/
module.exports.registerusingMongoControll=async function(req,resp){

  try{
  let data=await ldapRegisterController.registerusingMongo(req);
  console.log("dataforldap",data);
  resp.json({status:'true',message:'Successfully Register',data});
  }
  catch(error){
    console.log("ldapRegisterController",error);
    resp.json({status:'false',message:'Not Register',data:''});
  }
}

/**************register api using mongodb end*********************/

/**************login api using mongodb start*********************/

module.exports.loginusingMongoControll=async function(req,resp){

  try{
  let data=await ldapRegisterController.loginusingMongo(req);
  console.log("dataforldap",data);
  resp.json({status:'true',message:'Successfully Login',data});
  }
  catch(error){
    console.log("ldapRegisterController",error);
    resp.json({status:'false',message:'Not Login',data:''});
  }
}

/**************login api using mongodb end*********************/