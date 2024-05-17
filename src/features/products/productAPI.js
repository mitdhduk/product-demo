import axios from "axios";
import { ENDPOINT } from "../../config";


export function getProductsAPI() {
    return axios.get(`${ENDPOINT}/products`)
}


export function getProductDetailsAPI(id) {
    return axios.get(`${ENDPOINT}/products/${id}`)
}
