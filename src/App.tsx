import React from 'react';
import logo from './logo.svg';
import './App.css';
import PollList from './component/PollList/PollList';
import PollListWithRedux from './component/PollListRedux/PollListWithRedux';

function App() {
  return (
    <div className="App">
      <div>  <PollList/></div>
      <div> <PollListWithRedux/></div>
   
    
    </div>
  );
}

export default App;
