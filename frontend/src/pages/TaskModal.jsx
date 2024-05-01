import React, { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription(task ? task.description : '');
    }, [task]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold">{task ? 'Edit Task' : 'Add Task'}</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({ ...task, description });
                }}>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 p-2 rounded"
                        placeholder="Task description"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Submit</button>
                    <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-2 ml-2">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
