import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            user:{username:'',password:''},
            isLoading:false
        }
    }
    handleChange = e=>{
        this.setState({user:{...this.state.user,[e.target.name]:e.target.value}})
        console.log(this.state)
    }

    login = e=>{
        e.preventDefault();

        axiosWithAuth()
        .post('http://localhost:5000/api/login',this.state.user)
        .then(res=>{
            // console.log('res.data axios post',res.data);
            this.setState({...this.state,isLoading:true});
            localStorage.setItem('token',res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err=>{
            console.log('Err is ',err)
        })

    }
    render(){
        console.log('state in log in',this.state)
        return(
            <div>
                <h1>Please Log In !!</h1>
                <form onSubmit={this.login}>
                    <input 
                        type='text' 
                        name='username' 
                        placeholder='User Name'
                        value={this.state.user.username} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
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