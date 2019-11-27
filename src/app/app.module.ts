import { BrowserModule } from '@angular/platform-browser';
import {NgcCookieConsentModule , NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import {CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { CookieRecipeComponent } from './cookie-recipe/cookie-recipe.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RecipeSearchComponent,
    AuthComponent,
    UserComponent,
    RegisterComponent,
    CookieRecipeComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
