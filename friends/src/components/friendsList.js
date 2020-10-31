import React,{useContext} from 'react'
import {GlobalContext}from '../contexts/globalContext';
import FriendForm from './addFriendForm'



const FriendsList= (props)=>{

        return(
            <div>
                <FriendForm addNewFriend={props.addNewFriend}/>
                <div className='list-friends'>
                    {props.friends.map(friend=>{
                        return <div key={friend.id}>
                            <h4>Name: {friend.name}</h4>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                            </div>
                    })}
                </div>
            </div>
        )

    }


export default FriendsList