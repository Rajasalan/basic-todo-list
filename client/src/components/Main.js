import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const Main = () => {
    const [todoList, setTodoList] = useState([]);
    const [taskToUpdate , setTaskToUpdate] = useState({})
    const [showPopup,setShowPopup] = useState(false)

    const loadTask = () => {
        axios.get('http://localhost:8000/api/todo').then(res => {
            console.log(res.data);
            setTodoList(res.data);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        loadTask();
    }, []);

    const addTask = newTask => {
        setTodoList([...todoList, newTask]);
        loadTask();
    }

    const updateTask = task => {
        const newList = [...todoList]
        newList.forEach(item => {
          if(item.id === task.id){
            item.text = task.text
          }
        })
        setTodoList(newList);
        loadTask();
    }
    
    const removeTask = task => {
        const newList = todoList.filter(item => !(item.id === task.id))
        setTodoList(newList);
        loadTask();
    }
    
    const taskComplete = task => {
        const newList = [...todoList]
        newList.forEach(item => {
          if(item.id === task.id){
            item.status = 'done'
          }
        })
        setTodoList(newList)
      } 
    
    
    return (
        <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-4">
            <AddTask addTask={addTask}/>
                <TodoList todoList={todoList}
                    taskToUpdate={task => setTaskToUpdate(task)} showPopup={() => setShowPopup(!showPopup)}
                    removeTask={removeTask}
                    taskComplete = {taskComplete} />
             
                 {showPopup && <UpdateTask task = {taskToUpdate} updateTask = {updateTask} 
      removePopup = {() => setShowPopup(!showPopup)}/>}
            </div>
            
            </div>
    );
    }
      
  export default Main