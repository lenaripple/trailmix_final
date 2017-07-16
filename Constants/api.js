import axios from 'axios';

axios.defaults.baseURL = 'https://trailmix-backend.herokuapp.com/api/v1'
// 'mongodb://heroku_g6cmp0qw:ee953ghad3t5pp149m7etmilef@ds157702.mlab.com:57702/heroku_g6cmp0qw'
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
