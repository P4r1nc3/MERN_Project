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
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold">{task ? 'Edit Task' : 'Add Task'}</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({ ...task, description, dueTo, priority });
                }}>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 p-2 rounded"
                        placeholder="Task description"
                    />
                    <input
                        type="date"
                        value={dueTo}
                        onChange={(e) => setDueTo(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-2"
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-2"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Submit</button>
                    <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-2 ml-2">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
