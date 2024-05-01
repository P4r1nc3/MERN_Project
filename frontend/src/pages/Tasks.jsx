import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskModal from './TaskModal';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleToast = (message, type = "info") => {
        toast[type](message, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleSubmit = task => {
        const method = task._id ? 'put' : 'post';
        const url = task._id ? `http://localhost:3000/api/tasks/${task._id}` : 'http://localhost:3000/api/tasks/';

        axios[method](url, task, {
            withCredentials: true
        }).then(response => {
            const message = task._id ? "Task updated successfully." : "Task added successfully.";
            handleToast(message, "success");
            if (task._id) {
                setTasks(tasks.map(t => t._id === response.data._id ? response.data : t));
            } else {
                setTasks([...tasks, response.data]);
            }
            setModalOpen(false);
        });
    };

    const handleDelete = taskId => {
        axios.delete(`http://localhost:3000/api/tasks/${taskId}`, {
            withCredentials: true
        })
            .then(() => {
                setTasks(tasks.filter(task => task._id !== taskId));
                handleToast("Task deleted successfully.", "error");
            })
            .catch(error => {
                handleToast(error.message, "error");
            });
    };

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4 font-sans">
            <ToastContainer />
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Tasks</h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                {tasks.map(task => (
                    <div key={task._id} className="h-600 bg-gray-100 text-black p-6 rounded-md w-80 relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-semibold mb-1 truncate">{task.description}</h3>
                        <p className="text-sm mb-2 text-gray-600">{formatDate(task.dueTo)}</p>
                        <p className={`text-sm mb-4 font-medium ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                            {task.priority}
                        </p>
                        <div className="absolute bottom-4 right-4 flex gap-3">
                            <FiEdit className="cursor-pointer text-lg hover:text-blue-500 transition-colors duration-300" onClick={() => handleEdit(task)} />
                            <AiOutlineDelete className="cursor-pointer text-lg hover:text-red-500 transition-colors duration-300" onClick={() => handleDelete(task._id)} />
                        </div>
                    </div>
                ))}
                <div onClick={handleAdd} className="bg-gray-100 text-black p-6 rounded-md w-80 h-36 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-4xl text-gray-400">+</span>
                </div>

            </div>
            <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} task={currentTask} />
        </div>
    );
};

export default Tasks;
