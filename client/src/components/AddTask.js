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
        <div>
            <input type='text' placeholder='Add Task' value={task} onChange={event => setTask(event.target.value)} />
            <button onClick={() => addTask()}>Add Task</button>
        </div>
    )
};

export default AddTask;