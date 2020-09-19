import axios from 'axios';

const instance  = axios.create({
    baseURL: 'https://react-my-burger-81b6b.firebaseio.com/'
});

export default instance;
