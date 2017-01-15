import { GET_USERS } from '../constants/index';
import axios from 'axios';


var users;
let request = axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => users = response.data)
    .catch( error => console.log(error));


export const getUsers = () => ({
    type:GET_USERS,
    payload: users
});

