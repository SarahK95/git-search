import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user';
import { Repo } from '../repo';


@Component({
  selector: 'app-git-results',
  templateUrl: './git-results.component.html',
  styleUrls: ['./git-results.component.css']
})


export class GitResultsComponent implements OnInit {

  user!:User; 
  repoDetails : any; 
  searchGithubService!:SearchGithubService;
  hideInput!:boolean;

  

  constructor(searchGithubService:SearchGithubService) {
    this.searchGithubService = searchGithubService;
   }

  @Output() toggleBack = new EventEmitter();

  ngOnInit(): any {
    this.user = this.searchGithubService.user;
    this.repoDetails = this.searchGithubService.repoData;

  }

}
