const express = require('express');
const router = express.Router();
const fs = require('fs');

// Fetch all todo list
router.get('/api/todo', (req,res)=>{
    let jsonData =  fs.readFileSync('db.json');
    res.status(200).json(JSON.parse(jsonData));
    console.log(jsonData);
});

// Add new todo task
router.post("/api/todo", (req, res) => {
    
    // Extract todo  from the request body
  let todoData = req.body;
  let id = req.body;

    // Reading existing todo list
    let jsonData =  fs.readFileSync('db.json');
    const todoList = JSON.parse(jsonData);
    todoData.id = todoList[todoList.length-1].id + 1;

    // Add new task to the list
    todoList.push(todoData);

    // Write the new task todo list to the json db
    const stringifyData = JSON.stringify(todoList);
    fs.writeFileSync('db.json', stringifyData);
    res.status(201).json();
  }); 

// Delete todo list
router.delete('/api/todo/delete/:id', (req,res)=>{

    // Reading existing todo list
    let jsonData =  fs.readFileSync('db.json');
    const todolist = JSON.parse(jsonData);
    const id = parseInt(req.params.id);

    const index = todolist.filter(task => task.id !== id);
    //save the filtered data
    const stringifyData = JSON.stringify(index);
    fs.writeFileSync('db.json', stringifyData);
    res.status(201).json();
});

// Update todo list task
router.put("/api/todo/:id", (req, res) => {

    // Reading existing todo list
    var jsonData =  fs.readFileSync('db.json');
    const todoList = JSON.parse(jsonData);
   
    // parse an id from the route parameter
    const id = req.params.id;
    const updatedTask = {'id': id, ...req.body};
   
    //Get the index of updated todo task
    const index = todoList.findIndex(task => task.id === parseInt(id));
    //Replace updated todo task in the array
    todoList.splice(index, 1, updatedTask); 
  
    const stringifyData = JSON.stringify(todoList);
    fs.writeFileSync('db.json', stringifyData);
    res.status(201).json();
  });


// Update todo list status
 router.put("/api/todo/updateStatus/:id", (req, res) => { 
  
    // Reading existing todo list from db
    let jsonData =  fs.readFileSync('db.json');
    const todoList = JSON.parse(jsonData);
    const id = req.params.id;

    // Find index of the particular task
    var todoTask = todoList.find(task => task.id === parseInt(id));
  
    // Update the status
    todoTask.status =req.body.status;
    // Write the updated task list to the json db
    const stringifyData = JSON.stringify(todoList);
    fs.writeFileSync('db.json', stringifyData);
    res.status(201).json();
}); 


module.exports = router;