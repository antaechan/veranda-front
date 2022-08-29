import axios from "axios";

const imgClient = axios.create();

/* 
여러 가지 작업 

imgClient.defaults.baseURL = 'https://externel-api-server.com/'

imgClient.defaults.headers.common['Athuorization'] = 'Bearer a1b2c3d4'

*/
imgClient.defaults.headers.post["Content-Type"] = "multipart/form-data";

export default imgClient;
