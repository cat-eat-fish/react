import HttpRequest from './axios'
var dev = 'localhost:3000/';
var pro = '';
// const baseUrl = process.env.NODE_ENV === 'development' ? dev : pro
const baseUrl = dev 

const axios = new HttpRequest(baseUrl)
export default axios
