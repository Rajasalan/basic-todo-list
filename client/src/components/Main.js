import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';


const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [allTodoList, setallTodoList] = useState([]);

  // It fetch all todo list items
  const loadTask = () => {
    axios.get('http://localhost:8000/api/todo').then(res => {
      console.log(res.data);
      setTodoList(res.data);
      setallTodoList(res.data);
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    loadTask();
  }, []);

  // adding new task to the list
  const addTask = newTask => {
    // Using spread operator gets all todo list 
    // and adding new task
    setTodoList([...todoList, newTask]);
    loadTask();
   
  }

  // Filter the status done or pending
  const filterListByStatus = (status) => {
    var filterTask = allTodoList.filter(s => s.status === status);
    setTodoList(filterTask);
  }

  //Updating a item in todo list
  const updateTask = task => {
    const newList = [...todoList]
    newList.forEach(item => {
      if (item.id === task.id) {
        item.text = task.text
      }
    })
    setTodoList(newList);
    loadTask();
  }
   
  // Deleting a item in todo list
  const removeTask = task => {
    const newList = todoList.filter(item => !(item.id === task.id))
    setTodoList(newList);
    loadTask();
  }
    
  const taskComplete = task => {
    const newList = [...todoList]
    newList.forEach(item => {
      if (item.id === task.id) {
        item.status = 'done'
      }
    })
    setTodoList(newList)
  }
    
    
  return (
    <div className="row">
      <div className="col-10 col-md-8 mx-auto mt-4">
        <AddTask addTask={addTask} />
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-info btn-block mt-1 btn-lg" onClick={() => loadTask()}>Todo List Items</button>
          </div>
          
          <div className="col-md-4">
            <button className="btn btn-info btn-block mt-1 btn-lg" onClick={() => filterListByStatus('pending')}>Pending List</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-info btn-block mt-1 btn-lg" onClick={() => filterListByStatus('done')}>completed List</button>
          </div>
        </div>
        <TodoList todoList={todoList}
          taskToUpdate={task => setTaskToUpdate(task)} showPopup={() => setShowPopup(!showPopup)}
          removeTask={removeTask}
          taskComplete={taskComplete} />
             
        {showPopup && <UpdateTask task={taskToUpdate} updateTask={updateTask}
          removePopup={() => setShowPopup(!showPopup)} />}
      </div>
    
      
    </div>
  );
}
  export default Main