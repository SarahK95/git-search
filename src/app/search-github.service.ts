import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';

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
  }

  constructor() { }
}
