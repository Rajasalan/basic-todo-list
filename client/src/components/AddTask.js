import React, { useState } from 'react';
import axios from 'axios';

const AddTask = (props) => {

    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === '') {
            return
        } else {
            axios.post('http://localhost:8000/api/todo', {
                text: task,
                status: 'pending'
            }).then(res => {
                setTask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        };
    };

    return (
        <div className="card card-body my-3">
            <div className="input-group">
                        <div className="input-group-prepend">
                       
                        </div>
                <input type='text' placeholder='Add Task' value={task} onChange={event => setTask(event.target.value)} />
                
                </div>
            <button onClick={() => addTask()}>Add Task</button>
        </div>
    )
};

export default AddTask;