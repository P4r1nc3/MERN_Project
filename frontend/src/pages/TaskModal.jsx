import React, { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
    const [description, setDescription] = useState('');
    const [dueTo, setDueTo] = useState('');
    const [priority, setPriority] = useState('medium');

    useEffect(() => {
        if (task) {
            setDescription(task.description);
            setDueTo(task.dueTo || '');
            setPriority(task.priority || 'medium');
        } else {
            setDescription('');
            setDueTo('');
            setPriority('medium');
        }
    }, [task]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow border">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
                    {task ? 'Edit Task' : 'Add Task'}
                </h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({ ...task, description, dueTo, priority });
                }} className="space-y-4">
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Task Description</label>
                        <input
                            id="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="h-10bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Describe the task"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="dueTo" className="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                        <input
                            id="dueTo"
                            type="date"
                            value={dueTo}
                            onChange={(e) => setDueTo(e.target.value)}
                            className="h-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                        <select
                            id="priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="h-10 input-style bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
                        <button type="button" onClick={onClose} className="bg-gray-400 hover:bg-red-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-gray-600">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
