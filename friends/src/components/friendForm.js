import React from 'react'

class FriendForm extends React.Component{
    constructor(){
        super();
        this.state= {
                    name:'',
                    email:''
            
          
        }
        console.log('state in form',this.state)
    }
    handleChane=e=>{
        this.setState({...this.state,[e.target.name]:e.target.value})
        console.log('state changes in form',this.state)
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.props.addNewFriend}>
                    <input 
                    type='text' 
                    name='name' 
                    placholder = 'name' 
                    onChange={this.handleChane} 
                    value={this.state.name}/>
                     <input 
                    type='text' 
                    name='email' 
                    placholder = 'email' 
                    onChange={this.handleChane} 
                    value={this.state.email}/>

                    <button>Add new Friend</button>
                </form>
            </div>
        )
    }
}
export default FriendForm