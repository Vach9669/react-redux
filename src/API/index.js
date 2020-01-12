import axios from "axios";
import EndpointFactory from "axios-endpoints";
const axiosInstance = axios.create({
  baseURL: "",
  responseType: "json"
});
const Endpoint = EndpointFactory(axiosInstance);
export default {
  rooms       : new Endpoint("rooms"),
  deleteUpdateVisitor :(id)=> new Endpoint("visitors/" + id)
}

