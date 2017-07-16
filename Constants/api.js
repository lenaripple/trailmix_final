import axios from 'axios';

axios.defaults.baseURL = 'https://trailmix-backend.herokuapp.com/api/v1'

class Api {
  constructor(){
    this.path = `/posts`;
  }
  async fetchPosts(){
    const data = await axios.get(this.path)
    return data.data
  }
}


export {
  Api
};
