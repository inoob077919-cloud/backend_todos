import mongoose from 'mongoose';
import { Subtodo } from './sub_todo.model';

const TodoSchema = new mongoose.Schema(
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
        }, // basically there is relation so we must defined
        Subtodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // Array of Sub Todos
    },
    {
        timestamps: true
    }

);

//3rd step is export that schema
export const Todo = mongoose.model("Todo", TodoSchema); 