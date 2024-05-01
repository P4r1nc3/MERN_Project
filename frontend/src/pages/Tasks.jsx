import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/tasks', {
            withCredentials: true
        })
            .then(response => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-screen-lg mx-auto p-4 font-sans">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Tasks</h1>
            </div>
            <div className="flex flex-wrap gap-4">
                {tasks.map(task => (
                    <div key={task._id} className="bg-gray-200 text-black p-4 rounded-md w-72 relative">
                        <div className="mb-4">{task.description}</div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <FiEdit />
                            <AiOutlineDelete />
                        </div>
                    </div>
                ))}
                <div className="bg-gray-100 text-gray-400 p-4 rounded-md w-72 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-200">
                    <span className="text-4xl">+</span>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
