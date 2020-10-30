import React from 'react'
import './App.css';
import FriendsList from './components/friendsList';
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <FriendsList/>
      <Login/>
    </div>
  );
}

export default App;
