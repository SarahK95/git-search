import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 import { User } from '../user';
 import { SearchGithubService } from '../search-github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})



export class SearchFormComponent implements OnInit {
 
   user!:User;
   username!: string;
  searchGithubService: SearchGithubService;
  showInput: any;
  showData: any;


  submitUsername(){
    this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    this.showData = true;

  }

  showUserInput(hideInput: any) {
    this.showInput = hideInput;
    this.showData = false;
  }

  constructor(searchGithubService:SearchGithubService) {
    this.searchGithubService = searchGithubService;
   }

  ngOnInit(): void {
  }

}
