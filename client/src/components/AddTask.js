import React, { useState } from 'react';
import axios from 'axios';

/* Adding new task to the todo list */
const AddTask = (props) => {
    const [task, setTask] = useState("");


    const addTask = () => {
        // trim method is used to remove the whitespace
        if (task.trim() === '') {
            return
        } else {
            // Axios to call backend API interfaces from front end
            //  Post is used to send data to api
            axios.post('http://localhost:8000/api/todo', {
                text: task,
                status: 'pending'
            }).then(res => {
                setTask("")
                // using props sending the data to Main.js
                props.addTask(res.data)
            }).catch(err => console.log(err))
        };
    };

    return (
        <div className="card card-body my-3">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-info text-white">
                        <i className="fa fa-list fa-2x" />
                    </div>
                </div>
                <input type='text' className="form-control" placeholder='Add Task' value={task} onChange={event => setTask(event.target.value)} />
            </div>
            <button className="btn btn-block mt-3 bg-info text-white" onClick={() => addTask()}>Add Task</button>
        </div>
    )
};

export default AddTask;