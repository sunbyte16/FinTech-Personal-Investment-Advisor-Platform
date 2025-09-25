import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: 'Firstname field is required',
    },
    lastName:{
        type:String,
        required: 'Lastname field is required',
    },
    email:{
        type:String,
        unique:true,
        required: 'Email field is required',

    },
    password:{
        type: String,
        required: 'Password field is required',
    },
    balance:{
        type: Number,
        default: "500000",
    }
    
},{versionKey: false });


// Static signup method
userSchema.statics.signup = async function (firstName, lastName, email, password){
    
    // Validation 
    if(!email || !password || !firstName || !lastName ){
        throw Error('All fields must be entered')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Length of password must be greater than 8 and must include 1 lowercase, 1 uppercase, 1 symbol and 1 number!');
    }

    const exists = await this.findOne({email});
    if (exists){
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({firstName, lastName,email,password:hash})

    return user;
}

// Static login method
userSchema.statics.login = async function ( email, password){
    // Validation 
    if(!email || !password){
        throw Error('All fields must be entered')
    }
    const user = await this.findOne({email});
    if (!user){
        throw Error('Email ID doesnt exist');
    }

    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Invalid login credentials');
    }
    return user;
}

// Creating a model from our schema
const model = mongoose.model('user', userSchema);

// Exporting the model as default
export default model;

