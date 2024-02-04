import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api-rest.elice.io/org/academy/course/list/',
});
