import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskModal from './TaskModal';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/tasks', {
            withCredentials: true
        })
            .then(response => {
                setTasks(response.data);
            });
    }, []);

    const handleEdit = task => {
        setCurrentTask(task);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentTask(null);
        setModalOpen(true);
    };

    const handleSubmit = task => {
        const method = task._id ? 'put' : 'post';
        const url = task._id ? `http://localhost:3000/api/tasks/${task._id}` : 'http://localhost:3000/api/tasks/';

        axios[method](url, { description: task.description }, {
            withCredentials: true
        }).then(response => {
            if (task._id) {
                setTasks(tasks.map(t => t._id === response.data._id ? response.data : t));
            } else {
                setTasks([...tasks, response.data]);
            }
            setModalOpen(false);
        });
    };

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
                            <FiEdit onClick={() => handleEdit(task)} />
                            <AiOutlineDelete />
                        </div>
                    </div>
                ))}
                <div onClick={handleAdd} className="bg-gray-100 text-gray-400 p-4 rounded-md w-72 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-200">
                    <span className="text-4xl">+</span>
                </div>
            </div>
            <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} task={currentTask} />
        </div>
    );
};

export default Tasks;
