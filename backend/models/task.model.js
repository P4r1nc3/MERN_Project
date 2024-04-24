import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'User'
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
