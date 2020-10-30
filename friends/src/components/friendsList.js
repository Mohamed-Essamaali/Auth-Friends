import React from 'react'

import FriendForm from "./friendForm";

class FriendsList extends React.Component{

    constructor(){
        super();
        this.state= {friends:[{name:'simo',email:'yes@ueaho.fr'}]}
        console.log('friends in list',this.state.friends)
    }
    addNewFriend = newFriend=>{
        console.log('new friend added ',newFriend)
       this.setState({...this.state,friends:[...this.state,newFriend]})
    }

    render(){
        return(
            <div>
                <FriendForm addNewFriend={this.addNewFriend}/>
                <div className='list-friends'>
                    {this.state.friends.map(friend=>{
                        return <div>
                            <h4>Name: {friend.name}</h4>
                            <p>Email: {friend.email}</p>
                            </div>
                    })}
                </div>
            </div>
        )

    }
}

export default FriendsList