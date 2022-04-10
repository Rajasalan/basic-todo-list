import React from 'react';
import './TodoList.css';

const TodoList = (props) => {

    return (
    <div>
            <ul>
                {
                    props.todolist.map((task, index) => (
                        <li key={index}>
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