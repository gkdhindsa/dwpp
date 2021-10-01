const mongoose = require('mongoose')
const validator=require('validator')
const CollectionSchema= new mongoose.Schema({
    images:[
        {
            image:{
                type: String,
                trim: true
            },
            imageUrl:{
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
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
})
const Collection = mongoose.model('Collections', CollectionSchema)
module.exports = Collection