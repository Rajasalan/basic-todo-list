import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTask from './AddTask';

const Main = () => {
    const [todolist, setTodolist] = useState([]);

    const loadTask = () => {
        axios.get('http://localhost:8000/api/todo').then(res => {
            console.log(res.data);
            setTodolist(res.data);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        loadTask();
    }, []);

    const addTask = newTask => {
        setTodolist([...todolist, newTask]);
        loadTask();
    }
    
    return (
        <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-4">
            <AddTask addTask={addTask}/>
            <TodoList todolist={todolist} />
            </div>
            </div>
    );
    }
      
  export default Main