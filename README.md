# Todo React Application using React JS

## What is the use of this Repo

This Project is a Todo React Application which demonstrates the following

1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using React Hook

This project template can be utilized to develop further

## Application URL to download

### https://github.com/Rajasalan/basic-todo-list


## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local
Clone the project into local

### client
Install all the npm packages. 
Go into the project folder and type the following command to install all npm packages

```bash
npm install
```
```bash
npm install bootstrap
```
```bash
npm install font-awesome
```

In order to run the application Type the following command
```bash
npm start
```

### server
Install the following for server

```bash
npm i express cors
```
```bash
npm i body-parser
```
```bash
npm i nodemon
```

In order to run the application Type the following command
```bash
npm start
```

or 
```bash
nodemon server.js
```
The Application Runs on **localhost:3000**


## Application design

#### Components
1. **App.js** : Displays whole project.
2. **Main.js** : Todo List, update a list item, delete a list item and update status are rendered in this component.
3. **TodoList.js** : This component displays the todo list items and also it has delete and update status. The data is fetched from json.
4. **AddTask.js** : This component add new task to the todo list.
5. **UpdateTask.js** : This component update a task in todo list.


#### HTTP client
To make HTTP Calls **axios** library is used 

#### Endpoints in REST API

We will implement following endpoints to our REST API.

**Http method and endpoints**             |              **Functionality**
GET /api/todo                         |              Get all todo list
POST /api/todo	                      |              Add new task
DELETE /api/todo/delete/:id	          |              Delete Task from todo list
PUT /api/todo/:id"	                  |              Update Task by id in todo list
PUT /api/todo/updateStatus/:id        |              Update Status by id in todo list
