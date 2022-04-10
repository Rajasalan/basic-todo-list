import React from 'react';
import './TodoList.css';

const TodoList = (props) => {

    return (
    <div>
            <ul className="list-group my-5" >
                {
                    props.todolist.map((task, index) => (
                        <li className="list-group-item d-flex justify-content-between my-2" key={index}>
                              <div style = {{display : 'flex'}}>
                                <p>{task.text}</p>
                                </div>
                            </li>
                     ))

                }
         </ul>
        </div>
    )
  }
  
  export default TodoList