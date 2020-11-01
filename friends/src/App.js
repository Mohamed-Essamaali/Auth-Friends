import {useState} from 'react'
import {GlobalContext} from './contexts/globalContext'
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'

//components
import FriendForm from './components/addFriendForm'
import FriendsList from './components/friendsList'
import Login from './components/login'

//utils
import {axiosWithAuth} from './utils/axiosWithAuth'
import {PrivateRoute} from './utils/privateRoute'


function App() {
 

  return (
    <div className="App">
      <div className='nav-bar'>
        <Link to = '/login'>Log in</Link>
        <Link to = '/protected'>Dashboard</Link>

      </div>
      <Switch>
        <Route path='/login' component={Login}/>
        
        
        <PrivateRoute exact path='/protected' component={FriendsList}/>
      </Switch>
    
    </div>
  );
}

export default App;
