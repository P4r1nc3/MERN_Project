import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
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
        <div className="app-container">
            <div className="header">
                <h1>Tasks</h1>
            </div>
            <div className="task-container">
                {tasks.map(task => (
                    <div key={task._id} className="task-tile">
                        <p>{task.description}</p>
                        <div className="status">{task.date ? `Due: ${new Date(task.date).toLocaleDateString()}` : 'Incomplete'}</div>
                        <div className="icons">
                            <FiEdit />
                            <AiOutlineDelete />
                        </div>
                    </div>
                ))}
                <div className="task-tile add-task-tile" onClick={() => alert('Add new task!')}>
                    <span>+</span>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
