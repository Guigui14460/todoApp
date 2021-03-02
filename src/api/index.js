const API_SERVER_IP = "138.68.74.39";
const PROTOCOL = "http";

const api_root_endpoint = `${PROTOCOL}://${API_SERVER_IP}`;

export default function endpointCalculator(endpoint){
    return api_root_endpoint + endpoint;
}
