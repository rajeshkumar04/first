import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
    username:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    confirmpassword:
    {
        type:String,
        required:true
    }
})

const alldata = mongoose.model("register",RegisterSchema);
export default alldata; 