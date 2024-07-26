const mongoose=require('mongoose');

const signupTemplate=new mongoose.Schema(

    {
       
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        contact:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        Yourcourse:{
            type:String,
            required:true,
        },
        Specialisation:{
            type:String,
            required:true,
        },
        semester:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default: Date.now
        },
    }
)

module.exports=mongoose.model('sampletable',signupTemplate)