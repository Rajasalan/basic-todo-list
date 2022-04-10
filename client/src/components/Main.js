import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TodoList from './TodoList';

const Main = () => {
    const [todolist, setTodolist] = useState([]);

    const loadTask = ()=>{
        axios.get('http://localhost:8000/api/todo').then(res => {
            console.log(res.data);
            setTodolist(res.data);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        loadTask();
    }, []);
    
    return (
        <div>
            <TodoList todolist={todolist} />
        </div>
    );
    }
      
  export default Main