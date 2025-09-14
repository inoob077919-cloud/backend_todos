import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: { //object inside details validation
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email must have enter"], //inside array you defined a custom error
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [6, "Password must be at least 6 characters long"],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(value)
            },
            message:
                "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
        },
    },
    phone: {
        type: String,
        required: [true, 'User phone number required']
    }
},
    {
        timestamps: true
    }

);

export const User = mongoose.model("User", userSchema);