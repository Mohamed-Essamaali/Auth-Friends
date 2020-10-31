import React,{useContext, useState} from 'react'
import {GlobalContext} from '../contexts/globalContext'

const FriendForm=(props)=>{
    
    // const{addNewFriend}=useContext(GlobalContext)
   

 
    const[friend,setFriend] = useState({
        name:'',
        age:'',
        email:''
    })
                    
            
          
   
   const handleChange=e=>{
        setFriend({...friend,[e.target.name]:e.target.value})
        console.log('state changes in form',friend)
    }
    const handleSubmit = e=>{
        e.preventDefault();
        console.log('add submit new friend called ',friend);
       props.addNewFriend(friend)

    }
    

   
        return(
            <div>
              
                
                    <form onSubmit={handleSubmit}>
                        <input 
                        type='text' 
                        name='name' 
                        placholder = 'name' 
                        onChange={handleChange} 
                        value={friend.name}/>
                          <input 
                        type='text' 
                        name='age' 
                        placholder = 'age' 
                        onChange={handleChange} 
                        value={friend.age}/>
                        <input 
                        type='text' 
                        name='email' 
                        placholder = 'email' 
                        onChange={handleChange} 
                        value={friend.email}/>

                        <button>Add new Friend</button>
                    </form>
                
            </div>
        )
    
}
export default FriendForm