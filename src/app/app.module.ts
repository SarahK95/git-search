import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { GitResultsComponent } from './git-results/git-results.component';
import { DaysCountPipe } from './days-count.pipe';
import { SearchGithubService } from './search-github.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    GitResultsComponent,
    DaysCountPipe,
  
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],


  providers: [],  //SearchGithubService
  bootstrap: [AppComponent]
})
export class AppModule { }
