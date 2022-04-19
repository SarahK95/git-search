import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  repoData!:any;
  user!: User;
  getUserData(username: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
