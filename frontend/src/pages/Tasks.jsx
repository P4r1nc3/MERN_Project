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

    return (
        <div className="max-w-screen-lg mx-auto p-4 font-sans">
            <ToastContainer />
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Tasks</h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                {tasks.map(task => (
                    <div key={task._id} className="bg-gray-200 text-black p-4 rounded-md w-72 relative">
                        <div className="mb-2">{task.description}</div>
                        <div className="mb-2">{task.dueTo}</div>
                        <div className="mb-4">{task.priority}</div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <FiEdit className="cursor-pointer" onClick={() => handleEdit(task)} />
                            <AiOutlineDelete className="cursor-pointer" onClick={() => handleDelete(task._id)} />
                        </div>
                    </div>
                ))}
                <div onClick={handleAdd} className="text-gray-400 p-4 rounded-md w-72 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-100">
                    <span className="text-4xl">+</span>
                </div>
            </div>
            <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} task={currentTask} />
        </div>
    );
};

export default Tasks;
