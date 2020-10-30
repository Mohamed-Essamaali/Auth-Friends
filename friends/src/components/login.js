import React from 'react'

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            user:{username:'',password:''},
            isLoading:false
        }
    }
    handleChange = e=>{
        this.setState(...this.state,{[e.target.name]:e.target.value})
    }
    login = e=>{
        e.preventDefault();

    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type='text' 
                        name='username' 
                        value={this.state.user.username} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        value={this.state.user.password} 
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
               

            </div>
        )
    }

}
export default Login