import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { GitResultsComponent } from './git-results/git-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    GitResultsComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
