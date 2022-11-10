import axios from "axios";

const api = axios.create({
 baseURL: "https://semanacet.cefetvga.pro.br",
 headers: {
 Accept: 'application/json',
 }
})
export default api;