import React,{useState} from 'react'
import {Link,Route,useParams} from 'react-router-dom'

const Friend = props=>{
    let {id}=useParams()
    const[friend,setFriend] = useState();
    return(
        <div className='friend-card'>
            
            <Link to={`/friends/${props.friend.id}`}>
            <h4>Name: {props.friend.name}</h4>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <div className='button-container'>
                <button>Toggle Editing</button>
                <button>Delete</button>
            </div>
           </Link>         
        </div>
    )
    
}

export default Friend