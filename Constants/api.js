import axios from 'axios';

axios.defaults.baseURL = 'https://trailmix-backend.herokuapp.com/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//logged in as ripplelena
axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTY4ZjA1ZjBjZGNmOTAwMTFlOWRiMjIiLCJpYXQiOjE1MDAzODc2ODZ9.q51IAeCZoQaRqUG6cJswSetG2zqPIRAnsJwmZWJtWT4';

class PostApi {
  constructor(){
    this.path = `/posts`;
  }
  async fetchPosts(){
    const data = await axios.get(this.path)
    return data.data
  }
  async createPosts(postData){
    const newPost = await axios.post(this.path, {title: postData._title, date:postData.date, location:postData.location, description: postData.description, activity:postData.activity, extra:postData.extra})
    .then((response)=>{
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}

class UserApi {
  constructor(){
    this.path = `/users`;
  }
  async postLogin(){
    const data = await axios.post(this.path)
    return data.data
  }
}


export {
  PostApi,
  UserApi
};
