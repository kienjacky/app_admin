import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8082/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
