import {useState} from 'react'
import {GlobalContext} from './contexts/globalContext'
import './App.css';
import {Route,Link} from 'react-router-dom'

//components
import FriendForm from './components/addFriendForm'
import FriendsList from './components/friendsList'
import Login from './components/login'

//utils
import {axiosWithAuth} from './utils/axiosWithAuth'
import {PrivateRoute} from './utils/privateRoute'


function App() {
 
  const[friends,setFriends] =useState([{name:'simo',age:11,email:'12@yaho.fr'}])
 
console.log('friends in App ',friends)
  const addNewFriend = e=>{
    // e.preventDefault();
    console.log('add new friend called ')
    let newFriend = {
        id:Date.now(),
        name: e.name,
        age: e.age,
        email: e.email
    }
setFriends([...friends,newFriend])

}



  return (
    <div className="App">
      <div className='nav-bar'>
        <Link to = '/login'>Log in</Link>
        <Link to = '/protected'>Dashboard</Link>

      </div>
      <Route exact path='/login'>
         <Login />
      </Route>
       
        <PrivateRoute path='/protected'>
          <FriendsList friends={friends} addNewFriend={addNewFriend}/>
        </PrivateRoute>
        
     
    
    </div>
  );
}

export default App;
