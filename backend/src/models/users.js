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


const User = mongoose.model('User', userSchema)

module.exports = User