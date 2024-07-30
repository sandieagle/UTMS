import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/auth/task')
      .then((response) => {
        if (response.data.Status) {
          setTasks(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_task/`+id)
      .then((response) => {
        if (response.data.Status) {
          setTasks(tasks.filter((task) => task.id !== id));
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Task List</h3>
      </div>
      <Link to="/dashboard/add_task" className="btn btn-success">
        Add Task
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.dueDate}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
                <td>
                  <Link to={`/dashboard/edit_task/${task.id}`} className="btn btn-info btn-sm me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
