const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task=require('./collections')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    vector:{
        type: String
    },
    likes:[
        {
            like:{
                type: String,
                trim: true
            },
            likeUrl:{
                type: String,
                trim: true,
                validate(value) {
                    if (!validator.isURL(value)) {
                        throw new Error('Not a valid URL')
                    }
                }
            }
        }
    ],
    dislikes:[
        {
            dislike:{
                type: String,
                trim: true
            },
            dislikeUrl:{
                type: String,
                trim: true,
                validate(value) {
                    if (!validator.isURL(value)) {
                        throw new Error('Not a valid URL')
                    }
                }
            }
        }
    ],
    weeklyPictures:[
        { 
            weeklyUrl:{
                type: String,
                trim: true,
                validate(value) {
                    if (!validator.isURL(value)) {
                        throw new Error('Not a valid URL')
                    }
                }
            }
        }
    ],
    
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer 
    }
},
{
    timestamps: true
})

userSchema.virtual('collections', {
    ref: 'Collection',
    localField: '_id',
    foreignField: 'owner'
})
userSchema.methods.generateAuthToken=async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials=async(email, password)=>{
    const user=await User.findOne({email})

    if(!user)
    {
        throw new Error('Unable to Login')
    }
    const isMatch=await bcrypt.compare(password, user.password)
  

    if(!isMatch){
        throw new Error('Unable to Login')
    }
    return user
}

//Hash the plain text password
userSchema.pre('save', async function(next){
    const user=this

    //hash password
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
    }

    next()

})



const User = mongoose.model('User', userSchema)

module.exports = User