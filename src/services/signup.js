import axios from 'axios';
import {auth} from './firebase-service';


export const createUserAccount = (data) => {
  return axios.post('/profile/signup', data)
    .then(res => res.data).catch(err => console.log(err))
}


export const loginUser = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
}