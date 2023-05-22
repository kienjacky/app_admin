import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})