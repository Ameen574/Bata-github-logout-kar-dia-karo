import React from 'react';
import './index.css'


const App = () => {
  return (
    <div>
      <h1>Database </h1>
      <form>
        <input type="text" placeholder="Enter Name"/>
        <br />
        <br />
        <input type="text" placeholder="Enter Email"/>
        <br />
        <br />
        <input type="text" placeholder="Enter Password"/>
        <br />
        <br />
      <button>Add Data</button>
      </form>
    </div>
  );
}

export default App;
