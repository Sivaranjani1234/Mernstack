const express =require('express');
const router=express.Router();

const signupTemplatecopy=require('../Model/modelsignup')

router.post("/signup",(request,response)=>
{
   const sam= new signupTemplatecopy({
       
        name:request.body.name,
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        Yourcourse:request.body.Yourcourse,
        Specialisation:request.body.Specialisation,
        semester:request.body.semester,
   })

   sam.save().then(data=>{
  
      response.json(data);
      console.log('Data added Successfully');
   }).catch(error=>{

      response.json(error)
   })
})

module.exports=router;