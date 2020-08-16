import * as request from 'request'
import { User } from "./User";

const options = {
  headers:{
    "User-Agent":"request"
  },
  json:true
}

export class GithubAppiService{
  getUserInfo(userName:string){
    request.get('https://api.github.com/users/'+userName,options,(error:Error,response:any,body:any)=>{
    let user:User = new User(body);
    console.log(user);
    })
  }
}