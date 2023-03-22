var leadDashboard=require('../models/leadDashboardModel');

module.exports.getLeadDashboardController=async function(req,resp){
  try{
   let data=await leadDashboard.getLeadDashboardModel(req);
   console.log("data",data);
  //  resp.send(data)
  resp.json({status:'true',message:'Fech All Lead Successfully',data});

  }
  catch(err){
    // resp.send(err)
  resp.json({status:'false',message:'Error in Lead Fetch',data});

  }
}

module.exports.createLeadDashboardController=async function(req,resp){
  try{
   let data=await leadDashboard.createLeadDashboardModel(req);
   console.log("data",data);
  //  resp.send(data)
  resp.json({status:'true',message:'Lead Created Successfully',data});
  }
  catch(err){
    // resp.send(err)
  resp.json({status:'false',message:'Error in Lead Creation',data});

  }
}


module.exports.updateLeadDashboardController=async function(req,resp){
  try{
   let data=await leadDashboard.updateLeadDashboardModel(req);
   console.log("data",data);
  //  resp.send(data)
  resp.json({status:'true',message:'Lead Updated Successfully',data});

  }
  catch(err){
    // resp.send(err)
  resp.json({status:'false',message:'Error in Lead Updation',data});

  }
}


module.exports.deleteLeadDashboardController=async function(req,resp){
  try{
   let data=await leadDashboard.deleteLeadDashboardModel(req);
   console.log("data",data);
  //  resp.send(data)
  resp.json({status:'true',message:'Lead Deleted Successfully',data});

  }
  catch(err){
    // resp.send(err)
  resp.json({status:'false',message:'Error in Lead Deletion',data});

  }
}