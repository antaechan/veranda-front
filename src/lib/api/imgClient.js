import axios from "axios";

const imgClient = axios.create();

/* 
여러 가지 작업 


imgClient.defaults.headers.common['Athuorization'] = 'Bearer a1b2c3d4'

*/
imgClient.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`;
imgClient.defaults.headers.post["Content-Type"] = "multipart/form-data";

export default imgClient;
