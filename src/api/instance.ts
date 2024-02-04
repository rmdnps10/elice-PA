import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-rest.elice.io/org/academy/course/list/',
});

export default instance;
