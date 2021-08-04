const express = require('express');
const router = express.Router();
const User = require('../db/Schemas/UserSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.send("hello from the home side!!!");
});

router.post('/register',async (req, res)=>{
    
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(401).json({error:"All fields are compulsory"});
    }

    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(401).json({message:"User Already exists"});
        }
        if(password!=cpassword){
           return res.status(401).json({message:"Passwords are different"});
        }
        const user = new User({name,email,phone,work,password,cpassword});
        await user.save();
        return res.status(201).json({message:"User Registered"});
    }catch(err){
        return res.status(501).json({error:"Server Error "+ err});
    }


});

router.post('/signin', async (req, res)=>{

    const { email, password } = req.body;
    if(!email || !password){
        return res.status(401).json({error:"All fields are compulsory"});
    }


    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            const ismatch = await bcryptjs.compare(password,userExist.password);
            if(!ismatch){
                return res.status(401).json({error:"Invalid Credentials"});
            }else{
                const token = await userExist.generateAuthToken();
                res.cookie('jwtoken',token,{
                    expires:new Date(new Date.now()+ 25892000000),
                    httpOnly:true
                });
                return res.status(201).json({message:"User Loggedin"});
            }
        }else{
            return res.status(401).json({error:"Invalid Credentials"});
        }

     
        
    }catch(err){
        return res.status(501).json({error:"Server Error "+ err});
    }

});


module.exports = router;