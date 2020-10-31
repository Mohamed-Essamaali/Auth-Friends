import axios from 'axios'


export const axiosWithAuth = ()=>{

    const token = localStorage.getItem('token')
    return axios.create({
        baseUrl: 'http://localStorage:5000/api',
        headers: {Authorization: token}
    })

}