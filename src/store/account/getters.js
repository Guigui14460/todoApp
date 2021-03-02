import axios from "axios";
import endpointCalculator from "../../api";

export const getUser = (state) => {
    return axios.get(endpointCalculator("/api/user"), state.token).then(response => {
        // TODO
        console.log(response);
    }).catch(function(error){
        console.error(error);
        return null;
    });
}