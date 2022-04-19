import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Observable } from './rxjs/Rx';

// import * as process from 'process';

@Injectable()



export class SearchGithubService {

  repoData = [];
  repo!:Repo;
  newUserData :any= [];
  showInput!:boolean;
	showData!:boolean;
  user!: User;

  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date(),new Date(),"");
   	this.repo = new Repo("","","",new Date(),"","","",new Date()); 	
  }


  getUserData(username: string) {


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

  let promise =new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then((response:any)=>{
      this.user.bio=response.bio;
	            this.user.avatar_url=response.avatar_url;
	            this.user.login=response.login;
	            this.user.public_repos=response.public_repos;
	            this.user.created_at=response.created_at;
	            this.user.updated_at=response.updated_at;
	            this.user.html_url=response.html_url;

	            resolve()

  },
  error=>{
    reject(error)
}
    )

    this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
      for(var i=0; i<response.length; i++)
	        	{

              this.newUserData = new Repo(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
	        		 this.repoData.push(this.newUserData);
            }

            resolve()


},

error=>{

  reject(error)
}
    )
})

return promise

  }

}
  
