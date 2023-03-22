var BasicDetails=require('../models/basicDetailsSchema');


module.exports.getLeadDashboardModel=async function(req,resp){
  try{
    let data =await BasicDetails.find();
    console.log("data for try",data);
    return data;
  }
  catch(err){
    return err
  }
}

module.exports.createLeadDashboardModel=async function(req,resp){
  let basicDetails=new BasicDetails({
    address:req.body.address,
    password:req.body.password,
    city:req.body.city,
    dob:req.body.dob,
    email:req.body.email,
    first_name:req.body.first_name,
    middle_name:req.body.middle_name,
    last_name:req.body.last_name,
    insurance_type:req.body.first_name,
    mobile:req.body.mobile
  })
  console.log("basicDetails",basicDetails);
  try{
    let data =await basicDetails.save();
    console.log("data for try",data);
    return data;
  }
  catch(err){
    return err
  }
}



module.exports.updateLeadDashboardModel=async function(req,resp){
  console.log("id",req.params.id);
  try{
    let data=await BasicDetails.findOneAndUpdate({_id:req.params.id},{
      $set:{
        address:req.body.address,
        password:req.body.password,
        city:req.body.city,
        dob:req.body.dob,
        email:req.body.email,
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        insurance_type:req.body.first_name,
        mobile:req.body.mobile
      }
    },{
      new:true,
      useFindAndModify:false
    })
    return data;
  }
  catch(err){
    return err
  }

}



module.exports.deleteLeadDashboardModel=async function(req,resp){
  console.log("id",req.params.id);
  try{
    let data=await BasicDetails.remove({_id:req.params.id})
    return data;
  }
  catch(err){
    return err
  }

}

