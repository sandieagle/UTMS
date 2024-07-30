import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: '',
        dueDate: '',
        completed: false
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch task data
        axios.get(`http://localhost:3000/auth/tasks/`+id)
            .then(result => {
                if (result.data.Status) {
                    setTask(result.data.Result);
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/auth/edit_task/`+id, task)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/task');
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h2>Edit Task</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select className="form-select" id="priority" value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input type="date" className="form-control" id="dueDate" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="completed" checked={task.completed} onChange={(e) => setTask({ ...task, completed: e.target.checked })} />
                        <label className="form-check-label" htmlFor="completed">Completed</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Edit Task</button>
            </form>
        </div>
    );
};

export default EditTask;
