import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},{

    timestamps: true // This will automatically add timestamps for any operations done.

});


const User = mongoose.model('User', userSchema);

export default User;