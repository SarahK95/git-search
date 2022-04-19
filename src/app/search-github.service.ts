import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Observable } from './rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  repoData = [];
  repo!:Repo;
  newUserData :any = [];
  showInput!:boolean;
	showData!:boolean;
  user!: User;

  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date(),new Date(),"");
   	this.repo = new Repo("","","",new Date(),"","","",new Date()); 	
  }


  getUserData(username: string) {
    throw new Error('Method not implemented.');

    this.repoData.length = 0;

    interface ApiResponse{
      html_url:string,
      login:string,
      public_repos:number,
      avatar_url:string,
      created_at:Date,   
      name:string,
      full_name:string, 
      bio:string,
      updated_at:Date,  
  }

  let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then((response:any)=>{
      this.user.bio=response.bio;
	            this.user.avatar_url=response.avatar_url;
	            this.user.login=response.login;
	            this.user.public_repos=response.public_repos;
	            this.user.created_at=response.created_at;
	            this.user.updated_at=response.updated_at;
	            this.user.html_url=response.html_url;

	            resolve(response)

  },
  error=>{
    reject(error)
}
    )
})

return promise

  }

}
  

  // baseURL: string = 'https://api.github.com';


  // getRepos(userName: string): Observable<repo[]> {
  //   return this.http.get<repo[]>(this.baseURL + '/users/' + userName + '/repos');


