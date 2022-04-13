import React from 'react';
import axios from 'axios';
import './TodoList.css';

/* Displaying Todo list 
 Axios is used to send http request to backend*/

const TodoList = (props) => {

    // Deleting a item in todo list
    const removeTask = id => {
        axios.delete(`http://localhost:8000/api/todo/delete/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
    }
   
    // Updating  status in todo list
    const taskComplete = task => {
        axios.put(`http://localhost:8000/api/todo/updateStatus/${task.id}`, {
             
            status: 'done'
           
        }).then((res) => {
         
            props.taskComplete({
                id: task.id,
                status: 'done'
            });
            console.log(res.data)
        }).catch(err => console.log(err));
        
    }

    return (
        <div>
            <ul className="list-group my-5" >
                {
                    props.todoList.map((task, index) => (
                        <li className="list-group-item d-flex justify-content-between my-2" key={index}>
                            <div className="todo-icon">
                               
                                <p style={{
                                    textDecoration: task.status === 'done' ? 'line-through' : '',
                                    color: task.status === 'done' ? '#DA3441' : ''
                                }} onClick={() => {
                                    taskComplete(task)
                                }}>
                                    {task.text}
                                    
                                </p>
                                
                            </div>
                            <div>
                                <button className='check-done' onClick={() => {
                                    taskComplete(task)
                                }}>
                                    <i className={`${task.status === 'done' ? "fa fa-check-square-o fa-2x" : "fa fa-square-o fa-2x"}`} />
                                </button>
                                <button className='edit' onClick={() => {
                                    props.taskToUpdate(task)
                                    props.showPopup()
                                }} ><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></button>

                                <button className='delete' onClick={() => {
                                    removeTask(task.id)
                                }}><i
                                    className="fa fa-trash fa-2x"
                                    aria-hidden="true"
                                ></i> </button>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}
  
  export default TodoList