import axios from 'axios';

const USER_API_BASE_URL = 'https://cors-anywhere.herokuapp.com/http://spring-boot-docker1.us-west-2.elasticbeanstalk.com/rest/random';

class ApiService {


    fetchUsers() {
        // const headers = {
        //     'Access-Control-Allow-Origin':'*'
        //   };
        return axios.get(USER_API_BASE_URL);
    }

    // fetchUserById(userId) {
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    // deleteUser(userId) {
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }

    // addUser(user) {
    //     return axios.post(""+USER_API_BASE_URL, user);
    // }

    // editUser(user) {
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }

}

export default new ApiService();