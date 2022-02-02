import express from 'express';
const app  = express();
const port = 8000;
import RegisterSchema from './model.js'
import mongoose  from 'mongoose';
import middleware from './middleware.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
app.use(express.json());
app.use(cors({
    origin:"*"
}))
mongoose.connect("mongodb+srv://user:user@cluster0.5xvsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(
    () => console.log("DB IS CONNECTED")
).catch(err => console.log(err.message));

app.get("/",(req,res)=>{
    res.send("rajesh");
})

//post
app.post("/register",async(req,res)=>{
   
    try{
        const{username,email,password,confirmpassword}= req.body;
        //checking email exist or not
        let existemail = await RegisterSchema.findOne({email:email}) 
        if(existemail)
        {
            return res.status(400).send("Email is already Exist")
        }
        //checking pass adn confirmpass are equal  or not
        if(password !== confirmpassword)
        {
            return res.status(400).send("Password and confirmpassword are not same")
        }
        //after these all the crct we need to store the data in db
        const userData = new RegisterSchema({username,email,password,confirmpassword})
        await userData.save()
        res.status(200).send("Register sucessfully");
    }
    catch(err)
    {
        console.log(err.message)
    }
})
//login page
app.post("/login",async(req,res)=>{
    try
    {
            const {email,password}= req.body; 
            let mailexist= await RegisterSchema.findOne({email:email})
            if(!mailexist)
            {
                return res.status(400).send("Not Registered With this email")
            } 
            //checking userpassword and db password
            if(mailexist.password !== password)
            {
                    return res.status(400).send("Wrong credentials")
            }
                let payload = 
                {
                    user:
                    {
                        id:mailexist.id
                    }
                }
            //gerenrating token
            jwt.sign(payload ,"jwtsecure",{expiresIn:3600000},
                (err,token) =>{
                    if(err) throw err;
                    return res.json({token})
                }
            )
                    //when we login we will get the token number
     }
     catch(err)
    {
        console.log(err.message)
    }
    
})
app.get("/ExamPage",middleware,async(req,res)=>{ 
        try
        {
                let exitid = await RegisterSchema.findById(req.user.id);
                if(!exitid)
                {
                    return res.status(400).send("user not found")
                }
                res.json(exitid);
        }
        catch(err)
        {
            console.log(err.message)
        }
})
app.get("/myprofile",middleware,async(req,res)=>{
        try
        {
                    let user = await RegisterSchema.findById(req.user.id);
                    return res.status(200).json(user);
        }
        catch(err)
        {
            console.log(err.message);

        }
})
app.listen((port),()=>{
    console.log(`running sucessfully at ${port}`);
})