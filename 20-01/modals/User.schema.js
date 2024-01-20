// name, email, password, number  
// {
//     name : String,
//     email :String,
//     password :String,
//     number :number,
//     fvrtFruits : [ String ]
// }

import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    number: Number,
    fvrtFruits: [String]
})

export default mongoose.model('User', userSchema)


