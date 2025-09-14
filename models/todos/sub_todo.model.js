import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

//3rd step is export that schema

export const SubTodo = mongoose.model("SubTodo", subTodoSchema); 