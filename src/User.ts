export class User{
  login:string
  avatar_url:string
  constructor(body:any){
    this.login = body.login
    this.avatar_url = body.avatar_url
  }
}