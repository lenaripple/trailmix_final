import axios from 'axios';

axios.defaults.baseURL = 'https://trailmix-backend.herokuapp.com'

class api {
  constructor(){
    this.path = '/'
  }
  async fetchPosts(){
    const {data} = await axios.get(this.path)
    console.log('hit feth route');
    return data.posts
  }
}


export api;
