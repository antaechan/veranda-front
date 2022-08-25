import axios from "axios";

const client = axios.create();

/* 
여러 가지 작업 

client.defaults.baseURL = 'https://externel-api-server.com/'

client.defaults.headers.common['Athuorization'] = 'Bearer a1b2c3d4'

*/

export default client;
