import axios from 'axios';

axios.defaults.baseURL = 'https://trailmix-backend.herokuapp.com/api/v1/users'

class UserApi {
  constructor(){
    this.path = `/login`;
  }
  async postLogin(){
    const data = await axios.get(this.path)
    return data.data
  }
}


export {
  UserApi
};
