const express = require('express');
const router = express.Router();
const User = require('../db/Schemas/UserSchema');
const authenticate = require('../middleware/authenticate');
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
            return res.status(401).json({error:"User Already exists"});
        }
        if(password!=cpassword){
           return res.status(401).json({error:"Password and Confirm Password are different"});
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

    // expires:new Date(new Date.now() + 25892000000),
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            const ismatch = await bcryptjs.compare(password,userExist.password);
            if(!ismatch){
                return res.status(401).json({error:"Invalid Credentials"});
            }else{
                const token = await userExist.generateAuthToken();
                res.cookie('jwtoken',token,{
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

router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.get('/getData',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.post('/contact',authenticate, async (req,res)=>{
    try {
        const {name,email,phone,message} = req.body;
        if(!name || !email || !phone || !message){ 
            return res.json({error:"All fields are compulsory"});
        }

        const userContact = await User.findOne({_id:req.userId});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);
            await userContact.save();

            res.status(201).json({message : "Message Sent Successfully"});
        }

    } catch (error) {
        console.log("Server Error "+error );
    }
});

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{
        path:'/'
    });

    res.status(201).send('Logged Out Successfully');
});


module.exports = router;