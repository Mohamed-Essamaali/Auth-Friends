import React,{useContext,useState,useEffect} from 'react'
import {GlobalContext}from '../contexts/globalContext';
import FriendForm from './addFriendForm'
import Friend from './friendCard'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Route,useParams,Link} from 'react-router-dom'



const FriendsList= ()=>{
    
    const[friends,setFriends] =useState([])

    useEffect(()=>{
        getFriends();
    },[])
     
    
 
    const getFriends = ()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res=>{

            setFriends(...friends,res.data)

        })
        .catch(err=>{
            console.log(err)
        })

    }
    console.log('friends in list ',friends)

      const addNewFriend = e=>{
        console.log('add new friend called ')
        let newFriend = {
            id:Date.now(),
            name: e.name,
            age: e.age,
            email: e.email
        }
        axiosWithAuth()
        .post('http://localhost:5000/api/friends',newFriend)
        .then(res=>{
        console.log('adding newfriend in list using post axios',res.data)
            setFriends(res.data)
            

        })
        .catch(err=>{
            console.log(err)
        })
    
    
    }

        return(
            <div>

                <h1>Welcome to Freinds List</h1>
                <h4>You can browse or add, edit your friends</h4>
                <FriendForm addNewFriend={addNewFriend}/>

                <h3>List of Friends:</h3>
                <div className='friends-list'>
                    {friends.map(friend=>{
                        return <Friend  key ={friend.id} friend={friend}/>
                       
                    })}
                </div>
            </div>
        )

    }
   

export default FriendsList