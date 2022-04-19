import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';

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
  getUserData(username: string) {
    throw new Error('Method not implemented.');

    this.repoData.length = 0;
  }

  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repo = new Repo("","","",new Date(),"","","",new Date()); 	
  }
}
