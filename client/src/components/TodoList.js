import React from 'react';
import axios from 'axios';
import './TodoList.css';

const TodoList = (props) => {

    const removeTask = id => {
        axios.delete(`http://localhost:8000/api/todo/delete/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
    }

    const taskComplete = task => {
         axios.put(`http://localhost:8000/api/todo/updateStatus/${task.id}` , {
             
              status :'done'
           
         }).then((res) =>{
         
             props.taskComplete({id: task.id,
             status:'done'});
             console.log(res.data)
         }).catch(err => console.log(err));
        
     }

    return (
    <div>
            <ul className="list-group my-5" >
                {
                    props.todoList.map((task, index) => (
                        <li className="list-group-item d-flex justify-content-between my-2" key={index}>
                              <div style = {{display : 'flex'}}>
                              <p style={{ fontStyle : task.status  === 'done' ? 'italic': 'bold'}} onClick = {() => {
                   taskComplete(task)
               }}>{task.text}</p>
                            </div>
                            <div>
                <button onClick = {() => {
                    props.taskToUpdate(task)
                    props.showPopup()
                                }} >Edit</button>

<button  onClick = {() => {
                    removeTask(task.id)
                }}>Delete </button>
                                </div>
                            </li>
                     ))

                }
            </ul>
            
            <h2>Done</h2>
<ul>
    {
      props.todoList.filter(s=>s.status === 'done').map((task,index) => 
          (

            <li key = {index}>
            <div style = {{display : 'flex'}}>
             
               <p>{task.text}</p>
            </div>
            <div>
                <button onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}>Edit</button>
                <button className = 'close' onClick = {() => {
                    removeTask(task.id)
                }}>delete</button>
            </div>
        </li> 
          ))
    }
    </ul>      
    <h2>Pending</h2>
<ul>
    {
      props.todoList.filter(s=>s.status === 'pending').map((task,index) => 
          (

            <li key = {index}>
            <div style = {{display : 'flex'}}>
               
               <p style={{ fontStyle : task.status  === 'done' ? 'italic': 'bold'}}>{task.text}</p>
            </div>
            <div>
                <button onClick = {() => {
                    props.taskToUpdate(task)
                    props.showPopup()
                                }} >Edit</button>

<button  onClick = {() => {
                    removeTask(task.id)
                }}>Delete </button>
                                </div>
        </li> 
          ))
    }
    </ul>    
        </div>
    )
  }
  
  export default TodoList