import React, { useState } from 'react';
import axios from 'axios';
import './UpdateTask.css'

const UpdateTask = (props) => {
    
    const [task, setTask] = useState(props.task.text);

    // Updating a task in todo list
    const updateTodo = () => {
        if(task.trim() === '' || props.task.text === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:8000/api/todo/${props.task.id}`,{
                id : props.task.id,
                text : task,
                status : 'pending'
            }).then(res => {
                props.removePopup()
                props.updateTask(res.data)
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className = 'popup'>
        <div className = 'popup-content'>
            <input type = 'text'  placeholder = 'Update Task' value = {task} 
            onChange = {event => setTask(event.target.value)}/>
            <button onClick = {() => updateTodo()}>Update</button>
        </div>
    </div>
    )
}

export default UpdateTask