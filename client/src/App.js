import React from 'react';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-10 col-md-8 mx-auto mt-4">
      <h3 className="text-capitalize text-center">TodoList</h3>
          <Main />              
        </div>
      </div>
      </div>
    
  );
}

export default App;
